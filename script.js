"strict"

// დავალება 1:

function sumOfAll(arry1) {
    let sum = 0;
    for (let a of arry1) 
      sum += a;
    return sum;
  };
  console.log(sumOfAll([10, 50, 6, 7, 8, 11, 6, 3, 9]));


// დავალება 2:

function getFullName(user) {
    if (user.isloggedin) {
        return `${user.firstname} ${user.lastname}`;
    } else {
        return false;
    }
}

const user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
};

console.log(getFullName(user));

// დავალება 3:

function getMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    return Math.max(...numbers);
}

const numbersArray = [10, 50, 6, 7, 8, 11, 6, 3, 9];
console.log(getMaxNumber(numbersArray)); // გამოიტანს: 50

// დავალება 4:

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'this number is even';
    } else {
        return 'this number is odd';
    }
}

console.log(checkEvenOrOdd(4)); // 'this number is even'
console.log(checkEvenOrOdd(7)); // 'this number is odd'

// დავალება 5:

let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log(reversedArray);

// დავალება 6:

let checkAge = (age) => age > 18 ? 'სრულწლოვანი' : 'არასრულწლოვანი';

console.log(checkAge(20));
console.log(checkAge(15));

// დავალება 7:

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 5-ს რომ ვშლი არაფერს უნდა წერდეს? error ან რამეს.

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 5) {
        console.log('არის');
        break;
    }
}

// დავალება 8:

let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
    if (array5[i] === 7) {
        continue;
    }
    console.log(array5[i]);
}
