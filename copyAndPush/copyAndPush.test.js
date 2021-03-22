const copyAndPush = require('./copyAndPush');

describe('copyAndPush testing', () => {
  it('it will return a new array with all items from original array plus a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newItem = 4;

    const newArray = copyAndPush(numbers, newItem);

    expect(newArray).toEqual([1, 2, 3, 4]);
  });

  it('returns the original array', () => {
    const arr = [1, 2, 3];
    const newValue = 4;

    copyAndPush(arr, newValue);

    expect(arr).toEqual([1, 2, 3]);
  });
});
