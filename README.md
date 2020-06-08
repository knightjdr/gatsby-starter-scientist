# gatsby-starter-scientist

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

## Credits

Vector cartoons are by [Lukasz Adam](https://lukaszadam.com/)
Icons are from the free repository at [FontAwesome](https://fontawesome.com/)
Hero image is courtesy of [Ramón Salinero on Unsplash](https://unsplash.com/photos/vEE00Hx5d0Q).
Wooden robot image is courtesy of [Kaboompics.com from Pexels](https://www.pexels.com/photo/wooden-robot-6069/)
Hourglass image is courtesy of [Aron Visuals on Unsplash](https://unsplash.com/photos/BXOXnQ26B7o)
Robot army image is courtesy of [Mina FC on Unsplash](https://unsplash.com/photos/3QKsG0fDrC8)
