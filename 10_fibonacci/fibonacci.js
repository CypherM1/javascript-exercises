const fibonacci = function(seqNum) {
    if (Number(seqNum) < 0){
        return ("OOPS");
    } else if (Number(seqNum) == 1) {
        return (1);    
    } else {
        a = 0;
        b = 1;
        for (let i = 0; i < Number(seqNum) - 1 ; i++) {
            answer = a + b
            a = b;
            b = answer;
        }
        return(answer);
    };
};

fibonacci("3");

// Do not edit below this line
module.exports = fibonacci;
