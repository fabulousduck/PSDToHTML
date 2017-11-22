# PSDToHTML
simple PSD file to HTML parser


## Installing
```
$ git clone https://github.com/fabulousduck/PSDToHTML.git

```

## Running

```
$ npm run build
$ node examples/example1.js
```

## TODO

- [ ] Ignore hidden layers
- [ ] Use descendants instead of tree
- [ ] Think about what kind of configs i want to offer
- [ ] Implement layer typing for tagging
- [ ] Set a rule that any PSD file must parse regardless of its contents.


## structure of a psd layer


```javascript

Layer {
    layer: 
     Layer {
       file: [Object],
       header: [Object],
       mask: [Object],
       blendingRanges: [Object],
       adjustments: [Object],
       channelsInfo: [Array],
       blendMode: [Object],
       groupLayer: null,
       infoKeys: [Array],
       top: 0,
       left: 0,
       bottom: 250,
       right: 300,
       channels: 4,
       height: 250,
       rows: 250,
       width: 300,
       cols: 300,
       opacity: 255,
       visible: true,
       clipped: false,
       layerEnd: 25860,
       legacyName: '<background>green',
       layerId: [Function],
       blendClippingElements: [Function],
       blendInteriorElements: [Function],
       locked: [Function],
       metadata: [Function],
       image: [Object],
       node: [Circular] },
    parent: 
     Root {
       psd: [Object],
       layer: [Object],
       parent: null,
       _children: [Array],
       name: null,
       forceVisible: null,
       coords: [Object],
       topOffset: 0,
       leftOffset: 0 },
    _children: [],
    name: '<background>green',
    forceVisible: null,
    coords: { top: 0, bottom: 250, left: 0, right: 300 },
    topOffset: 0,
    leftOffset: 0 } ]


```