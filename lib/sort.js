module.exports = function sortListByFields(list, fields) {
  function comparator(a, b) {
    var field, i;

    for (i in fields) {
      field = fields[i];

      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      if (i === fields.length - 1) {
        return 0;
      }
    }
  }
  list.sort(comparator);
};