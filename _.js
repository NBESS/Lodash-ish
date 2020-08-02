const _ = {

    // clamp number within the inclusive an upper and lower bounds

    // declare a function that accepts three parameters, one for the the number to clamp, lower-bound, and the upper-bound
    clamp(number, lowerBound, upperBound) {
        // create a variable to assign clamped number that will be returned
        let clampedNumber = '';
        // compare number to upper and lower bounds
        if (number < lowerBound) {
            return clampedNumber = Math.max(number, lowerBound);
        };
        if (number > lowerBound && number < upperBound) {
            return clampedNumber = number;
        };
        if (number > upperBound) {
            return clampedNumber = Math.min(number, upperBound);
        };
        // return clamped number
        return clampedNumber;
    }





    // Do not write or modify code below this line.
};


module.exports = _;