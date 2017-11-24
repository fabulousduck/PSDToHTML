module.exports = function layer(layer) {
    this.baseLayer = layer;
    this.children = layer._children;
    
    this.hasChildren = function hasChildren() {
        return this.baseLayer._children.length > 0;
    }

    this.getLayerAttribute = function getLayerAttribute(attributeName) {
        return this.baseLayer[attributeName];
    }

}