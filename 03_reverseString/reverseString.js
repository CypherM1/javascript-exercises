const reverseString = function(s) {
    x = s.split("");
    console.log(x);
    y = x.reverse();
    console.log(y);
    z = y.join("");
    return z;
};

// Do not edit below this line
module.exports = reverseString;
