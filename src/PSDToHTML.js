const PSD = require('psd');

export default function convert(config) {
    const { filePath } = config;
    return PSD.open(filePath)
        .then(function handleParsedPSD(psd) {
            const nodes= psd.tree().descendants();
            console.log(nodes);
            return
            // return generateHTMLStructure(children, 0);
        })
//         .then(function handleGeneratedHTMLTree(HTMLTree) {
//             return HTMLTree
//         })
//         .catch(function handleError(err) {
//             console.error(err)
//         })
}


function generateHTMLStructure(elements, depth) {
    return elements.map(function handleElement(element) {
        console.log(element);
        if(element.children) {
            const { height, width } = element;
            return `<div style="height:${height}px; width:${width}px; border: 1px solid #000; z-index:${depth};position:absolute;">${generateHTMLStructure(element.children, depth+1)}</div>`;
        }
        return parseElementToHTML(element);
    }).join('')
}


function parseElementToHTML(element) {
    const { height, width } = element;
    return `<div style="height:${height}px; width:${width}px; border: 1px solid #000; position:relative;"></div>`;
}

function parseHTMLTree(HTMLTree) {
    return HTMLTree.map(function handleHTMLTreeElement(TreeElement) {
        if(Treeelement.isArray()) {

        }
    })
}
