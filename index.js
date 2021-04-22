// **1. Add Up.**
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:
// * sumIntFrom1ToN(4) ➞ 10
// * sumIntFrom1ToN(13) ➞ 91
// * sumIntFrom1ToN(600) ➞ 180300

const sumIntFrom1ToN = (integer) => {
    let sum = 0;
    for (i = 1; i <= integer; i++) {
        sum += i;
    };
    return sum;
};

console.log(sumIntFrom1ToN(600));

// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0

const sumOfCubes = (a, b, c) => (a * a * a) + (b * b * b) + (c * c * c);

console.log(sumOfCubes(1, 5, 9));

// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:
// * isStrStartOfWord("bu", "button") ➞ true
// * isStrStartOfWord("tri", "triplet") ➞ true
// * isStrStartOfWord("beau", "pastry") ➞ false

const isStrStartOfWord = (string, word) => word.startsWith(string) ? true : false;


console.log(isStrStartOfWord("beau", "pastry"));

// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:
// * isLEQZero(3) ➞ false
// * isLEQZero(0) ➞ true
// * isLEQZero(-4) ➞ true
// * isLEQZero(10) ➞ false

const isLEQZero = (number) => number <= 0 ? true : false;

console.log(isLEQZero(10));

// **5. Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:
// * countOccurrences("this is a string", "i") ➞ 3

const countOccurrences = (string, letter) => {
    let counter = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i].includes(letter)) {
            counter++;
        };
    };
    return counter;
};

console.log(countOccurrences("this is an example string sentence", "e"));

// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

// Examples:
// * calcBaseToExponent(5, 5) ➞ 3125
// * calcBaseToExponent(10, 10) ➞ 10000000000
// * calcBaseToExponent(3, 3) ➞ 27

const calcBaseToExponent = (a, b) => {
    let result = a;
    for (i = 1; i < b; i++) {
        result *= a;
    };
    return result;
};

console.log(calcBaseToExponent(3, 3));

// **7. Dog Years.**
// Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:
// * dogAge(4) ➞ "Your doggo is 28 years old in dog years!"

const dogAge = (humanAge) => humanAge * 7;

console.log(dogAge(11));

// i had to do the same before, but with a different onset: the 1st and 2nd dog year equal 12 human years each, every other year is plus 4 human years on top, so let's try that:

const alternativeDogAge = (humanAge) => {
    let dogAgeinHumanYears = 0;
    if (humanAge === 1) {
        dogAgeinHumanYears = 12;
        return dogAgeinHumanYears;
    } else if (humanAge === 2) {
        dogAgeinHumanYears = 24;
        return dogAgeinHumanYears;
    }
    dogAgeinHumanYears = 24;
    for (i = 2; i < humanAge; i++) {
        dogAgeinHumanYears += 4;
    }
    return dogAgeinHumanYears;
};

console.log(alternativeDogAge(6));

// **8. A Lifetime Supply...**
// You just won a lifetime supply of your favourite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".  Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100. 

// Examples:
// * calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// * calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

const calcLifetimeSupply = (age, snacksPerDay) => {
    let snackAmount = 0;
    for (i = age; i < 100; i++) {
        snackAmount += snacksPerDay * 365.25;
    };
    return Math.ceil(snackAmount);
};

console.log(`The snack company should provide you with ${calcLifetimeSupply(40, 3)} units, until you are a ripe old age of 100. Happy snacking!`);

// **Bonus:** 
// 1) Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off). 
// 2) Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

//     * calcLifetimeSupply(32, 0.58, 65) ➞ "The snack company should provide you with 6,991 units, until you are a ripe old age of 65. Happy snacking!"

const calcCutOffLifetimeSupply = (age, snacksPerDay, maximumAge) => {
    let snackAmount = 0;
    for (i = age; i < maximumAge; i++) {
        snackAmount += snacksPerDay * 365.25;
    };
    return Math.ceil(snackAmount);
};

console.log(`The snack company should provide you with ${calcCutOffLifetimeSupply(32, 0.58, 65)} units, until you are a ripe old age of 65. Happy snacking!`);

// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// * isWaldoHere("is there a wal here?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("Wait, don't you mean Wally?") ➞ false
// * isWaldoHere("waldo is here") ➞ true

const isWaldoHere = (string) => string.toLowerCase().includes("waldo") ? true : false;

console.log(isWaldoHere("I found you Waldo!"));

// **10. Pie.**
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

// Examples:
// * isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// * isEqualSlices(8, 3, 2) ➞ true
// * isEqualSlices(8, 3, 3) ➞ false
// * isEqualSlices(24, 12, 2) ➞ true

const isEqualSlices = (totalSlices, pieEaters, slicesPerEater) => (totalSlices - (pieEaters * slicesPerEater) >= 0) ? true : false;

console.log(isEqualSlices(8, 3, 3));

// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * isEqualNumXandO("ooxx") ➞ true
// * isEqualNumXandO("xooxx") ➞ false
// * isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// * isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// * isEqualNumXandO("zzoo") ➞ false

const isEqualNumXandO = (string) => {
    countO = 0;
    countX = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i].toLowerCase().includes("o")) {
            countO++;
        } else if (string[i].toLowerCase().includes("x")) {
            countX++;
        };
    };
    if (countO === countX) {
        return true;
    } else {
        return false;
    };
};

console.log(isEqualNumXandO("zxzoxo"));

// **12. isPrime?**
// Create a function that returns true if a number is a prime number, and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false

const isPrime = number => {
    if (number <= 1) {
        return false;
    };
    if (number === 2) {
        return true;
    }
    let sqrt = Math.sqrt(number);
    for (i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            return false;
        };
    };
    return true;
};  

console.log(isPrime(9));

// **13. Validate Email.**
// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// * The string must contain exactly one "@" character
// * The string must contain at least one "." character
// * The "." and the "@" must be in the appropriate places:
//     * neither "." nor "@" can be the last character
//     * "." can neither be directly before, nor directly after, "@"
//     * there cannot be consecutive "." characters
//     * "@" must have at least one character in front of it

// Examples:
// * "j@example.com" is valid while "@example.com" is invalid
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
// * e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid

const checkIfEmailisValid = (string) => {
    if (string[0] === "@") {
        return false;
    };
    if (string.includes("@") && string.includes(".")) {
        for (i = 0; i < string.length; i++) {
            if (string[i] === "@") {
                let partStr = ""; // helper string
                for (j = string.length - (i - 7); j < string.length; j++) {
                    partStr += string[j];
                    if ((string[j].includes("."))) {
                    return true;
                    };
                    return false;
                };
                // console.log(partStr);
                // line 273 to 281 works only for the argument of "john.smith@com", because I can't get the start counter of the nested loop in line 275 to work properly --> open for suggestions
            };
            if (string[i] === ".") {
                if (string[i - 1] === "@" || string[i - 1] === ".") {
                    return false;
                };
                if (string[i + 1] === "@" || string[i + 1] === ".") {
                    return false;
                };
            };
        };
        if (string[string.length -1] === "." || string[string.length -1] === "@") {
            return false;
        };
        return true;
    };
    return false;
};

console.log(checkIfEmailisValid("john.smith@com"));

// **Good Luck & Enjoy :)**

