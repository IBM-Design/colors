
// A source file providing color definitions for the IBM Design Colors
// in a form suitable for driving templates to generate useful output files

module.exports = {
  version: '2.0.2',
  palettes: [

    // each entry in this array is an object with the following properties:
    //  * name: the name of the palette; eg 'gray'
    //  * synonyms: (optional) an array of alternative names and spellings,
    //     for output formats that can support it; eg ['grey']
    //  * values: an array of objects each containing two properties:
    //      * grade: the grade amount; eg, '1', '40', '90'
    //      * value: the color as a six-digit hex value; eg, 'acefed'

    {
      name: 'ultramarine',
      synonyms: ['cool-blue'],
      core: '60',
      values: [
        { grade: '1', value: 'e7e9f7' },
        { grade: '10', value: 'd1d7f4' },
        { grade: '20', value: 'b0bef3' },
        { grade: '30', value: '89a2f6' },
        { grade: '40', value: '648fff' },
        { grade: '50', value: '3c6df0' },
        { grade: '60', value: '3151b7' },
        { grade: '70', value: '2e3f8f' },
        { grade: '80', value: '252e6a' },
        { grade: '90', value: '20214f' }
      ]
    },
    {
      name: 'blue',
      core: '50',
      values: [
        { grade: '1', value: 'e1ebf7' },
        { grade: '10', value: 'c8daf4' },
        { grade: '20', value: 'a8c0f3' },
        { grade: '30', value: '79a6f6' },
        { grade: '40', value: '5392ff' },
        { grade: '50', value: '2d74da' },
        { grade: '60', value: '1f57a4' },
        { grade: '70', value: '25467a' },
        { grade: '80', value: '1d3458' },
        { grade: '90', value: '19273c' }
      ]
    },
    {
      name: 'cerulean',
      synonyms: ['warm-blue'],
      core: '40',
      values: [
        { grade: '1', value: 'deedf7' },
        { grade: '10', value: 'c2dbf4' },
        { grade: '20', value: '95c4f3' },
        { grade: '30', value: '56acf2' },
        { grade: '40', value: '009bef' },
        { grade: '50', value: '047cc0' },
        { grade: '60', value: '175d8d' },
        { grade: '70', value: '1c496d' },
        { grade: '80', value: '1d364d' },
        { grade: '90', value: '1b2834' }
      ]
    },
    {
      name: 'aqua',
      core: '30',
      values: [
        { grade: '1', value: 'd1f0f7' },
        { grade: '10', value: 'a0e3f0' },
        { grade: '20', value: '71cddd' },
        { grade: '30', value: '00b6cb' },
        { grade: '40', value: '12a3b4' },
        { grade: '50', value: '188291' },
        { grade: '60', value: '17616b' },
        { grade: '70', value: '164d56' },
        { grade: '80', value: '13393e' },
        { grade: '90', value: '122a2e' }
      ]
    },
    {
      name: 'teal',
      core: '40',
      values: [
        { grade: '1', value: 'c0f5e8' },
        { grade: '10', value: '8ee9d4' },
        { grade: '20', value: '40d5bb' },
        { grade: '30', value: '00baa1' },
        { grade: '40', value: '00a78f' },
        { grade: '50', value: '008673' },
        { grade: '60', value: '006456' },
        { grade: '70', value: '124f44' },
        { grade: '80', value: '133a32' },
        { grade: '90', value: '122b26' }
      ]
    },
    {
      name: 'green',
      core: '30',
      values: [
        { grade: '1', value: 'cef3d1' },
        { grade: '10', value: '89eda0' },
        { grade: '20', value: '57d785' },
        { grade: '30', value: '34bc6e' },
        { grade: '40', value: '00aa5e' },
        { grade: '50', value: '00884b' },
        { grade: '60', value: '116639' },
        { grade: '70', value: '12512e' },
        { grade: '80', value: '123b22' },
        { grade: '90', value: '112c1b' }
      ]
    },
    {
      name: 'lime',
      core: '20',
      values: [
        { grade: '1', value: 'd7f4bd' },
        { grade: '10', value: 'b4e876' },
        { grade: '20', value: '95d13c' },
        { grade: '30', value: '81b532' },
        { grade: '40', value: '73a22c' },
        { grade: '50', value: '5b8121' },
        { grade: '60', value: '426200' },
        { grade: '70', value: '374c1a' },
        { grade: '80', value: '283912' },
        { grade: '90', value: '1f2a10' }
      ]
    },
    {
      name: 'yellow',
      core: '10',
      values: [
        { grade: '1', value: 'fbeaae' },
        { grade: '10', value: 'fed500' },
        { grade: '20', value: 'e3bc13' },
        { grade: '30', value: 'c6a21a' },
        { grade: '40', value: 'b3901f' },
        { grade: '50', value: '91721f' },
        { grade: '60', value: '70541b' },
        { grade: '70', value: '5b421a' },
        { grade: '80', value: '452f18' },
        { grade: '90', value: '372118' }
      ]
    },
    {
      name: 'gold',
      core: '20',
      values: [
        { grade: '1', value: 'f5e8db' },
        { grade: '10', value: 'ffd191' },
        { grade: '20', value: 'ffb000' },
        { grade: '30', value: 'e39d14' },
        { grade: '40', value: 'c4881c' },
        { grade: '50', value: '9c6d1e' },
        { grade: '60', value: '74521b' },
        { grade: '70', value: '5b421c' },
        { grade: '80', value: '42301b' },
        { grade: '90', value: '2f261c' }
      ]
    },
    {
      name: 'orange',
      core: '30',
      values: [
        { grade: '1', value: 'f5e8de' },
        { grade: '10', value: 'fdcfad' },
        { grade: '20', value: 'fcaf6d' },
        { grade: '30', value: 'fe8500' },
        { grade: '40', value: 'db7c00' },
        { grade: '50', value: 'ad6418' },
        { grade: '60', value: '814b19' },
        { grade: '70', value: '653d1b' },
        { grade: '80', value: '482e1a' },
        { grade: '90', value: '33241c' }
      ]
    },
    {
      name: 'peach',
      core: '40',
      values: [
        { grade: '1', value: 'f7e7e2' },
        { grade: '10', value: 'f8d0c3' },
        { grade: '20', value: 'faad96' },
        { grade: '30', value: 'fc835c' },
        { grade: '40', value: 'fe6100' },
        { grade: '50', value: 'c45433' },
        { grade: '60', value: '993a1d' },
        { grade: '70', value: '782f1c' },
        { grade: '80', value: '56251a' },
        { grade: '90', value: '3a201b' }
      ]
    },
    {
      name: 'red',
      core: '50',
      values: [
        { grade: '1', value: 'f7e6e6' },
        { grade: '10', value: 'fccec7' },
        { grade: '20', value: 'ffaa9d' },
        { grade: '30', value: 'ff806c' },
        { grade: '40', value: 'ff5c49' },
        { grade: '50', value: 'e62325' },
        { grade: '60', value: 'aa231f' },
        { grade: '70', value: '83231e' },
        { grade: '80', value: '5c1f1b' },
        { grade: '90', value: '3e1d1b' }
      ]
    },
    {
      name: 'magenta',
      core: '40',
      values: [
        { grade: '1', value: 'f5e7eb' },
        { grade: '10', value: 'f5cedb' },
        { grade: '20', value: 'f7aac3' },
        { grade: '30', value: 'f87eac' },
        { grade: '40', value: 'ff509e' },
        { grade: '50', value: 'dc267f' },
        { grade: '60', value: 'a91560' },
        { grade: '70', value: '831b4c' },
        { grade: '80', value: '5d1a38' },
        { grade: '90', value: '401a29' }
      ]
    },
    {
      name: 'purple',
      core: '50',
      values: [
        { grade: '1', value: 'f7e4fb' },
        { grade: '10', value: 'efcef3' },
        { grade: '20', value: 'e4adea' },
        { grade: '30', value: 'd68adf' },
        { grade: '40', value: 'cb71d7' },
        { grade: '50', value: 'c22dd5' },
        { grade: '60', value: '9320a2' },
        { grade: '70', value: '71237c' },
        { grade: '80', value: '501e58' },
        { grade: '90', value: '3b1a40' }
      ]
    },
    {
      name: 'violet',
      core: '60',
      values: [
        { grade: '1', value: 'ece8f5' },
        { grade: '10', value: 'e2d2f4' },
        { grade: '20', value: 'd2b5f0' },
        { grade: '30', value: 'bf93eb' },
        { grade: '40', value: 'b07ce8' },
        { grade: '50', value: '9753e1' },
        { grade: '60', value: '7732bb' },
        { grade: '70', value: '602797' },
        { grade: '80', value: '44216a' },
        { grade: '90', value: '321c4c' }
      ]
    },
    {
      name: 'indigo',
      core: '70',
      values: [
        { grade: '1', value: 'e9e8ff' },
        { grade: '10', value: 'dcd4f7' },
        { grade: '20', value: 'c7b6f7' },
        { grade: '30', value: 'ae97f4' },
        { grade: '40', value: '9b82f3' },
        { grade: '50', value: '785ef0' },
        { grade: '60', value: '5a3ec8' },
        { grade: '70', value: '473793' },
        { grade: '80', value: '352969' },
        { grade: '90', value: '272149' }
      ]
    },
    {
      name: 'gray',
      core: '50',
      values: [
        { grade: '1', value: 'eaeaea' },
        { grade: '10', value: 'd8d8d8' },
        { grade: '20', value: 'c0bfc0' },
        { grade: '30', value: 'a6a5a6' },
        { grade: '40', value: '949394' },
        { grade: '50', value: '777677' },
        { grade: '60', value: '595859' },
        { grade: '70', value: '464646' },
        { grade: '80', value: '343334' },
        { grade: '90', value: '272727' }
      ]
    },
    {
      name: 'cool-gray',
      core: '50',
      values: [
        { grade: '1', value: 'e3ecec' },
        { grade: '10', value: 'd0dada' },
        { grade: '20', value: 'b8c1c1' },
        { grade: '30', value: '9fa7a7' },
        { grade: '40', value: '8c9696' },
        { grade: '50', value: '6f7878' },
        { grade: '60', value: '535a5a' },
        { grade: '70', value: '424747' },
        { grade: '80', value: '343334' },
        { grade: '90', value: '272727' }
      ]
    },
    {
      name: 'warm-gray',
      core: '50',
      values: [
        { grade: '1', value: 'efe9e9' },
        { grade: '10', value: 'e2d5d5' },
        { grade: '20', value: 'ccbcbc' },
        { grade: '30', value: 'b4a1a1' },
        { grade: '40', value: '9e9191' },
        { grade: '50', value: '7d7373' },
        { grade: '60', value: '5f5757' },
        { grade: '70', value: '4b4545' },
        { grade: '80', value: '373232' },
        { grade: '90', value: '2a2626' }
      ]
    },
    {
      name: 'neutral-white',
      core: '1',
      values: [
        { grade: '1', value: 'fcfcfc' },
        { grade: '2', value: 'f9f9f9' },
        { grade: '3', value: 'f6f6f6' },
        { grade: '4', value: 'f3f3f3' }
      ]
    },
    {
      name: 'cool-white',
      core: '1',
      values: [
        { grade: '1', value: 'fbfcfc' },
        { grade: '2', value: 'f8fafa' },
        { grade: '3', value: 'f4f7f7' },
        { grade: '4', value: 'f0f4f4' }
      ]
    },
    {
      name: 'warm-white',
      core: '1',
      values: [
        { grade: '1', value: 'fdfcfc' },
        { grade: '2', value: 'fbf8f8' },
        { grade: '3', value: 'f9f6f6' },
        { grade: '4', value: 'f6f3f3' }
      ]
    },
    {
      name: 'black',
      core: '100',
      values: [
        { grade: '100', value: '000'}
      ]
    },
    {
      name: 'white',
      core: '0',
      values: [
        { grade: '0', value: 'fff'}
      ]
    }
  ]
};
