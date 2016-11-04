IBM Design Language Color Palette
===================================

The resource for [IBM Design Language](https://www.ibm.com/design/language/)'s [color library](https://www.ibm.com/design/language/resources/color-library/) in .ase, .clr, .json, .scss, and .sketchpallete extensions. Read our [Color Guidelines](https://www.ibm.com/design/language/framework/visual/color/) to learn how to best use these colors.

## Installation

The IBM Design Language Color Library can be installed via [Bower](http://bower.io/) or [npm](https://www.npmjs.com/).

Bower
```bash
$ bower install ibm-colors --save-dev
```

npm
```bash
$ npm install ibm-design-colors --save-dev
```

## Usage

There are ten variations of blue, aqua, teal, green, yellow, orange, red, magenta, purple, indigo, gray, cool gray, and warm gray that range from 10 to 100.

Neutral white, cool white, and warm white have four variations from 10 to 40.

For contrast accessibility, we recommend that you never apply a text of one color variation that is 50 points within any other color. Example: You should not use a text that is Neutral White 20 on a blue background lighter than Blue 70.

### Sass

The .scss file will work with any Sass compiler compatible with Sass 3.3 or greater.

#### Color Palette

Returns the specified color from the specified color palette

##### `color($palette, [$tone: 'core'], $alpha)`

```scss
//////////////////////////////////////////////////
//  ------------------------------------------  //
// | Options       | Type          | Required | //
// |---------------|---------------|----------| //
// | Color Palette | String        | Yes      | //
// | Color Tone    | String/Number | Optional | //
// | Color Alpha   | Number        | Optional | //
//  ------------------------------------------  //
//////////////////////////////////////////////////

background: color('blue', 80);     // #1d3649
background: color('blue', 8);      // #1d3649
background: color('blue', 'core'); // #4178be
background: color('blue');         // #4178be
-- with an alpha
background: color('blue', 80, $alpha: 0.5); // rgba(29, 54, 73, 0.5)
background: color('blue', $alpha: 0.5);     // rgba(65, 120, 190, 0.5)

```

#### Color Tint

Returns a color the specified amount of steps lighter than the given color in the given color's color palette

##### `color-tint($color, $amount)`

```scss
//////////////////////////////////////////////////
//  ------------------------------------------  //
// | Options       | Type          | Required | //
// |---------------|---------------|----------| //
// | Color Palette | Color         | Yes      | //
// | Tint Amount   | Number        | Yes      | //
//  ------------------------------------------  //
//////////////////////////////////////////////////

background: color-tint(color('blue', 80), 20);     // #325c80
background: color-tint(color('blue', 80), 2);      // #325c80
background: color-tint(color('blue', 80), 23);     // #325c80
background: color-tint(color('blue', 80), 25);     // #4178be
background: color-tint(color('blue', 80), 100);    // #c0e6ff
```

#### Color Shade

Returns a color the specified amount of steps darker than the given color in the given color's color palette

##### `color-shade($color, $amount)`

```scss
//////////////////////////////////////////////////
//  ------------------------------------------  //
// | Options       | Type          | Required | //
// |---------------|---------------|----------| //
// | Color Palette | Color         | Yes      | //
// | Shade Amount  | Number        | Yes      | //
//  ------------------------------------------  //
//////////////////////////////////////////////////

background: color-shade(color('blue', 30), 20);     // #4178be
background: color-shade(color('blue', 30), 2);      // #4178be
background: color-shade(color('blue', 30), 23);     // #4178be
background: color-shade(color('blue', 30), 25);     // #325c80
background: color-shade(color('blue', 30), 100);    // #010205
```

#### Get Colors

Returns the list of available color palettes if no parameter is passed in, all palettes and all of their colors if `'all'` is passed in, and all colors of a given palette if one is specified.

##### `get-colors([$palette])`

```scss
///////////////////////////////////////////
//  -----------------------------------  //
// | Options       | Type   | Required | //
// |---------------|--------|----------| //
// | Color Palette | String | Optional | //
//  -----------------------------------  //
///////////////////////////////////////////

$color-keys: get-colors();
$all-blues: get-colors('blue');
$full-color-map: get-colors('all');

//////////////////////////////
// Example Usage
//////////////////////////////

// Generating a class for each color palette
@each $color in $color-keys {
  .color--#{$color} {
    content: #{$color} is available;
  }
}

// Generate a class for each color of a color palette
@each $tone, $color in $all-blues {
  .blue--tone-#{$tone} {
    background: $color;
  }
}

// Generate a class for each color of each color palette
@each $palette-name, $palette in $full-color-map {
  @each $tone, $color in $palette {
    .#{$palette-name}--tone-#{$tone} {
      background: $color;
    }
  }
}
```

## To Contribute

### Setup

Setup the environment with [git](https://git-scm.com/) and [node](https://nodejs.org/en/) already installed. Then:

```bash
git clone https://github.com/IBM-Design/colors.git
cd colors
npm install
```

### Suggest change

You can either [submit an issue](https://github.com/IBM-Design/colors/issues/new) or submit the pull request of changed code yourself:

1. Edit `./source/colors.js`
2. In the terminal, run `gulp`.

All files will build into the root folder.

### Add file type

Our goal is to have a single source of truth that all other files build from. This is `./source/colors.js`. We love supporting different file types to cater to a variety of use cases. If you can add support to a new file type, please have it build from the source file when the `gulp` command is ran.
