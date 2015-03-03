IBM Design Language Color Palette
===================================

Use the [IBM Design Language](http://www.ibm.com/design/language/index.shtml) [Color Palettes](http://www.ibm.com/design/language/framework/visual/color.shtml) in your Sass project.

## Installation

The IBM Design Language Color Palette can be installed via [Bower](http://bower.io/). It will work with any Sass compiler compatible with Sass 3.3 or greater.

```bash
$ bower install ibm-colors --save-dev
```

Then import `ibm-colors`.

```scss
@import 'path/to/bower_components/ibm-design-colors/ibm-colors';
```

## Usage

With the color palette imported you will now have access to two functions:

### Color Palette

Returns the specified color from the specified color palette

#### `color($palette, [$tone: 'core'])`

```scss
//////////////////////////////////////////////////
//  ------------------------------------------  //
// | Options       | Type          | Required | //
// |---------------|---------------|----------| //
// | Color Palette | String        | Yes      | //
// | Color Tone    | String/Number | Optional | //
//  ------------------------------------------  //
//////////////////////////////////////////////////

background: color('blue', 80);     // #1d3649
background: color('blue', 8);      // #1d3649
background: color('blue', 'core'); // #4178be
background: color('blue');         // #4178be
```

### Get Colors

Returns the list of available color palettes if no parameter is passed in, all palettes and all of their colors if `'all'` is passed in, and all colors of a given palette if one is specified.

#### `get-colors([$palette])`

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
