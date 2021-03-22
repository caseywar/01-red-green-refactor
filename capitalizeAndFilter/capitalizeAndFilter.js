const capitalizeAndFilter = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const uppercaseItem = item.toUpperCase();

    if (uppercaseItem.charAt(0) !== 'F') {
      newArray.push(uppercaseItem);
    }
  }
  return newArray;
};

module.exports = capitalizeAndFilter;
