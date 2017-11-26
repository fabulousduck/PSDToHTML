import PSD from 'psd';
import util from './psdtohtml/util';
import layer from './psdtohtml/layer';
import generator from './psdtohtml/generator';

module.exports = function () {
    const utils = new util();
    const elementGenerator = new generator();

    this.convert = function convert(filePath, config = {}) {
        return PSD.open(filePath)
            .then(parsedPsdData => parsedPsdData.tree().descendants()[0].root()._children)
            .then(rootPsdLayers => this.parse(rootPsdLayers))
            .catch(err => err)
    }

    this.parse = function parse(psdLayerArray) {
        return psdLayerArray.map(psdLayer => {
            const superLayer = new layer(psdLayer);
            
            if(superLayer.hasChildren()) {
                return this.parse(superLayer.children);
            }
            return elementGenerator.buildElement(superLayer);
        })
    }

}
