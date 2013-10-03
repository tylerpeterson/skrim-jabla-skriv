module.exports = function sortListByFields(list, fields) {
  if (!Array.isArray(fields)) {
    fields = [fields];
  }

  function comparator(a, b) {
    var field = fields[0];

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