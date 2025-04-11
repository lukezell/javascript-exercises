const removeFromArray = function(givenArray, arg1, arg2, arg3, arg4) {
    let newArray = [];
    function buildAnArray(value) {
        if (value !== arg1 && value !== arg2 && value !== arg3 && value !== arg4) {
            newArray.push(value);
        }
    }

    givenArray.forEach(buildAnArray);

    return newArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
