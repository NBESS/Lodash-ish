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

    },

    words(stringOfWords) {
        // create a variable arrayOfWords that stores string as an array of strings made up of the words in the string
        let arrayOfWords = []
        // separate words based on ' ' in the string and store into arrayOfWords 
        arrayOfWords = stringOfWords.split(' ')

        const filteredWords = arrayOfWords.filter(word => {
            if (typeof word == 'string' && word != '&') {
                return true
            } else {
                return false
            }

        })

        return filteredWords;
    }


    // Do not write or modify code below this line.
};

console.log(_.words('this is great & awesome'))
console.log()

module.exports = _;