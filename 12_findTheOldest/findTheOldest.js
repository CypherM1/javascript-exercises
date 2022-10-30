const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    const oldest = people.sort(function(a,b) {
        if (a.hasOwnProperty("yearOfDeath") == false) {
            const lastperson = ((new Date()).getFullYear()) - a.yearOfBirth;
            const nextperson = b.yearOfDeath - b.yearOfBirth;
            if(lastperson > nextperson) {
                return -1;
              } else {
                return 1;
              };
        } else if (b.hasOwnProperty("yearOfDeath") == false) {
            const lastperson = a.yearOfDeath - a.yearOfBirth;
            const nextperson = ((new Date()).getFullYear()) - b.yearOfBirth
            if(lastperson > nextperson) {
                return -1;
              } else {
                return 1;
              };
        } else {
            const lastperson = a.yearOfDeath - a.yearOfBirth;
            const nextperson = b.yearOfDeath - b.yearOfBirth;
            if(lastperson > nextperson) {
                return -1;
              } else {
                return 1;
              };
        }
      });
  
      return(oldest[0]);
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
