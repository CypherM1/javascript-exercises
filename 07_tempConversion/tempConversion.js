const ftoc = function(temp) {
  let celTemp = (temp - 32) * (5 / 9);
  let celTempRound = Math.round(celTemp * 10) / 10;
  return celTempRound;
};

const ctof = function(temp) {
  let fahTemp = (temp * (9 / 5) + 32);
  let fahTempRound = Math.round(fahTemp * 10) / 10;
  return fahTempRound;
};

console.log(ftoc(100));
console.log(ctof(73.2));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
