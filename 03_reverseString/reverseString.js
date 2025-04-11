const reverseString = function(forwardString) {
    let forwardArray = forwardString.split("");
    forwardArray.reverse();
    let backwardString = forwardArray.join("");
    return backwardString;
};

// Do not edit below this line
module.exports = reverseString;
