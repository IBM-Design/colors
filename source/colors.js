
// A source file providing color definitions for the IBM Design Colors
// in a form suitable for driving templates to generate useful output files

module.exports = {

  palettes: [
  
    // each entry in this array is an object with the following properties:
    //  * name: the name of the palette; eg 'gray'
    //  * synonyms: (optional) an array of alternative names and spellings,
    //     for output formats that can support it; eg ['grey']
    //  * values: an array of objects each containing two properties:
    //      * tone: the tone amount; eg, '40', '100', 'core'
    //      * value: the color as a six-digit hex value; eg, '#acefed'
    
    {
      name: 'blue',
      values: [
        { tone: 'core', value: '#4178be' },
        { tone: '10', value: '#c0e6ff' },
        { tone: '20', value: '#7cc7ff' },
        { tone: '30', value: '#5aaafa' },
        { tone: '40', value: '#5596e6' },
        { tone: '50', value: '#4178be' },
        { tone: '60', value: '#325c80' },
        { tone: '70', value: '#264a60' },
        { tone: '80', value: '#1d3649' },
        { tone: '90', value: '#152935' },
        { tone: '100', value: '#010205' }
      ]
    },
    {
      name: 'green',
      values: [
        { tone: 'core', value: '#4b8400' },
        { tone: '10', value: '#c8f08f' },
        { tone: '20', value: '#b4e051' },
        { tone: '30', value: '#8cd211' },
        { tone: '40', value: '#5aa700' },
        { tone: '50', value: '#4b8400' },
        { tone: '60', value: '#2d660a' },
        { tone: '70', value: '#144d14' },
        { tone: '80', value: '#0a3c02' },
        { tone: '90', value: '#0c2808' },
        { tone: '100', value: '#010200' }
      ]
    },
    {
      name: 'teal',
      values: [
        { tone: 'core', value: '#008571' },
        { tone: '10', value: '#a7fae6' },
        { tone: '20', value: '#6eedd8' },
        { tone: '30', value: '#41d6c3' },
        { tone: '40', value: '#00b4a0' },
        { tone: '50', value: '#008571' },
        { tone: '60', value: '#006d5d' },
        { tone: '70', value: '#005448' },
        { tone: '80', value: '#003c32' },
        { tone: '90', value: '#012b22' },
        { tone: '100', value: '#000202' }
      ]
    },
    {
      name: 'purple',
      values: [
        { tone: 'core', value: '#9855d4' },
        { tone: '10', value: '#eed2ff' },
        { tone: '20', value: '#d7aaff' },
        { tone: '30', value: '#ba8ff7' },
        { tone: '40', value: '#af6ee8' },
        { tone: '50', value: '#9855d4' },
        { tone: '60', value: '#734098' },
        { tone: '70', value: '#562f72' },
        { tone: '80', value: '#412356' },
        { tone: '90', value: '#311a41' },
        { tone: '100', value: '#030103' }
      ]
    },
    {
      name: 'magenta',
      values: [
        { tone: 'core', value: '#db2780' },
        { tone: '10', value: '#ffd2ff' },
        { tone: '20', value: '#ff9eee' },
        { tone: '30', value: '#ff71d4' },
        { tone: '40', value: '#ff3ca0' },
        { tone: '50', value: '#db2780' },
        { tone: '60', value: '#a6266e' },
        { tone: '70', value: '#7c1c58' },
        { tone: '80', value: '#601146' },
        { tone: '90', value: '#3a0b2e' },
        { tone: '100', value: '#040102' }
      ]
    },
    {
      name: 'red',
      values: [
        { tone: 'core', value: '#e71d32' },
        { tone: '10', value: '#ffd2dd' },
        { tone: '20', value: '#ffa5b4' },
        { tone: '30', value: '#ff7d87' },
        { tone: '40', value: '#ff5050' },
        { tone: '50', value: '#e71d32' },
        { tone: '60', value: '#ad1625' },
        { tone: '70', value: '#8c101c' },
        { tone: '80', value: '#6e0a1e' },
        { tone: '90', value: '#4c0a17' },
        { tone: '100', value: '#040001' }
      ]
    },
    {
      name: 'orange',
      values: [
        { tone: 'core', value: '#ff7832' },
        { tone: '10', value: '#ffd4a0' },
        { tone: '20', value: '#ffa573' },
        { tone: '30', value: '#ff7832' },
        { tone: '40', value: '#ff5003' },
        { tone: '50', value: '#d74108' },
        { tone: '60', value: '#a53725' },
        { tone: '70', value: '#872a0f' },
        { tone: '80', value: '#6d120f' },
        { tone: '90', value: '#43100b' },
        { tone: '100', value: '#030100' }
      ]
    },
    {
      name: 'yellow',
      values: [
        { tone: 'core', value: '#fdd600' },
        { tone: '10', value: '#fde876' },
        { tone: '20', value: '#fdd600' },
        { tone: '30', value: '#efc100' },
        { tone: '40', value: '#be9b00' },
        { tone: '50', value: '#8c7300' },
        { tone: '60', value: '#735f00' },
        { tone: '70', value: '#574a00' },
        { tone: '80', value: '#3c3200' },
        { tone: '90', value: '#281e00' },
        { tone: '100', value: '#020100' }
      ]
    },
    {
      name: 'gray',
      values: [
        { tone: 'core', value: '#777677' },
        { tone: '10', value: '#e0e0e0' },
        { tone: '20', value: '#c7c7c7' },
        { tone: '30', value: '#aeaeae' },
        { tone: '40', value: '#959595' },
        { tone: '50', value: '#777677' },
        { tone: '60', value: '#5a5a5a' },
        { tone: '70', value: '#464646' },
        { tone: '80', value: '#323232' },
        { tone: '90', value: '#121212' },
        { tone: '100', value: '#000' }
      ]
    },
    {
      name: 'cool-gray',
      values: [
        { tone: 'core', value: '#6d7777' },
        { tone: '10', value: '#dfe9e9' },
        { tone: '20', value: '#c8d2d2' },
        { tone: '30', value: '#aeb8b8' },
        { tone: '40', value: '#959f9f' },
        { tone: '50', value: '#6d7777' },
        { tone: '60', value: '#5a6464' },
        { tone: '70', value: '#3c4646' },
        { tone: '80', value: '#323c3c' },
        { tone: '90', value: '#0d1111' },
        { tone: '100', value: '#000203' }
      ]
    },
    {
      name: 'warm-gray',
      values: [
        { tone: 'core', value: '#7d7373' },
        { tone: '10', value: '#e9e0e0' },
        { tone: '20', value: '#d0c7c7' },
        { tone: '30', value: '#b8aeae' },
        { tone: '40', value: '#9e9494' },
        { tone: '50', value: '#7d7373' },
        { tone: '60', value: '#645a5a' },
        { tone: '70', value: '#504646' },
        { tone: '80', value: '#3c3232' },
        { tone: '90', value: '#1a1314' },
        { tone: '100', value: '#030000' }
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
        { tone: 'core', value: '#fdfbfb' },
        { tone: '10', value: '#fdfbfb' },
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
