const converter = require('../lib/PSDToHTML.js');
const Promise = require('bluebird');
const fs = require('fs');

const testFilePath = 'test/files/Front.psd';

Promise.promisifyAll(fs, { suffix: 'Promise'});

const converterObject = new converter();

converterObject.convert(testFilePath)
    .then(function handlePsdParseResult(result) {
        console.log(result)
    })