const capitalizeAndFilter = require('./capitalizeAndFilter');

describe('capitalizeAndFilter testing', () => {
  it('it will take in an array of strings, capitilize all strings and filter out any string that starts with f', () => {
    const array = ['carp', 'crawdad', 'frog', 'trout'];
    const newArray = capitalizeAndFilter(array);

    expect(newArray).toEqual(['CARP', 'CRAWDAD', 'TROUT']);
  });
});
