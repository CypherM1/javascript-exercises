const leapYears = function(year) {
    if ((year % 400) == 0){
        return true;
    };
    if ((year % 100) == 0){
        return false;
    };
    if ((year % 4) == 0){
        return true;
    } else {
        return false;
    }
};

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;


/* 
- Leap years are years divisible by four 
    (like 1984 and 2004). 
- Years divisible by 100 are not leap years 
    (such as 1800 and 1900) 
- Unless they are divisible by 400 
    (like 1600 and 2000).
*/
