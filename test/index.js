import { assert } from 'chai';
import awesomeFunction from '../src/awesomeModule';

describe('test psdtohtml', () => {
  it('should test the psdtphtml module', () => {
    assert(awesomeFunction(1, 1) === 2, 'Not awesome :(');
  });
});
