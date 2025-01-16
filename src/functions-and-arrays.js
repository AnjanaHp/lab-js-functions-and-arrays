// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {


    if (num1 > num2) {
        console.log(`${num1} is the max value`);
        return num1;
    } else if (num1 < num2) {
        console.log(`${num2} is the max value`);
        return num2;
    } else {
        console.log('Both are max');
        return num1;
    }

}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(array) {
    let longestWord = '';
    if (array.length === 0) {
        return null;
    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i].length > longestWord.length) {
                longestWord = array[i];
            }
        }
    }
    console.log("Longest word is :" + longestWord + " and its length is " + longestWord.length);
    return longestWord;
}
console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arry) {
    let sum = 0;
    for (i = 0; i < arry.length; i++) {
        sum += arry[i];

    }
    console.log(sum);
    return sum;
}
const toAdd = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
sumNumbers(toAdd);



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num) {

    let finalNum = 0;
    let result;
    if (num.length !== 0) {
        result = sumNumbers(num);
        finalNum = result / (num.length);
    }
    console.log(finalNum);
    return finalNum;
}

averageNumbers(numbers2);


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arry, word) {
    if (arry.length === 0) {
        return null;
    }
    for (let i = 0; i < arry.length; i++) {
       
        if (arry[i] === word) {
            return true;
        }
    }
    return false;
}
console.log(doesWordExist(words2, "disobedi"));
