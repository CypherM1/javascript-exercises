const palindromes = function (sentance) {
    let sentanceNoSpaceNoPunctuation = sentance.replace(/[\s+.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    let sentanceAllLowerCase = sentanceNoSpaceNoPunctuation.toLowerCase();
    let sentanceReverse = '';
    for (var i = sentanceAllLowerCase.length - 1; i >= 0; i--) {
        sentanceReverse += sentanceAllLowerCase[i];
    }
    if (sentanceReverse === sentanceAllLowerCase) {
        return true;
    } else {
        return false;
    }

};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
