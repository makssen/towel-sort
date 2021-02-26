// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || !matrix.length) return [];
    let res = [];
    matrix.forEach((item, i) => {
        if (i % 2 === 1) {
            item.reverse();
        }
        item.forEach(elem => {
            res.push(elem);
        });
    });
    return res;
}