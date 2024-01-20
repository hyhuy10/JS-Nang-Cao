function sayHello(name = 'huy', age = 19) {
    console.log('Hello cac ban ' + name);
}
sayHello('Huy');

//arrow function() => {}
// function addNumber() => {}
const addNumber = (a, b) => {
    return a + b;
}
const addNumber2 = (a, b) => a + b;
console.log(addNumber2(2, 4));
function subtract(num1, num2) {
    return num1 - num2;
}
const result = subtract(10, 2);

console.log(result, subtract(20, 5));

// Default Params
function registerUser(user = 'Bot') {
    // Old way - before using `=`
    // if (!user) {
    //   user = 'Bot';
    // }

    return user + ' is registered';
}
console.log(registerUser());

// sử dụng toán tử spread truyền vào 1 mảng là đối số
function sum(...numbers) {
    {
        let total = 0;
        for (const num of numbers) {
            total += num;
        }
        return total;
    }
}
console.log(sum(1, 2, 3, 4, 5, 6, 2445));

//object
const user = {
    id: 1,
    name: 'Ha Huy',
}
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
console.log(loginUser(user));
console.log(
    loginUser({
        id: 2,
        name: 'Huy',
    })
);

// Arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

{
    const x = 100;
    console.log(x, 'hihi');  // 100 'hihi'
    function run() {
        console.log(window.innerHeight);
        console.log(x, 'in function');
    }
    run();

    if (true) {
        console.log(x, 'in block');
    }

    function add() {
        const x = 1;
        const y = 50;
        console.log(x + y);
    }
    add();

    function first() {
        const x = 100;
        function second() {
            const y = 200;
            console.log(x + y);
        }
        second();
    }
    first();
}

{
    function addDollarSign(value) {
        return '$' + value;
    }
    console.log(addDollarSign(100));

    const addPlusSign = function (value) {
        return '+' + value;
    };
    console.log(addPlusSign(200));
}

{
    const add = (a, b) => {
        return a + b;
    }
    const subtract = (a, b) => a - b;
    const double = (a) => a * 2;
    const createObj = () => ({
        name: 'Kim Hue',
        age: 20,
    })

    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function (n) {
        console.log(n);
    })
    numbers.forEach((n) => console.log(n));
    console.log(add(1, 2));
    console.log(subtract(10, 5));
    console.log(double(10));
    console.log(createObj());
}
{
    // IFFE Syntax (Has it's own scope and runs right away)
    (function () {
        const user = 'Ha Huy';
        console.log(user);
        const hello = () => console.log("Hello mọi người");
        hello();
    })();
    //==> cú pháp viết hàm chạy hàm ngay lập tức

    (function (name) {
        console.log('Hello' + name);
    })(' Hue');
    //==> truyền vào biến giá trị Hue
}
{
    // Challenge 1
    // function getCelsius(f) {
    //   const celsius = ((f - 32) * 5) / 9;
    //   return celsius;
    // }
    const getCelsius = (f) => ((f - 32) * 5) / 9;
    //== cú pháp viết shorthand
    console.log(`${getCelsius(35)}\xB0C`);

    //
    function minMax(arr) {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        return {
            min, max,
        };
    }
    console.log(minMax([2, 31, 4, 5, 6]));

    // Challenge 3
    ((length, width) => {
        const area = length * width;

        const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

        console.log(output);
    })(20, 10);

    //  Go to 'sources' tab and add a breakpoint at the first line and step through to see the execution phase in action
    const x = 100;
    const y = 50;

    function getSum(n1, n2) {
        const sum = n1 + n2;
        return sum;
    }

    const sum1 = getSum(x, y);
    const sum2 = getSum(10, 5);

    console.log(sum1, sum2);
}
{
    function first() {
        console.log('first...');
    }
    function second() {
        console.log('second...');
    }
    function third() {
        console.log('third...');
    }
    first();
    second();
    third();

    //
    function first() {
      console.log('first...');
      second();
    }

    function second() {
      console.log('second...');
      third();
    }

    function third() {
      console.log('third...');
    }

    first();
}

