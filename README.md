IBM Design Language Color Palette
===================================

The resource for [IBM Design Language](https://www.ibm.com/design/language/)'s [color library](https://www.ibm.com/design/language/resources/color-library/) in .ase, .clr, .json, .scss, and .sketchpallete extensions. Read our [Color Guidelines](https://www.ibm.com/design/language/framework/visual/color/) to learn how to best use these colors.

## To Use

### For Apps

*To maintain color accuracy across applications, we recommend setting your computer's display color profile to sRGB. You can change this under system preferences/display/color.*

#### Adobe Illustrator

1. Download [ibm-colors.ase](https://github.com/IBM-Design/colors/raw/v2.0/ibm-colors.ase) file and open Adobe Illustrator
2. Select Window, then Swatches
3. In the Swatches Window, select the Swatches Library Menu
4. Select Other Libraries and then find the ibm-colors.ase file

#### Keynote

1. Download [ibm-colors.clr](https://github.com/IBM-Design/colors/raw/v2.0/ibm-colors.clr) file and open Keynote
2. Select the color wheel icon next to any color picker
3. In the Colors Window, select the Color Palettes Tab
4. Select the cog icon, then "Open" and find the ibm-colors.clr file

#### Sketch
There are two options for Sketch. One option uses the Colors Window for quick selection. The other option requires the Sketch Palettes Plugin, but allows you to quickly import the palette as global or document colors.

Colors Window Option

1. Download [ibm-colors.clr](https://github.com/IBM-Design/colors/raw/v2.0/ibm-colors.clr) file and open Sketch
2. Select View, then Show Colors
3. In the Colors Window, select the Color Palettes Tab
4. Select the cog icon, then "Open" and find the ibm-colors.clr file

Global/Document Colors Option

1. Install the [Sketch Palettes Plugin](https://github.com/andrewfiorillo/sketch-palettes) by following their instructions
2. Download [ibm-colors.sketchpalette](https://github.com/IBM-Design/colors/raw/v2.0/ibm-colors.sketchpalette) file and open Sketch
2. Select Plugins, then Sketch Palettes,
3. Decide if you want to add the palette to Global Colors or Document Colors
4. Select Load Palette, then find the ibm-colors.sketchpalette file

### For Development

#### Installation
The IBM Design Language Color Library can be installed via [npm](https://www.npmjs.com/).

npm
```bash
$ npm install ibm-design-colors --save
```
#### Use

There are ten variations of blue, aqua, teal, green, yellow, orange, red, magenta, purple, indigo, gray, cool gray, and warm gray that range from 10 to 100.

Neutral white, cool white, and warm white have four variations in ones from 1 to 4.

For contrast accessibility, we recommend that you never apply a text of one color variation that is 50 points within any other color. Example: You should not use a text that is Neutral White 20 on a blue background lighter than Blue 70.

#### Sass

The .scss file will work with any Sass compiler compatible with Sass 3.3 or greater.

##### Color Palette

Returns the specified color from the specified color palette

###### `color($palette, [$grade: 'core'], $alpha)`

```scss
//////////////////////////////////////////////////
//  ------------------------------------------  //
// | Options       | Type          | Required | //
// |---------------|---------------|----------| //
// | Color Palette | String        | Yes      | //
// | Color grade   | String/Number | Optional | //
// | Color Alpha   | Number        | Optional | //
//  ------------------------------------------  //
//////////////////////////////////////////////////

background: color('blue', 80);     // #1d3649
background: color('blue');         // #4178be
-- with an alpha
background: color('blue', 80, $alpha: 0.5); // rgba(29, 54, 73, 0.5)
background: color('blue', $alpha: 0.5);     // rgba(65, 120, 190, 0.5)

```

##### Color Tint

Returns a color the specified amount of steps lighter than the given color in the given color's color palette

###### `color-tint($color, $amount)`

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
background: color-tint(color('blue', 80), 23);     // #325c80
background: color-tint(color('blue', 80), 25);     // #4178be
background: color-tint(color('blue', 80), 100);    // #c0e6ff
```

##### Color Shade

Returns a color the specified amount of steps darker than the given color in the given color's color palette

###### `color-shade($color, $amount)`

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
background: color-shade(color('blue', 30), 23);     // #4178be
background: color-shade(color('blue', 30), 25);     // #325c80
background: color-shade(color('blue', 30), 100);    // #010205
```

##### Get Colors

Returns the list of available color palettes if no parameter is passed in, all palettes and all of their colors if `'all'` is passed in, and all colors of a given palette if one is specified.

###### `get-colors([$palette])`

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
@each $grade, $color in $all-blues {
  .blue--grade-#{$grade} {
    background: $color;
  }
}

// Generate a class for each color of each color palette
@each $palette-name, $palette in $full-color-map {
  @each $grade, $color in $palette {
    .#{$palette-name}--grade-#{$grade} {
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

### Suggest color change

You can either [submit an issue](https://github.com/IBM-Design/colors/issues/new) or submit the pull request of changed code yourself:

1. Edit `./source/colors.js`
2. In the terminal, run `gulp`.

All files will build into the root folder.

### Add file type

Our goal is to have a single source of truth that all other files build from. This is `./source/colors.js`. We love supporting different file types to cater to a variety of use cases. If you can add support to a new file type, please have it build from the source file when the `gulp` command is ran.
