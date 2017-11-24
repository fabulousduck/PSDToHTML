const PSD   = require('psd');
const util  = require('./psdtohtml/util');
const layer = require('./psdtohtml/layer');

module.exports = function () {
    const utils = new util();

    this.convert = function convert(filePath, config = {}) {
        return PSD.open(filePath)
            .then(parsedPsdData => parsedPsdData.tree().descendants()[0].root()._children)
            .then(rootPsdLayers => this.parse(rootPsdLayers))
            .catch(err => err)
    }

    this.parse = function parse(psdLayerArray) {
        psdLayerArray.map(psdLayer => {

            const superLayer = new layer(psdLayer);
            
            
        })
    }

}
