const converter = require('../lib/PSDToHTML.js');
const Promise = require('bluebird');
const fs = require('fs');

const testFilePath = 'test/files/test2.psd';

Promise.promisifyAll(fs, { suffix: 'Promise'});

const converterObject = new converter();

converterObject.convert(testFilePath)
