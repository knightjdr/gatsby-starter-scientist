# gatsby-starter-scientist

This is a website template built with Gatsby for a typical scientist or laboratory profile/portfolio site.

[Demo](https://gatsbystarterscientistdemo.gatsbyjs.io)

## Setup

### Prerequisites

* [Node.js](https://nodejs.org/en/download/)
* [git](https://git-scm.com/downloads)
* [GitHub account](https://github.com/)
* code editor, e.g [VS Code](https://code.visualstudio.com/)

### Project creation

1. Fork this project on GitHub by navigating to the project page `https://github.com/knightjdr/gatsby-starter-scientist` and clicking the `Fork` button in the upper right corner.

2. (Optional) Rename the repository from the `Settings` menu. For example to `yourname-lab`.

3. Clone repository from command line. If you changed the repository name in step 2, be sure to update the url. This will create a folder on your machine in the current directory with the project's code.
```
git clone https://github.com/[your-user-name]/gatsby-starter-scientist.git
```

4. Move into project directory and install dependencies.
```
cd gatsby-starter-scientist
npm install
```

## Development server

`npm run develop` will start a local development server that you can access from `http://localhost:8000`. Any changes you make to project files will be automatically reflected in your browser.

Any changes you make will only affect files on your local machine. It is a good idea to sync those changes with GitHub. This can be done from the command line by committing your changes

```
git add .
git commit -m "Description of the changes"
```

And pushing them to GitHub

```
git push
```

You can also do this using [GitHub's Desktop client](https://desktop.github.com/).

## Deployment

After making changes to your site, you need to build an optimized version and deploy it to the hosting server. The site is hosted by default on GitHub, which is free.

1. Build the site for production
```
npm run build
```

2. Deploy the site. You will be asked for your GitHub credentials.
```
npm run deploy
```

The site can now be accessed at `https://[your-user-name].github.io/gatsby-starter-scientist`. If you changed the repository name, the URL will be adjusted accordingly.

## Customization

### gatsby-config.js

Basic configuration for the site is found in the `siteMetadata` object in this file. The `author` and `description` fields are used to construct the text on the landing image. Update the `siteUrl` to the site's final address. The `title` field is displayed in browser tabs and search results as the title of the site. The other `siteMetadata` fields have comments to explain their purpose.

If the starting page for your site will have a path prefix, for example `https://mysite.org/path-prefix`, be sure to uncomment the `pathPrefix` field in this file and add in the correct prefix. If it will not have a prefix, for example `https://mysite.org`, delete this field. If you are hosting on Github as described above, your site will have a path prefix which is the name of the repository (`gatsby-starter-scientist` if you have not changed the name.)

Do not change any of the other fields in this file.

### Background/landing image

The background image on the homepage can be changed by replacing the image `src/images/hero.png`. Make sure the image is big to ensure it will look good on large 4K monitors. The image in this starter is 5184 × 3456 pixels. The image has to be a `png`, so convert from other formats if needed.

It should be dark so that text will have sufficient contrast (a filter will be automatically applied to darken it further, so simply avoiding light images should be fine). You can find royalty free images at [unsplash.com](https://unsplash.com) and [pexels.com](https://www.pexels.com).

### General notes about text

The text for many of the sections described below is located in `src/markdown`. You can enter plain text as you'd like it to appear on the site or add links and other html elements using markdown styling. For example, you can specify a linkg with `[link text](https://link-to-whatever.com)`. See [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for details.

### About section

The title, text and image in the `About` section can be customized in the markdown file `src/markdown/about.md`. The image for this section should be placed in the `src/images` folder and its path specified as `../images/[your-picture.png]`. The image should be square and at least 1050 x 1050 pixels and either PNG or JPG. The image will be automatically converted to a circle.

This section is optional, as is the section title and image. Delete or rename the `about.md` file if you do not want this section or delete the title and/or image fields if you do not want them.

### Research subsection

The research subsections are declared in the `src/markdown/research` folder. You should create one file for each subsection with an optional title and image. You must specify the order of each subsection in its corresponding file.

The images for each subsection should be placed in the `src/images/reaserch` folder and its path specified as `../../images/research/[your-picture.png]`. The image should be square and at least 900 x 900 pi and either PNG or JPG.

This section is optional, as are the subsection titles and images. Delete all files in this folder if you do not want this section or delete the title and/or image fields if you do not want them.

### Opportunities section

The text in this section can be customized in the markdown file `src/markdown/opportunities.md`.

This section is optional. Delete or rename the `opportunities.md` file if you do not want it.

### Contact section

The text in this section can be customized in the markdown file `src/markdown/contact.md`.

This section is optional. Delete or rename the `contact.md` file if you do not want it.

### Footer

Links in the footer are declared in the `gatsby-config.js` file. You can include any links you like.

### People page

The people page is built from markdown files in `src/markdown/people` and images in `src/images/people`. Each person in the lab should have his/her own file in the markdown folder. The person's name and order of appearance are required, while the e-mail, image and title fields are optional.

Images should be square and at least 900 x 900 pixels and either PNG or JPG.

This page is optional. Delete all files in this folder if you do not want this page. This will also remove the `People` link from the navigation bar.

### Publications page

Publications for this page are automatically retrieved from PubMed via PMIDs specified in the `gatsby-config.js` file. They will be ordered by publication date. The IDs should be placed in the `publications` field in the `siteMetadata` object.

This page is optional. Delete all links from the array or delete the field to remove the page. This will also remove the `Publications` link from the navigation bar.

### Favicon

The favourite icon (favicon) is used in a few places. Most notably it is the small icon present in the browser tab and located next to the website title on bookmarks.

It can be changed by replacing the image `src/images/favicon.png`. It should be a square image 512 x 512 pixels in `png` format. To be consistent with the style of the current icon, create a background circle with the hex colour `#ffffff` and give the foreground image the colour `#3d8183`.

### Logo

The site logo is located in the top left of the navigation bar and can be changed by replacing the image `src/images/logo.inline.svg`. It should be an svg to allow the site to colour the image based on the theme (light/dark) and mouse state (hover or focus).

### Theme

The colour theme can be changed by editing `src/components/layout/layout.css`. You should only edit the `color-primary` variables and ensure the resulting selections have sufficient contrast with the background colour in both the light and dark modes. You can use a site like [contrast finder](https://app.contrast-finder.org/?lang=en) to test the contrast of your theme.
```
body.light-mode {
  --color-background: #fff;
  --color-primary: #3d8183;
}
body.dark-mode {
  --color-background: #252429;
  --color-primary: #ff7A8A;
}
```

## Custom URL

A custom URL that you purchased can be configured for the site by following the instructions at [GitHub - managing-a-custom-domain](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)

## Troubleshooting

If you run into issues with images not displaying correctly in the development server, try running the command `npm run clean` and restarting the development server.

## Credits

* Vector cartoons are by [Lukasz Adam](https://lukaszadam.com/)
* Icons are from the free repository at [FontAwesome](https://fontawesome.com/)
* Hero image is courtesy of [Ramón Salinero on Unsplash](https://unsplash.com/photos/vEE00Hx5d0Q).
* Wooden robot image is courtesy of [Kaboompics.com from Pexels](https://www.pexels.com/photo/wooden-robot-6069/)
* Hourglass image is courtesy of [Aron Visuals on Unsplash](https://unsplash.com/photos/BXOXnQ26B7o)
* Robot army image is courtesy of [Mina FC on Unsplash](https://unsplash.com/photos/3QKsG0fDrC8)
