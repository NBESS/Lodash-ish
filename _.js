const _ = {

    // clamp number within the inclusive an upper and lower bounds

    // declare a function that accepts three parameters, one for the the number to clamp, lower-bound, and the upper-bound
    clamp(number, lowerBound, upperBound) {
        // // create a variable to assign clamped number that will be returned
        // let clampedNumber = '';
        // // compare number to upper and lower bounds
        // if (number < lowerBound) {
        //     return clampedNumber = Math.max(number, lowerBound);
        // };
        // if (number > lowerBound && number < upperBound) {
        //     return clampedNumber = number;
        // };
        // if (number > upperBound) {
        //     return clampedNumber = Math.min(number, upperBound);
        // };
        // // return clamped number
        // return clampedNumber;

        const lowerClampedValue = Math.max(number, lowerBound);

        const clampedValue = Math.min(lowerClampedValue, upperBound);

        return clampedValue
    },

    inRange(number, start, end) {
        // check to see if the endValue is undefined, if so, set it to 0
        if (end === undefined) {
            end = start
            start = 0
        }
        // swap start and end values if start greater than end
        if (start > end) {
            let tempEnd = end;
            end = start
            start = tempEnd;
        }
        const isInRange = start <= number && end > number ? true : false;
        return isInRange

    }


    // Do not write or modify code below this line.
};


module.exports = _;