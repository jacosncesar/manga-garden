# Public Extension Download

The website's download buttons open the latest GitHub Release:

`https://github.com/jacosncesar/manga-garden/releases/latest`

The repository must be public for visitors without GitHub access to download release assets. Publishing the website to Cloudflare Pages does not upload the extension ZIP.

## Create the package

Run `npm run package` from the repository root. This builds the extension and creates `manga-garden-v<version>.zip` in the repository root. The archive contains the contents of `dist` directly, including `manifest.json` at the archive root. The generated ZIP is ignored by Git and should be attached to a GitHub Release, not committed to the source repository.

## Publish a GitHub Release

After making the repository public and confirming the package version, create a matching release tag and attach the package:

```sh
gh release create v1.2.3 manga-garden-v1.2.3.zip --title "Manga Garden v1.2.3" --generate-notes
```

Replace `v1.2.3` with the version in `manifest.json` and `package.json`. The `gh` CLI must be authenticated to `jacosncesar/manga-garden`. Verify the release page and asset download before announcing the release.

Publishing a new site build remains independent; use `npm run deploy:site` when the website itself changes.
