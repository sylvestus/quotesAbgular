import { CustomDatedPipe } from './custom-dated.pipe';

describe('CustomDatedPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDatedPipe();
    expect(pipe).toBeTruthy();
  });
});
