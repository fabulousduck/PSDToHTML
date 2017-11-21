const convert = require('../lib/PSDToHTML.js');
const Promise = require('bluebird');
const fs = require('fs');

const testFilePath = 'test/html.html'

Promise.promisifyAll(fs, { suffix: 'Promise'});

convert({
    filePath: 'test/files/test2.psd'
})
.then(function handleHTML(HTML) {
    return saveFile(HTML, testFilePath);
})

function saveFile(HTML, filePath) {
	return fs.writeFilePromise(filePath, HTML)
		.then(function handleFileSaveResult(result) {
			return result
		})
		.catch(function handleFileSaveError(err) {
			console.error("error while saving html to file \n", err)
		})
}
