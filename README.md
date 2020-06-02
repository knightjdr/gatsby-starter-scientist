# gatsby-starter-scientist

## Example

The example scientist used in this starter is a fictional character from Thomas Carlyle's
<i>Sartor Resartus</i>.

## Customization

### background image

The background image on the homepage can be changed by replacing the image `src/images/hero.jpg`.
Make sure the image is large to ensure it will look good on large 4K monitors. The image
in this starter is 5184 × 3456 pixels.

Attribution: the photo is courtesy of [Ramón Salinero on Unsplash](https://unsplash.com/photos/vEE00Hx5d0Q).

### favicon

The favourite icon (favicon) is used in a few places. Most notably it is the small icon present
in the browser tab and located next to the website title on bookmarks.

It can be changed by replacing the image `src/images/favicon.png`. It should be a square image
512x512px. To be consistent with the style of the current icon, create a background circle with
the hex colour `#ffffff` and give the foreground image the colour `#3d8183`.

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
