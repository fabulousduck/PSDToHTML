const converter = require('../lib/PSDToHTML.js');
const Promise = require('bluebird');
const fs = require('fs');

const testFilePath = 'test/html.html'

Promise.promisifyAll(fs, { suffix: 'Promise'});

const converterObject = new converter();

console.log(converterObject.convert(testFilePath))
