import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import JSZip from 'jszip';

const rootDirectory = process.cwd();
const distributionDirectory = path.join(rootDirectory, 'dist');

/**
 * Adds the files beneath a directory to a ZIP using paths relative to that directory.
 *
 * @param {string} directory - Directory whose files should be added.
 * @param {JSZip} archive - ZIP archive being assembled.
 * @param {string} baseDirectory - Root used to calculate archive entry paths.
 * @returns {Promise<number>} Number of files added to the archive.
 */
async function addDirectoryFiles(directory, archive, baseDirectory) {
  const entries = await readdir(directory, { withFileTypes: true });
  let fileCount = 0;

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      fileCount += await addDirectoryFiles(entryPath, archive, baseDirectory);
    } else if (entry.isFile()) {
      const archivePath = path.relative(baseDirectory, entryPath).split(path.sep).join('/');
      archive.file(archivePath, await readFile(entryPath));
      fileCount += 1;
    } else {
      throw new Error(`Unsupported build output entry: ${entryPath}`);
    }
  }

  return fileCount;
}

/**
 * Packages the built extension, placing manifest.json at the ZIP root.
 *
 * @returns {Promise<void>} Resolves after the archive has been written.
 */
async function main() {
  const distributionStats = await stat(distributionDirectory).catch((error) => {
    if (error.code === 'ENOENT') {
      throw new Error('The dist directory is missing. Run the extension build before packaging.');
    }
    throw error;
  });
  if (!distributionStats.isDirectory()) {
    throw new Error('The dist path exists but is not a directory.');
  }

  const packageJson = JSON.parse(await readFile(path.join(rootDirectory, 'package.json'), 'utf8'));
  const manifest = JSON.parse(await readFile(path.join(distributionDirectory, 'manifest.json'), 'utf8'));
  if (manifest.version !== packageJson.version) {
    throw new Error(
      `Extension version mismatch: package.json is ${packageJson.version}, but dist/manifest.json is ${manifest.version}.`,
    );
  }

  const outputPath = path.resolve(
    rootDirectory,
    process.argv[2] ?? `manga-garden-v${packageJson.version}.zip`,
  );
  const relativeOutputPath = path.relative(distributionDirectory, outputPath);
  if (!relativeOutputPath || (!relativeOutputPath.startsWith(`..${path.sep}`) && relativeOutputPath !== '..')) {
    throw new Error('The ZIP output must be outside the dist directory.');
  }

  const archive = new JSZip();
  let fileCount = await addDirectoryFiles(distributionDirectory, archive, distributionDirectory);
  if (fileCount === 0) {
    throw new Error('The dist directory is empty; refusing to create an empty extension package.');
  }

  const now = new Date();
  const releaseDate = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-');
  const sourceUrl = `https://github.com/jacosncesar/manga-garden/tree/v${packageJson.version}`;
  const notice = [
    `Manga Garden v${packageJson.version} — modified release`,
    '',
    'This project is based on Kites, originally developed by the Unheat team.',
    'Manga Garden is an independent modified project; its branding, interface, and additional changes are not authored or endorsed by Unheat.',
    `Modifications by the Manga Garden project are included in this release. Release date: ${releaseDate}.`,
    '',
    'This program is distributed under the GNU General Public License, version 3 or (at your option) any later version. See LICENSE in this archive.',
    `Corresponding source code for this release: ${sourceUrl}`,
    'Original project: https://github.com/Unheat/Kites',
    '',
  ].join('\n');
  archive.file('LICENSE', await readFile(path.join(rootDirectory, 'LICENSE')));
  archive.file('NOTICE.txt', notice);
  fileCount += 2;

  const zipBuffer = await archive.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, zipBuffer);
  console.log(`Created ${outputPath} with ${fileCount} files.`);
}

await main();
