# Francis Chua — Creative Portfolio Website

A complete, one-page portfolio based on the **Francis Chua Signature Portfolio**. It uses plain HTML, CSS, and JavaScript with no installation, dependencies, framework, account, or build step. All actual visuals are included, and the seven Google Drive video sources remain separate and external.

## Start here

1. Extract `Francis-Chua-Portfolio-Website.zip` if you downloaded the ZIP.
2. Open the `Francis-Chua-Portfolio-Website` folder.
3. Double-click `index.html` to see the site in your browser. The seven videos require internet and Drive permission; images and layout work offline.
4. Want to put it online? Follow the GitHub Pages instructions below.

## File guide

- `index.html`: Sections, text, headings, navigation, contact information and SEO metadata.
- `styles.css`: Black-and-white visual identity, desktop/mobile layout, spacing and type.
- `script.js`: Seven independent video links, five independent images, video player, image lightbox and mobile navigation.
- `assets/images/francis-profile.jpg`: Your portrait, used once in the cover.
- `assets/images/ad-01.png` through `ad-05.png`: Your five original artwork and project visuals.
- `assets/resume/Francis-Chua-Resume.pdf`: Downloadable no-photo résumé.
- `assets/resume/Francis-Chua-Resume-With-Photo.pdf`: Alternate photo résumé; provided but not displayed as the main button.
- `favicon.svg`: Small black-and-white F/C tab icon.

## How to change a video

Open `script.js` in any plain-text editor. At the very top find `const videoItems = [` and find the specific object `id:'video01'` through `id:'video07'`. Update only that object's `originalUrl` and `embedUrl`. Each is deliberately independent.

For a Google Drive file with the share link:

`https://drive.google.com/file/d/FILE_ID/view?usp=drive_link`

The matching embed URL is:

`https://drive.google.com/file/d/FILE_ID/preview`

**Important:** On each video in Google Drive, select **Share → General access → Anyone with the link → Viewer**, if the work is meant to be public. The site cannot override a private file. If a video does not display inside the player, the **Open video in Google Drive** link remains available.

## How to replace one artwork

Replace its file in `assets/images/` with an image of the same filename, or edit the corresponding `src` in the `imageItems` array in `script.js`. Every item uses its own path. Do not replace one file and expect all five to change. The site displays complete artwork without cropping it.

## Edit your contact info, résumé or portrait

- Contact details are near the bottom of `index.html` in the `contact-section`.
- Replace `assets/images/francis-profile.jpg` to change the portrait.
- Replace `assets/resume/Francis-Chua-Resume.pdf` to update the main résumé download, keeping the same filename. To use the photo version as your primary download instead, replace the two résumé `href` occurrences in `index.html`.
- The “Full Creative Archive” link is in the contact section of `index.html`.
- To change the page name and search snippet, update the `<title>` and description meta tags near the top of `index.html`.

## Publish free using GitHub Pages (beginner steps)

1. Make a free account at [github.com](https://github.com) if you do not have one.
2. Sign in. Click **New repository**. Name it something like `francis-portfolio`, choose **Public**, and click **Create repository**.
3. Click **uploading an existing file** or **Add file → Upload files**. Open the extracted website folder and upload **everything inside it**, keeping the same folder structure. `index.html` must be at the top level of the repository, **not** inside an extra nested website folder. GitHub can upload folders by dragging and dropping the directory contents.
4. At the bottom, click **Commit changes**.
5. In your repository, open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**. Choose branch `main`, folder `/(root)`, and click **Save**.
7. Wait a few minutes. GitHub Pages will show your public link, usually `https://YOUR-USERNAME.github.io/francis-portfolio/`.
8. Open the link and test the video cards, lightbox, email, archive, mobile navigation and résumé download.

Your website is only public after **you** upload and publish it. This ZIP is not already hosted online.

## Design and content notes

- Design is based on the signature PDF's black cover, oversized typography, narrow rule lines, numbered dark video tiles, uncropped visual artwork, profile, and black contact ending.
- Seven user-provided Google Drive video links; videos are intentionally not copied into the project.
- Five original user-supplied visuals; no added speculative case studies, fabricated metrics or testimonials.
- Some visual assets contain client branding and phone numbers as artwork; do not edit those images unless you want to change the original design.
- This static site has no backend, analytics tracking, database, contact form, or hidden data collection.
