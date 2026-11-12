# Public Extension Download

The website's download buttons open the latest GitHub Release:

`https://github.com/jacosncesar/manga-garden/releases/latest`

The repository must be public for visitors without GitHub access to download release assets. Publishing the website to Cloudflare Pages does not upload the extension ZIP.

## Create the package

Run `npm run package` from the repository root. This builds the extension and creates `manga-garden-v<version>.zip` in the repository root. The archive contains the contents of `dist` directly, including `manifest.json` at the archive root, plus the repository `LICENSE` and a generated `NOTICE.txt`. The notice identifies the upstream project, states that Manga Garden is independently modified, gives the package date, and links to the source tag matching the package version. The generated ZIP is ignored by Git and should be attached to a GitHub Release, not committed to the source repository.

## Publish a GitHub Release

After making the repository public and confirming the package version, push the source commit first. Then create a release using the matching version tag, attach the package, and include a clear source-code link and modification notice in the release description:

```powershell
git push origin main
gh release create v1.2.4 .\manga-garden-v1.2.4.zip `
  --title "Manga Garden v1.2.4" `
  --notes "Modified GPL-3.0-or-later release based on Kites, originally developed by Unheat. Manga Garden modifications and branding are independent and are not endorsed by Unheat. Corresponding source code: https://github.com/jacosncesar/manga-garden/tree/v1.2.4. See LICENSE and NOTICE.txt in the ZIP."
```

Replace `v1.2.4` with the version in `manifest.json` and `package.json`. The `gh` CLI must be authenticated to `jacosncesar/manga-garden`. Verify that the release tag points to the source commit used for packaging, and confirm the release page includes the ZIP, source link, and modification notice before announcing it.

Publishing a new site build remains independent; use `npm run deploy:site` when the website itself changes.
