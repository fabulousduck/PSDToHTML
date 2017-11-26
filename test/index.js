import { assert } from 'chai';
import converter from '../src/psdtohtml';

describe('test psdtohtml', () => {
  it('should test the psdtphtml module', () => {
    const converterInstance = new converter();
    const testFilePath = 'test/files/test2.psd'
    assert(typeof converterInstance.convert(testFilePath) == Array, 'Failed asserting that converter returns array');
  });
});
