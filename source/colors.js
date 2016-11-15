
// A source file providing color definitions for the IBM Design Colors
// in a form suitable for driving templates to generate useful output files

module.exports = {
  version: '2.0.0-beta.1',
  palettes: [

    // each entry in this array is an object with the following properties:
    //  * name: the name of the palette; eg 'gray'
    //  * synonyms: (optional) an array of alternative names and spellings,
    //     for output formats that can support it; eg ['grey']
    //  * values: an array of objects each containing two properties:
    //      * tone: the tone amount; eg, '40', '100', 'core'
    //      * value: the color as a six-digit hex value; eg, '#acefed'

    {
      name: 'cool blue',
      values: [
        { tone: 'core', value: '#2a51b8' },
        { tone: '0', value: '#e5e9ff' },
        { tone: '10', value: '#cdd7ff' },
        { tone: '20', value: '#abbdff' },
        { tone: '30', value: '#84a2ff' },
        { tone: '40', value: '#648fff' },
        { tone: '50', value: '#3c6df0' },
        { tone: '60', value: '#2a51b8' },
        { tone: '70', value: '#254190' },
        { tone: '80', value: '#203065' },
        { tone: '90', value: '#1b2449' }
      ]
    },
    {
      name: 'blue',
      values: [
        { tone: 'core', value: '#1d79ca' },
        { tone: '0', value: '#e2eafd' },
        { tone: '10', value: '#c7d9fb' },
        { tone: '20', value: '#a0c1f9' },
        { tone: '30', value: '#63a8ff' },
        { tone: '40', value: '#3c97f4' },
        { tone: '50', value: '#1d79ca' },
        { tone: '60', value: '#2c5a90' },
        { tone: '70', value: '#224874' },
        { tone: '80', value: '#1d3452' },
        { tone: '90', value: '#19273c' }
      ]
    },
    {
      name: 'warm blue',
      values: [
        { tone: 'core', value: '#009de2' },
        { tone: '0', value: '#dbecff' },
        { tone: '10', value: '#badcff' },
        { tone: '20', value: '#81c6ff' },
        { tone: '30', value: '#3caef4' },
        { tone: '40', value: '#009de2' },
        { tone: '50', value: '#007eb6' },
        { tone: '60', value: '#005e8a' },
        { tone: '70', value: '#154a6b' },
        { tone: '80', value: '#16364d' },
        { tone: '90', value: '#142939' }
      ]
    },
    {
      name: 'aqua',
      values: [
        { tone: 'core', value: '#00b7c0' },
        { tone: '0', value: '#b6f5fb' },
        { tone: '10', value: '#6aebf4' },
        { tone: '20', value: '#42d2db' },
        { tone: '30', value: '#00b7c0' },
        { tone: '40', value: '#00a4ac' },
        { tone: '50', value: '#00838a' },
        { tone: '60', value: '#006368' },
        { tone: '70', value: '#134e52' },
        { tone: '80', value: '#14393b' },
        { tone: '90', value: '#122a2c' }
      ]
    },
    {
      name: 'teal',
      values: [
        { tone: 'core', value: '#40d5bb' },
        { tone: '0', value: '#acf9e7' },
        { tone: '10', value: '#67eed3' },
        { tone: '20', value: '#40d5bb' },
        { tone: '30', value: '#00baa1' },
        { tone: '40', value: '#00a78f' },
        { tone: '50', value: '#008673' },
        { tone: '60', value: '#006456' },
        { tone: '70', value: '#124f44' },
        { tone: '80', value: '#133a32' },
        { tone: '90', value: '#122b26' }
      ]
    },
    {
      name: 'green',
      values: [
        { tone: 'core', value: '#00be6a' },
        { tone: '0', value: '#aefbc8' },
        { tone: '10', value: '#6ff1a2' },
        { tone: '20', value: '#3dd983' },
        { tone: '30', value: '#00be6a' },
        { tone: '40', value: '#00aa5e' },
        { tone: '50', value: '#00884a' },
        { tone: '60', value: '#006737' },
        { tone: '70', value: '#11512e' },
        { tone: '80', value: '#123b23' },
        { tone: '90', value: '#112c1b' }
      ]
    },
    {
      name: 'lime',
      values: [
        { tone: 'core', value: '#95d13c' },
        { tone: '0', value: '#cdf8a1' },
        { tone: '10', value: '#b4e876' },
        { tone: '20', value: '#95d13c' },
        { tone: '30', value: '#81b532' },
        { tone: '40', value: '#73a22c' },
        { tone: '50', value: '#5b8121' },
        { tone: '60', value: '#426200' },
        { tone: '70', value: '#374c1a' },
        { tone: '80', value: '#283912' },
        { tone: '90', value: '#1f2a10' }
      ]
    },
    {
      name: 'yellow',
      values: [
        { tone: 'core', value: '#fed500' },
        { tone: '0', value: '#ffe8af' },
        { tone: '10', value: '#fed500' },
        { tone: '20', value: '#e2bd00' },
        { tone: '30', value: '#c4a300' },
        { tone: '40', value: '#af9100' },
        { tone: '50', value: '#8c7400' },
        { tone: '60', value: '#685717' },
        { tone: '70', value: '#52451b' },
        { tone: '80', value: '#3c3318' },
        { tone: '90', value: '#2d2615' }
      ]
    },
    {
      name: 'peach',
      values: [
        { tone: 'core', value: '#ffae55' },
        { tone: '0', value: '#ffe5d5' },
        { tone: '10', value: '#ffcfaa' },
        { tone: '20', value: '#ffae55' },
        { tone: '30', value: '#f58b00' },
        { tone: '40', value: '#dc7c00' },
        { tone: '50', value: '#ad6422' },
        { tone: '60', value: '#834b17' },
        { tone: '70', value: '#663c1b' },
        { tone: '80', value: '#4a2d18' },
        { tone: '90', value: '#372215' }
      ]
    },
    {
      name: 'orange',
      values: [
        { tone: 'core', value: '#ff8254' },
        { tone: '0', value: '#fde5e0' },
        { tone: '10', value: '#fccec5' },
        { tone: '20', value: '#faad9a' },
        { tone: '30', value: '#ff8254' },
        { tone: '40', value: '#f76700' },
        { tone: '50', value: '#c25622' },
        { tone: '60', value: '#8f4224' },
        { tone: '70', value: '#73341b' },
        { tone: '80', value: '#532718' },
        { tone: '90', value: '#3d1e15' }
      ]
    },
    {
      name: 'coral',
      values: [
        { tone: 'core', value: '#ff5e38' },
        { tone: '0', value: '#fde5e3' },
        { tone: '10', value: '#fccec9' },
        { tone: '20', value: '#faaca3' },
        { tone: '30', value: '#ff806d' },
        { tone: '40', value: '#ff5e38' },
        { tone: '50', value: '#d14722' },
        { tone: '60', value: '#9a3924' },
        { tone: '70', value: '#773023' },
        { tone: '80', value: '#56251d' },
        { tone: '90', value: '#3f1d18' }
      ]
    },
    {
      name: 'red',
      values: [
        { tone: 'core', value: '#df3423' },
        { tone: '0', value: '#fde5e4' },
        { tone: '10', value: '#fccdcc' },
        { tone: '20', value: '#faaba9' },
        { tone: '30', value: '#f8837e' },
        { tone: '40', value: '#ff5c52' },
        { tone: '50', value: '#df3423' },
        { tone: '60', value: '#ac200e' },
        { tone: '70', value: '#84231b' },
        { tone: '80', value: '#5f1c18' },
        { tone: '90', value: '#461715' }
      ]
    },
    {
      name: 'magenta',
      values: [
        { tone: 'core', value: '#ff4ab3' },
        { tone: '0', value: '#ffe3ef' },
        { tone: '10', value: '#ffcae2' },
        { tone: '20', value: '#ffa4d0' },
        { tone: '30', value: '#ff76be' },
        { tone: '40', value: '#ff4ab3' },
        { tone: '50', value: '#d82793' },
        { tone: '60', value: '#ab0072' },
        { tone: '70', value: '#841459' },
        { tone: '80', value: '#601540' },
        { tone: '90', value: '#461330' }
      ]
    },
    {
      name: 'purple',
      values: [
        { tone: 'core', value: '#c22dd5' },
        { tone: '0', value: '#f7e4fb' },
        { tone: '10', value: '#f0cdf7' },
        { tone: '20', value: '#e7aaf3' },
        { tone: '30', value: '#de83ed' },
        { tone: '40', value: '#d864e9' },
        { tone: '50', value: '#c22dd5' },
        { tone: '60', value: '#9320a2' },
        { tone: '70', value: '#71237c' },
        { tone: '80', value: '#501e58' },
        { tone: '90', value: '#3b1a40' }
      ]
    },
    {
      name: 'violet',
      values: [
        { tone: 'core', value: '#7D24C9' },
        { tone: '0', value: '#EFE6FF' },
        { tone: '10', value: '#E1D1FF' },
        { tone: '20', value: '#D0B2FF' },
        { tone: '30', value: '#BE8FFF' },
        { tone: '40', value: '#B375FF' },
        { tone: '50', value: '#A23DFF' },
        { tone: '60', value: '#7D24C9' },
        { tone: '70', value: '#602797' },
        { tone: '80', value: '#44216A' },
        { tone: '90', value: '#321C4C' }
      ]
    },
    {
      name: 'indigo',
      values: [
        { tone: 'core', value: '#3b33a8' },
        { tone: '0', value: '#e9e8ff' },
        { tone: '10', value: '#d6d4ff' },
        { tone: '20', value: '#bbb9ff' },
        { tone: '30', value: '#9f9bff' },
        { tone: '40', value: '#8a85ff' },
        { tone: '50', value: '#675eff' },
        { tone: '60', value: '#4a40d5' },
        { tone: '70', value: '#3b33a8' },
        { tone: '80', value: '#2d2973' },
        { tone: '90', value: '#232051' }
      ]
    },
    {
      name: 'gray',
      values: [
        { tone: 'core', value: '#949394' },
        { tone: '0', value: '#eaeaea' },
        { tone: '10', value: '#d8d8d8' },
        { tone: '20', value: '#c0bfc0' },
        { tone: '30', value: '#a6a5a6' },
        { tone: '40', value: '#949394' },
        { tone: '50', value: '#777677' },
        { tone: '60', value: '#595859' },
        { tone: '70', value: '#464646' },
        { tone: '80', value: '#343334' },
        { tone: '90', value: '#272727' }
      ]
    },
    {
      name: 'cool gray',
      values: [
        { tone: 'core', value: '#6f7878' },
        { tone: '0', value: '#e3ecec' },
        { tone: '10', value: '#d0dada' },
        { tone: '20', value: '#b8c1c1' },
        { tone: '30', value: '#9fa7a7' },
        { tone: '40', value: '#8c9696' },
        { tone: '50', value: '#6f7878' },
        { tone: '60', value: '#535a5a' },
        { tone: '70', value: '#424747' },
        { tone: '80', value: '#343334' },
        { tone: '90', value: '#272727' }
      ]
    },
    {
      name: 'warm gray',
      values: [
        { tone: 'core', value: '#5f5757' },
        { tone: '0', value: '#efe9e9' },
        { tone: '10', value: '#e2d5d5' },
        { tone: '20', value: '#ccbcbc' },
        { tone: '30', value: '#b4a1a1' },
        { tone: '40', value: '#9e9191' },
        { tone: '50', value: '#7d7373' },
        { tone: '60', value: '#5f5757' },
        { tone: '70', value: '#4b4545' },
        { tone: '80', value: '#373232' },
        { tone: '90', value: '#2a2626' }
      ]
    },
    {
      name: 'neutral-white',
      values: [
        { tone: 'core', value: '#fdfdfd' },
        { tone: '10', value: '#fdfdfd' },
        { tone: '20', value: '#f9f9f9' },
        { tone: '30', value: '#f4f4f4' },
        { tone: '40', value: '#ececec' }
      ]
    },
    {
      name: 'cool-white',
      values: [
        { tone: 'core', value: '#fbfcfc' },
        { tone: '10', value: '#fbfcfc' },
        { tone: '20', value: '#f9f9fb' },
        { tone: '30', value: '#f0f2f4' },
        { tone: '40', value: '#ecf0f2' }
      ]
    },
    {
      name: 'warm-white',
      values: [
        { tone: 'core', value: '#fbfbfb' },
        { tone: '10', value: '#fbfbfb' },
        { tone: '20', value: '#fdfbfb' },
        { tone: '30', value: '#f7f5f5' },
        { tone: '40', value: '#f2eeee' }
      ]
    },
    {
      name: 'black',
      values: [
        { tone: 'core', value: '#000' }
      ]
    },
    {
      name: 'white',
      values: [
        { tone: 'core', value: '#fff' }
      ]
    }
  ]
};
