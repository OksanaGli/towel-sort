
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let towelSortArray = [];

  if (!matrix || matrix.length === 0) {
    return [];
  }

  for (let i = 0; i <= matrix.length - 1; i ++) {
    if (i % 2 !== 0) {
      let compare = (a, b) => b - a
      towelSortArray.push(matrix[i].sort(compare));       
    } else {
      towelSortArray.push(matrix[i]);  
    }
  }
  return towelSortArray.flat();
}
