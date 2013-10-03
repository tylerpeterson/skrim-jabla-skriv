module.exports = function sortListByFields(list, field) {
  function comparator(a, b) {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  }
  list.sort(comparator);
};