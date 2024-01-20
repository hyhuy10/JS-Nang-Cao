// Ì statement Syntax
if (true) {
    console.log('This is true');
}
if (false) {
    console.log('This is NOT true');
}

// 
const x = 10;
const y = 5;
if (x > y) {
    console.log(`${x} lớn hơn ${y}`);
}
if (x === y) {
    console.log(`${x} = ${y}`);
}
else {
    console.log(`${x} != ${y}`);
}

// !==: khác value nhưng cùng kiểu dữ liệu
if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
}
// console.log(z); // throw error

{
    const d = new Date(10, 30, 2022, 6, 0, 0);
    //                 (m/d/y/h/phút/ giây)
    const hour = d.getHours();
    console.log(hour);
    if (hour < 12) {
        console.log('Good Morning');
    }
    else if (hour < 18) {
        console.log('Good Afternoon');
    }
    else {
        console.log('Good Morning');
    }

    if (hour < 12) {
        console.log('Good Morning');
        if (hour === 6) {
            console.log('Wake Up');
        }
    }
    else if (hour < 18) {
        console.log('Good Afternoon');
    }
    else {
        console.log('Good Night');
        if (hour >= 20) {
            console.log('zzzzzzzzzz');
        }
    }
    if (hour >= 17 && hour < 15) {
        console.log('It is work time');
    }
    if (hour === 6 || hour === 20) {
        console.log('Brush your teeth');
    }
}
{
    // switch
    const d = new Date(2022, 1, 10, 19, 0, 0);
    const month = d.getMonth();
    const hour = d.getHours();
    switch (month) {
        case 1:
            console.log('Tháng 1');
            break;
        case 2:
            console.log('Tháng 2');
            break;
        case 3:
            console.log('Tháng 3');
            break;
        default:
            console.log("no value");
    }

    // range evaluation
    switch (true) {
        case hour < 12:
            console.log('Good Morning');
            break;
        case hour < 18:
            console.log('Good Afternoon');
            break;
        default:
            console.log("good night");
    }
}

{
    // toán tử 
    function tinhToan(num1, num2, operator) {
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'Invalid Operator';
        }
        console.log(result);
        return result;

    }
    tinhToan(5, 2, '&');
}
// trthy_falsy
// && lấy false, || lấy true
{
    // Falsy values: false, 0, "" or '' , null, underfined, NaN
    // true : true, 0, ' ', false, [], {}, function(){}

    const x = [];
    const y = x;
    x.push(1);
    console.log(x === y);
    console.log(Boolean(x));

    // Truthy and falsy caveats
    const children = 3;

    // Checking for literal 0
    if (children) {
        console.log(`You have ${children} children`);
    } else {
        console.log('Please enter number of children');
    }

    // Solution
    if (!isNaN(children)) {
        console.log(`You have ${children} children`);
    } else {
        console.log('Please enter number of children');
    }

    // Checking for empty arrays
    const posts = ['Post One'];

    // Always true even when empty
    if (posts) {
        console.log('List Posts');
    } else {
        console.log('No Posts To List');
    }
    // Solution
    if (posts.length > 0) {
        console.log('List Posts');
    } else {
        console.log('No Posts To List');
    }
    // Solution
    // if (Object.keys(user).length > 0) {
    //     console.log('List User');
    // } else {
    //     console.log('No User');
    // }

    // Loose Equality (==)
    console.log(false == 0); // true
    console.log('' == 0); // true
    console.log(null == undefined); // true

    // Strict Equality
    console.log(false === 0); // false
    console.log('' === 0); // false
    console.log(null === undefined); // false


}

// logical-operator
{

    console.log(10 < 20 && 30 > 15 && 40 > 30);
    console.log(10 > 20 || 30 < 15);
    // && - Will return first falsy value or the last value
    let a;

    a = 10 && 20;
    a = 10 && 20 && 30;
    a = 10 && 0 && 30;
    a = 10 && '' && 0 && 30;
    console.log(a);  // a= " "

    const posts = ['Post One', 'Post Two'];
    posts.length > 0 && console.log(posts[0]);

    // || - Will return the first truthy value or the last value

    let b;

    b = 10 || 20;
    b = 0 || 20;
    console.log(b);
    // ?? - Returns the right side operand when the left is null or undefined
    // trả về toán hạng bên phải khi toán hạng bên trái rỗng or ko xác định

    let c;

    c = 10 ?? 20;
    c = null ?? 20;
    c = undefined ?? 30;
    c = 0 ?? 30;
    c = '' ?? 30;
    console.log(c);

    // ||= : chỉ gán giá trị trị bên phải nếu giá trị bên trái là falsy
    let d = null;
    if (!d) {
        d = 10;
    }
    d = d || 10;

    d ||= 10;

    console.log(d);

    // &&= assigns the right side value only if the left is a truthy value.

    let e = 10;

    if (e) {
        e = 20;
    }

    e = e && 20;

    e &&= 20;

    console.log(e);

    // ??= assigns the right side value only if the left is null or undefined.

    let g = null;

    if (g === null || g === undefined) {
        g = 20;
    }

    g = g ?? 20;

    g ??= 20;

    console.log(g);

    const age = 17;
    if (age >= 18) {
        console.log('Bạn có thể vote');
    }
    else {
        console.log('Bạn ko thể vote');
    }

    // toán tử 3 ngôi
    age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

    const canVote = age >= 18 ? true : false;
    const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

    console.log(canVote);
    console.log(canVote2);


    const auth = true;

    // Shorter ternary version
    const redirect = auth
        ? (alert('Welcome to the dashbaord'), '/dashboard')
        : (alert('Access Denied'), '/login');

    console.log(redirect);

    auth ? console.log('Welcome to the dashboard') : null;
    auth && console.log('Welcome to the dashoard');

}


