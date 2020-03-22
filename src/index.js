exports.min = function min(array) {
    let check = array ? array.length : 0;
    if (check) {
        return Math.min.apply(Math, array);
    }
    return 0;
};

exports.max = function max(array) {
    let check = array ? array.length : 0;
    if (check) {
        return Math.max.apply(Math, array);
    }
    return 0;
};

exports.avg = function avg(array) {
    let check = array ? array.length : 0;
    let result;
    if (check) {
        result = array.reduce((sum, current) => sum + current, 0) / array.length * 100;
        return Math.round(result) / 100;
    }
    return 0;
};
