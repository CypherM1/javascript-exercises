const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0){
        return 'ERROR';
    };
    if ( !(typeof(num1) == 'number') || !(typeof(num2) == 'number')){
        return 'ERROR';
    };
    numArr = [];
    if (num1 > num2){
        for (let i = num1; i >= num2; i--){
            numArr.push(i);
        };
    } else {
        for (let i = num1; i <= num2; i++){
            numArr.push(i);
        };
    };

    return(numArr.reduce((a, b) => a + b, 0));

};

console.log(sumAll(1, 123));

// Do not edit below this line
module.exports = sumAll;
