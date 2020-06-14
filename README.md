# gatsby-starter-scientist

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

`npm run develop` will start a local development server that you can access from `http://localhost:8000`. Any changes you make to project files will be automatically reflected at the development site.

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

### background image

The background image on the homepage can be changed by replacing the image `src/images/hero.png`.
Make sure the image is large to ensure it will look good on large 4K monitors. The image
in this starter is 5184 × 3456 pixels. The image has to be a `png`, so convert from other formats
if needed.

### About section

### Research section

### Opportunities section

### Contact section

### footer

### favicon

The favourite icon (favicon) is used in a few places. Most notably it is the small icon present
in the browser tab and located next to the website title on bookmarks.

It can be changed by replacing the image `src/images/favicon.png`. It should be a square image
512x512px in `png` format. To be consistent with the style of the current icon, create a background
circle with the hex colour `#ffffff` and give the foreground image the colour `#3d8183`.

### logo

The site logo is located in the top left of the navigation bar and can be changed by replacing the
image `src/images/logo.inline.svg`. It should be an svg to allow the site to color the image based
on the theme (light/dark) and mouse state (hover or focus).

### theme

The colour theme can be changed by editing `src/components/layout/layout.css`. You should only edit
the `color-primary` variables and ensure the resulting selections have sufficient contrast with the
background colour in both the light and dark modes. You can use a site like
[contrast finder](https://app.contrast-finder.org/?lang=en) to test the contrast of your theme.
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

## Credits

Vector cartoons are by [Lukasz Adam](https://lukaszadam.com/)
Icons are from the free repository at [FontAwesome](https://fontawesome.com/)
Hero image is courtesy of [Ramón Salinero on Unsplash](https://unsplash.com/photos/vEE00Hx5d0Q).
Wooden robot image is courtesy of [Kaboompics.com from Pexels](https://www.pexels.com/photo/wooden-robot-6069/)
Hourglass image is courtesy of [Aron Visuals on Unsplash](https://unsplash.com/photos/BXOXnQ26B7o)
Robot army image is courtesy of [Mina FC on Unsplash](https://unsplash.com/photos/3QKsG0fDrC8)
