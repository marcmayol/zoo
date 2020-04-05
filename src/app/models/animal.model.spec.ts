import { Animal } from './animal.model';

describe('Animal', () => {
  it('should create an instance', () => {
    expect(new Animal()).toBeTruthy();
  });
});
