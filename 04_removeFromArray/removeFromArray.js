const removeFromArray = function(...itm) {
    const list = itm[0];
    const altList = [];
    list.forEach((item) => {
        if (!itm.includes(item)) {
            altList.push(item);
        };
    });
    return altList;
};



console.log(removeFromArray([1, 11, "10", 3, 4], '10'));

// Do not edit below this line
module.exports = removeFromArray;
