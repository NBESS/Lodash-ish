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
    },

    pad(string, length) {
        if (string.length >= length) {
            return string
        }
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = (length - string.length) - startPaddingLength;

        let paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);

        return paddedString

    },

    has(obj, key) {
        let hasValue = obj[key] === undefined ? false : true;
        return hasValue;

    },

    invert(obj) {
        const invertedObject = {};
        for (prop in obj) {
            let originalValue = obj[prop];
            invertedObject[originalValue] = prop;
        }
        return invertedObject
    },

    findKey(obj, predicate) {
        for (item in obj) {
            let value = obj[item];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return item
            }
            return undefined
        }
    },

    drop(arr, num) {
        let droppedArr = []

        if (!num) {
            num = 1;
        }

        droppedArr = arr.slice(num)
        return droppedArr
    },

    dropWhile(arr, predicate) {
        droppedNumber = arr.findIndex((element, index) => {
            return !predicate(element, index, arr)
        })
        droppedArray = this.drop(arr, droppedNumber)

        return droppedArray
    },

    chunk(arr, size) {

        if (!size) {
            size = 1;
        }
        const arrayOfChunks = []

        for (let i = 0; i < arr.length; i += size) {
            let arrayChunk = arr.slice(i, (i + size))
            arrayOfChunks.push(arrayChunk);
        }

        return arrayOfChunks
    }

    // Do not write or modify code below this line.



};



module.exports = _;