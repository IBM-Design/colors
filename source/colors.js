
// A source file providing color definitions for the IBM Design Colors
// in a form suitable for driving templates to generate useful output files

module.exports = {
  version: '2.0.0-beta.2',
  palettes: [

    // each entry in this array is an object with the following properties:
    //  * name: the name of the palette; eg 'gray'
    //  * synonyms: (optional) an array of alternative names and spellings,
    //     for output formats that can support it; eg ['grey']
    //  * values: an array of objects each containing two properties:
    //      * tone: the tone amount; eg, '40', '100', 'core'
    //      * value: the color as a six-digit hex value; eg, 'acefed'

    {
      name: 'ultramarine',
      synonyms: ['cool-blue'],
      values: [
        { tone: 'core', value: '3151b7' },
        { tone: '1', value: 'e7e9f7' },
        { tone: '10', value: 'd1d7f4' },
        { tone: '20', value: 'b0bef3' },
        { tone: '30', value: '89a2f6' },
        { tone: '40', value: '648fff' },
        { tone: '50', value: '3c6df0' },
        { tone: '60', value: '3151b7' },
        { tone: '70', value: '2e3f8f' },
        { tone: '80', value: '252e6a' },
        { tone: '90', value: '20214f' }
      ]
    },
    {
      name: 'blue',
      values: [
        { tone: 'core', value: '2d74da' },
        { tone: '1', value: 'e1ebf7' },
        { tone: '10', value: 'c8daf4' },
        { tone: '20', value: 'a8c0f3' },
        { tone: '30', value: '79a6f6' },
        { tone: '40', value: '5392ff' },
        { tone: '50', value: '2d74da' },
        { tone: '60', value: '1f57a4' },
        { tone: '70', value: '25467a' },
        { tone: '80', value: '1d3458' },
        { tone: '90', value: '19273c' }
      ]
    },
    {
      name: 'cerulean',
      synonyms: ['warm-blue'],
      values: [
        { tone: 'core', value: '009bef' },
        { tone: '1', value: 'deedf7' },
        { tone: '10', value: 'c2dbf4' },
        { tone: '20', value: '95c4f3' },
        { tone: '30', value: '56acf2' },
        { tone: '40', value: '009bef' },
        { tone: '50', value: '047cc0' },
        { tone: '60', value: '175d8d' },
        { tone: '70', value: '1c496d' },
        { tone: '80', value: '1d364d' },
        { tone: '90', value: '1b2834' }
      ]
    },
    {
      name: 'aqua',
      values: [
        { tone: 'core', value: '00b6cb' },
        { tone: '1', value: 'd1f0f7' },
        { tone: '10', value: 'a0e3f0' },
        { tone: '20', value: '71cddd' },
        { tone: '30', value: '00b6cb' },
        { tone: '40', value: '12a3b4' },
        { tone: '50', value: '188291' },
        { tone: '60', value: '17616b' },
        { tone: '70', value: '164d56' },
        { tone: '80', value: '13393e' },
        { tone: '90', value: '122a2e' }
      ]
    },
    {
      name: 'teal',
      values: [
        { tone: 'core', value: '00a78f' },
        { tone: '1', value: 'c0f5e8' },
        { tone: '10', value: '8ee9d4' },
        { tone: '20', value: '40d5bb' },
        { tone: '30', value: '00baa1' },
        { tone: '40', value: '00a78f' },
        { tone: '50', value: '008673' },
        { tone: '60', value: '006456' },
        { tone: '70', value: '124f44' },
        { tone: '80', value: '133a32' },
        { tone: '90', value: '122b26' }
      ]
    },
    {
      name: 'green',
      values: [
        { tone: 'core', value: '34bc6e' },
        { tone: '1', value: 'cef3d1' },
        { tone: '10', value: '89eda0' },
        { tone: '20', value: '57d785' },
        { tone: '30', value: '34bc6e' },
        { tone: '40', value: '00aa5e' },
        { tone: '50', value: '00884b' },
        { tone: '60', value: '116639' },
        { tone: '70', value: '12512e' },
        { tone: '80', value: '123b22' },
        { tone: '90', value: '112c1b' }
      ]
    },
    {
      name: 'lime',
      values: [
        { tone: 'core', value: '95d13c' },
        { tone: '1', value: 'd7f4bd' },
        { tone: '10', value: 'b4e876' },
        { tone: '20', value: '95d13c' },
        { tone: '30', value: '81b532' },
        { tone: '40', value: '73a22c' },
        { tone: '50', value: '5b8121' },
        { tone: '60', value: '426200' },
        { tone: '70', value: '374c1a' },
        { tone: '80', value: '283912' },
        { tone: '90', value: '1f2a10' }
      ]
    },
    {
      name: 'yellow',
      values: [
        { tone: 'core', value: 'fed500' },
        { tone: '1', value: 'fbeaae' },
        { tone: '10', value: 'fed500' },
        { tone: '20', value: 'e3bc13' },
        { tone: '30', value: 'c6a21a' },
        { tone: '40', value: 'b3901f' },
        { tone: '50', value: '91721f' },
        { tone: '60', value: '70541b' },
        { tone: '70', value: '5b421a' },
        { tone: '80', value: '452f18' },
        { tone: '90', value: '372118' }
      ]
    },
    {
      name: 'gold',
      values: [
        { tone: 'core', value: 'ffb000' },
        { tone: '1', value: 'f5e8db' },
        { tone: '10', value: 'ffd191' },
        { tone: '20', value: 'ffb000' },
        { tone: '30', value: 'e39d14' },
        { tone: '40', value: 'c4881c' },
        { tone: '50', value: '9c6d1e' },
        { tone: '60', value: '74521b' },
        { tone: '70', value: '5b421c' },
        { tone: '80', value: '42301b' },
        { tone: '90', value: '2f261c' }
      ]
    },
    {
      name: 'peach',
      values: [
        { tone: 'core', value: 'fe8500' },
        { tone: '1', value: 'f5e8de' },
        { tone: '10', value: 'fdcfad' },
        { tone: '20', value: 'fcaf6d' },
        { tone: '30', value: 'fe8500' },
        { tone: '40', value: 'db7c00' },
        { tone: '50', value: 'ad6418' },
        { tone: '60', value: '814b19' },
        { tone: '70', value: '653d1b' },
        { tone: '80', value: '482e1a' },
        { tone: '90', value: '33241c' }
      ]
    },
    {
      name: 'orange',
      values: [
        { tone: 'core', value: 'fe6100' },
        { tone: '1', value: 'f7e7e2' },
        { tone: '10', value: 'f8d0c3' },
        { tone: '20', value: 'faad96' },
        { tone: '30', value: 'fc835c' },
        { tone: '40', value: 'fe6100' },
        { tone: '50', value: 'c45433' },
        { tone: '60', value: '993a1d' },
        { tone: '70', value: '782f1c' },
        { tone: '80', value: '56251a' },
        { tone: '90', value: '3a201b' }
      ]
    },
    {
      name: 'red',
      values: [
        { tone: 'core', value: 'e62325' },
        { tone: '1', value: 'f7e6e6' },
        { tone: '10', value: 'fccec7' },
        { tone: '20', value: 'ffaa9d' },
        { tone: '30', value: 'ff806c' },
        { tone: '40', value: 'ff5c49' },
        { tone: '50', value: 'e62325' },
        { tone: '60', value: 'aa231f' },
        { tone: '70', value: '83231e' },
        { tone: '80', value: '5c1f1b' },
        { tone: '90', value: '3e1d1b' }
      ]
    },
    {
      name: 'magenta',
      values: [
        { tone: 'core', value: 'ff509e' },
        { tone: '1', value: 'f5e7eb' },
        { tone: '10', value: 'f5cedb' },
        { tone: '20', value: 'f7aac3' },
        { tone: '30', value: 'f87eac' },
        { tone: '40', value: 'ff509e' },
        { tone: '50', value: 'dc267f' },
        { tone: '60', value: 'a91560' },
        { tone: '70', value: '831b4c' },
        { tone: '80', value: '5d1a38' },
        { tone: '90', value: '401a29' }
      ]
    },
    {
      name: 'purple',
      values: [
        { tone: 'core', value: 'c22dd5' },
        { tone: '1', value: 'f7e4fb' },
        { tone: '10', value: 'efcef3' },
        { tone: '20', value: 'e4adea' },
        { tone: '30', value: 'd68adf' },
        { tone: '40', value: 'cb71d7' },
        { tone: '50', value: 'c22dd5' },
        { tone: '60', value: '9320a2' },
        { tone: '70', value: '71237c' },
        { tone: '80', value: '501e58' },
        { tone: '90', value: '3b1a40' }
      ]
    },
    {
      name: 'violet',
      values: [
        { tone: 'core', value: '7732bb' },
        { tone: '1', value: 'ece8f5' },
        { tone: '10', value: 'e2d2f4' },
        { tone: '20', value: 'd2b5f0' },
        { tone: '30', value: 'bf93eb' },
        { tone: '40', value: 'b07ce8' },
        { tone: '50', value: '9753e1' },
        { tone: '60', value: '7732bb' },
        { tone: '70', value: '602797' },
        { tone: '80', value: '44216a' },
        { tone: '90', value: '321c4c' }
      ]
    },
    {
      name: 'indigo',
      values: [
        { tone: 'core', value: '473793' },
        { tone: '1', value: 'e9e8ff' },
        { tone: '10', value: 'dcd4f7' },
        { tone: '20', value: 'c7b6f7' },
        { tone: '30', value: 'ae97f4' },
        { tone: '40', value: '9b82f3' },
        { tone: '50', value: '785ef0' },
        { tone: '60', value: '5a3ec8' },
        { tone: '70', value: '473793' },
        { tone: '80', value: '352969' },
        { tone: '90', value: '272149' }
      ]
    },
    {
      name: 'gray',
      values: [
        { tone: 'core', value: '777677' },
        { tone: '1', value: 'eaeaea' },
        { tone: '10', value: 'd8d8d8' },
        { tone: '20', value: 'c0bfc0' },
        { tone: '30', value: 'a6a5a6' },
        { tone: '40', value: '949394' },
        { tone: '50', value: '777677' },
        { tone: '60', value: '595859' },
        { tone: '70', value: '464646' },
        { tone: '80', value: '343334' },
        { tone: '90', value: '272727' }
      ]
    },
    {
      name: 'cool-gray',
      values: [
        { tone: 'core', value: '6f7878' },
        { tone: '1', value: 'e3ecec' },
        { tone: '10', value: 'd0dada' },
        { tone: '20', value: 'b8c1c1' },
        { tone: '30', value: '9fa7a7' },
        { tone: '40', value: '8c9696' },
        { tone: '50', value: '6f7878' },
        { tone: '60', value: '535a5a' },
        { tone: '70', value: '424747' },
        { tone: '80', value: '343334' },
        { tone: '90', value: '272727' }
      ]
    },
    {
      name: 'warm-gray',
      values: [
        { tone: 'core', value: '7d7373' },
        { tone: '1', value: 'efe9e9' },
        { tone: '10', value: 'e2d5d5' },
        { tone: '20', value: 'ccbcbc' },
        { tone: '30', value: 'b4a1a1' },
        { tone: '40', value: '9e9191' },
        { tone: '50', value: '7d7373' },
        { tone: '60', value: '5f5757' },
        { tone: '70', value: '4b4545' },
        { tone: '80', value: '373232' },
        { tone: '90', value: '2a2626' }
      ]
    },
    {
      name: 'neutral-white',
      values: [
        { tone: 'core', value: 'fcfcfc' },
        { tone: '1', value: 'fcfcfc' },
        { tone: '2', value: 'f9f9f9' },
        { tone: '3', value: 'f6f6f6' },
        { tone: '4', value: 'f3f3f3' }
      ]
    },
    {
      name: 'cool-white',
      values: [
        { tone: 'core', value: 'fbfcfc' },
        { tone: '1', value: 'fbfcfc' },
        { tone: '2', value: 'f8fafa' },
        { tone: '3', value: 'f4f7f7' },
        { tone: '4', value: 'f0f4f4' }
      ]
    },
    {
      name: 'warm-white',
      values: [
        { tone: 'core', value: 'fdfcfc' },
        { tone: '1', value: 'fdfcfc' },
        { tone: '2', value: 'fbf8f8' },
        { tone: '3', value: 'f9f6f6' },
        { tone: '4', value: 'f6f3f3' }
      ]
    },
    {
      name: 'black',
      values: [
        { tone: 'core', value: '000' },
        { tone: '100', value: '000'}
      ]
    },
    {
      name: 'white',
      values: [
        { tone: 'core', value: 'fff' },
        { tone: '0', value: 'fff'}
      ]
    }
  ]
};
