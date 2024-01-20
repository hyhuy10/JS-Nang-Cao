// -------------------------------01-console---------------------------

{

    // console.log
    console.log(100);
    // Log string
    console.log('Hello mọi người');
    // log multiple values
    console.log(20, 'Hello', true);

    const x = 100;
    console.log(x);

    console.error('Alert');
    console.warn('Warning');

    console.table({ name: 'Brad', email: 'brand@gagmil.com' });

    // group console commands
    console.group('simple');

    const styles = 'padding: 10px; background-color: white; color: green';
    console.log('%cHello World', styles); // %c + string : nhận css từ 1 biến khác riêng biệt
}

// 02: comments - shortcuts
/* */

//--------------------------------------03: variables------------------
{

    // var, let, const
    let firstName = 'John';
    const lastName = 'Doe';
    let age = 30;
    // const ko thay đổi được giá trị sau khi khai báo
    // let có giá trị có thể thay đổi được

    // array
    const arr = [1, 2, 3, 4];

    arr.push(5);  // push: thêm phần tử vào cuối mảng
    console.log(arr);

    const person = {
        name: 'Brad',
    };
    // có thể thay đổi giá trị của từng thuộc tính trong object 
    //và thêm thuộc tính mới bằng cú pháp sau
    person.name = 'John';
    person.email = 'phue@gmail.com';
    console.log(person);


    // khai báo nhiều biến 1 lúc
    const d = 10, e = 20, f = 30;
    console.log(d);
}

//--------------------------------04-data-types------------------------
{

    // các kiểu data type:
    // string, boolean, number, underfined,null, symbol, bigInt,reference Types

    // ví dụ symbol
    const id = Symbol('id');
    console.log(id);

    // ví dụ bigInt
    const n = 23784856234758634257n;
    console.log(n);

    // ví dụ reference Types
    const test = [1, 2, 3, 4];
    const person1 = { name: 'Brad' };
    function sayHello() {
        console.log('Hello');
    }
    const output = sayHello;  // tạo biến mới có giá trị bằng 1 function.
    console.log(output, typeof output);
}

//------------------------------------ 05-stack-heap---------------------------
{
    const name = 'Huy';
    const age = 19;
    const person = {
        name: 'Ha Huy',
        age: 19,
    };

    let newName = name;
    newName = "Rashford";

    let newPerson = person;
    newPerson.name = "Ha Duc Huy";

    console.log(name, newName);
    console.log(person, newPerson);

}
//---------------------------------- 06-type-conversion-------------------

{

    let amount = 'hello';

    // convert string to number
    amount = parseInt(amount);
    console.log(typeof amount); // type number

    // amount = +amount;
    console.log(amount);
    amount = Number(amount);
    console.log(typeof amount); // type number

    // convert number to string
    amount = amount.toString();
    console.log(typeof amount); // type string

    //convert string to decimal: 
    amount = parseFloat(amount);
    console.log(typeof amount); // type number

    // convert number to boolean
    amount = Boolean(amount);
    console.log(typeof amount); // type boolean

    //way to get NaN: not a number
    console.log(Math.sqrt(-1));  // giá trị tuyệt đối
    console.log(1 + NaN);
    console.log(undefined + undefined);
    console.log('foo' / 3);
}

// --------------------------------- 07-operators-----------------------
{
    // Toán tử số học
    // + , - , * , / , %: chia lấy dư
    let x = 'Hello' + ' ' + 'World'; // cộng chuỗi
    console.log(x);

    x = 2 ** 3; // 2 mũ 3
    console.log(x);

    //x=x-1;
    // x--;
    // operators
    x **= 5;
    // => x= x**5 ( x mũ 5)
    x /= 5
    //=> x=x/5 (x= x/5)

    // comparison operators
    // equal to 
    // x = 2 == '2';

    // not equal
    // x = 2 !== '2'; : !== so sánh cả type dữ liệu

    //x=2 !='2'; 

    // so sánh: > , < , <= , >=

}
//--------------------------------08-type-coercion--------------------
{
    let x;
    x = 5 + '5';
    console.log(x); // x= 55
    x = 5 + Number('5');
    console.log(x); // x=10

    x = "";

    x = 5 * '5';
    console.log(x);

    // null is coerced to 0 as it is a 'falsy' value
    x = 5 + null;
    x = Number(null);
    x = Number(true);
    x = Number(false);
    console.log(x);

    // true is coerced to a 1
    x = 5 + true;
    x = 5 + false;
    x = 5 + undefined;
    console.log(x, typeof x);
}

// --------------------------------- 09-strings-----------------------------
{
    let x;
    const name = 'Hue';
    const age = 20;
    // cách 1
    x = "Hello, my name is " + name + "and I am " + age + ' years old';
    console.log(x);
    // cách 2 
    x = `Hello, my name is ${name} and I am ${age} years old`;
    console.log(x);

    // String Properties and Methods : thuộc tính string và phương thức
    const s = new String('Hello World');
    console.log(s); // strong Hello World
    x = typeof s;
    console.log(x); // x = object
    x = s.length;
    console.log(x); // x= 11; (độ dài của chuỗi string s)

    x = s[0]; // kí tự thứ 0 trong chuỗi s.
    console.log(x);  // x= H

    //// Shows the prototype of the string object. Shows the properties and methods
    //=> // Hiển thị nguyên mẫu của đối tượng chuỗi. Hiển thị các thuộc tính và phương thức
    x = s.__proto__;
    console.log(x);

    // Chuyển chuỗi về kiểu chữ in hoa, in thường
    x = s.toUpperCase(); // chuyển về chuỗi in hoa
    x = s.toLowerCase(); // chuyển về chuỗi in thường
    console.log(x);

    // lấy kí tự nhất định vị trí thứ index
    // charAt(index)
    x = s.charAt(0); // s: Hello World
    console.log(x); // x= H

    // trả về vị trí index cần tìm cho 1 giá trị nhất định
    x = s.indexOf('e'); // vị trí thứ 1 trong chuỗi : Hello World
    console.log(x); // x= 1

    // tìm kiếm 1 chuỗi theo vị trí đc chỉ định
    // substring()
    console.log('test');
    x = s.substring(2, 7); // lấy string từ vị trí thứ 2 đến vị trí thứ 6
    console.log(x); // x= llo W
    x = s.substring(2); // lấy string từ vị trí thứ 2 đến vị trí cuối cùng
    console.log(x); // x= llo World

    // cắt chuỗi đc chỉ định và giữ lại chuỗi còn lại
    // slice()
    x = s.slice(-11, -6);
    console.log(x); // Hello
    // H e l l o     W o l r d
    // 0 1 2 3 4  5  6 7 8 9 10

    // trim(): xóa khoảng trắng ở đầu và cuối chuỗi
    x = '                        Kim Hue';
    x = x.trim();
    console.log(x); // x= Kim Hue

    // replace('chuỗi muốn cắt đi', 'chuỗi mới thay thế vào chuỗi đã cắt' )
    x = s.replace('World', 'John');
    console.log(x);

    // includes(): trả về true nếu tìm thấy chuỗi, false nếu ko tìm thấy chuỗi
    x = s.includes('Hell');
    console.log(x);  // x= true
    x = s.includes('Hue');
    console.log(x);  // x= false

    // trả về giá trị của biến
    x = s.valueOf();
    console.log(x);  // x= Hello World

    // split(): trả về 1 mảng chuỗi
    x = s.split('');
    console.log(x);  // x= ['H','e','l','l','o', ' ', 'W', 'o','l','r','d'];
}

// ----------------------------10-capitalize-challenge-----------------

{
    const myString = 'developer';
    let myNewString;
    // solution 1: 
    myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
    console.log(myNewString);
    // solution 2: 
    myNewString = myString[0].toUpperCase() + myString.substring(1);
    console.log(myNewString);
    // solution 3: 
    myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
    console.log(myNewString);

}
//----------------------------- 11-numbers----------------------------------
{
    let x;
    const num = new Number(5);
    console.log(num);

    //toString():returns a string representation of the number
    x = num.toString();
    console.log(x);  // x=5
    x = num.toString().length;
    console.log(x);  // x=1

    // toFixed(): trả về số thập phân : ví dụ : 2.00
    x = num.toFixed(2);
    console.log(x);  // x=2.00

    // toPrecision(index): trả về độ dài của hàng thập phân = index -1
    // ví dụ: x= 6; x.toPrecision(5)= 6.0000
    x = num.toPrecision(5);
    console.log(x);  // 5.0000

    // toExponential(): chuyển đổi một số thành ký hiệu số mũ và trả về giá trị của nó dưới dạng chuỗi
    x = num.toExponential(2);
    console.log(x); // x= 5.00 + 0

    // toLocaleString():trả về một chuỗi biểu diễn số, sử dụng ngôn ngữ hiện tại
    x = num.toLocaleString('en-US');
    x = num.toLocaleString('en-US');
    console.log(x); // x= 5

    // valueOf - lấy giá trị
    x = num.valueOf();
    console.log(x); // x=5;

    //The Number object itself has some properties and methods
    // Largest and smallest possible number
    x = Number.MAX_VALUE;
    console.log(x);
    x = Number.MIN_VALUE;
    console.log(x);
}
//-------------------------------- 12-math-object-------------------
{
    let x;
    // sqrt: căn bậc 2
    x = Math.sqrt(9);
    console.log(x);  // x= 3

    //abs: giá trị tuyệt đối
    x = Math.abs(-5);
    console.log(x);  // x=5

    // ceil: làm tròn lên số nguyên tiếp theo lớn hơn
    x = Math.ceil(4.2);
    console.log(x);  // x=5

    // floor: làm tròn lên số nguyên tiếp theo lớn hơn
    x = Math.ceil(4.5);
    console.log(x);  // x=5

    // pow("value", "số mũ"): tính số mũ
    x = Math.pow(2, 3);
    console.log(x);  // x= 2 mũ 3 = 8

    // min: tìm min value
    x = Math.min(2, 1, 5);
    console.log(x);  // x= 1

    // max: tìm max value
    x = Math.max(34, 2, 345);
    console.log(x);  // x=345

    // radom(): random số thập phân ngẫu nhiên trong khoảng từ 0 đến 1
    x = Math.random();
    console.log(x);  //

    // radom số thập phân ngẫu nhiên từ 1 đến 100
    x = Math.floor(Math.random() * 100 + 1);
    console.log(x);

}
//------------------------------- 13-number-challenge-----------------------
{
    const x = Math.floor(Math.random() * 100 + 1);
    const y = Math.floor(Math.random() * 50 + 1);

    const sum = x + y;
    const sumOutput = `${x} + ${y} = ${sum}`;
    console.log(sumOutput);

    const diff = x - y;
    const diffOutput = `${x} - ${y} = ${diff}`;
    console.log(diffOutput);

    const prod = x * y;
    const prodOutput = `${x} * ${y} = ${prod}`;
    console.log(prodOutput);

    const quot = x / y;
    const quotOutput = `${x} / ${y} = ${quot}`;
    console.log(quotOutput);

    // chia lấy dư
    const rm = x % y;
    const rmOutput = `${x} % ${y} = ${rm}`;
    console.log(rmOutput);
}
//----------------------------- 14-dates-and-times---------------------------
{
    let d;
    d = new Date();  // lấy thời gian hiện tại
    console.log(d);
    d = d.toString();   // chuyển thành string
    console.log(d);

    d = new Date(2023, 0, 10, 12, 30, 0); // lấy ngày giờ cụ thể 
    console.log(d);

    // Pass in a string: truyền vào 1 chuỗi
    d = new Date('2021-07-10T12:30:00');
    d = new Date('07/10/2021 12:30:00');
    d = new Date('2022-07-10');
    d = new Date('07-10-2022');

    // lấy thời gian hiện tại
    d = Date.now();

    // lấy thời gian cụ thể
    d = new Date();
    console.log(d);

    d = d.getTime();
    console.log(d);

    d = d.valueOf();
    console.log(d);

    // Create a date from a timestamp: 
    d = new Date(1666962049745);

    // chuyển đổi từ mili giây sang giây
    d = Math.floor(Date.now() / 1000);
    console.log(d);
}

//------------------------------ 15-date-object-methods-------------------------
{
    console.log('15-date-object-method');
    let x;
    let d = new Date();  // thời gian hiện tại
    console.log(d);
    // Date Methods

    x = d.toString();
    console.log(x);

    x = d.getTime();
    console.log(x);

    x = d.valueOf();
    console.log(x);

    // lấy giá trị năm hiện tại
    x = d.getFullYear();
    console.log(x);  // x= 2024

    x = d.getMonth();
    x = d.getMonth() + 1;
    console.log(x);  // x= 1

    // lấy ngày hiện tại
    x = d.getDate();
    console.log(x);

    // ???? 
    x = d.getDay();
    console.log(x);

    // lấy giờ hiện tại ko lấy phút giây
    x = d.getHours();
    console.log(x);

    // lấy phút hiện tại
    x = d.getMinutes();

    // lấy giây hiện tại
    x = d.getSeconds();

    // lấy mili giây hiện tại
    x = d.getMilliseconds();

    x = `${d.getFullYear()}-${d.getMonth() + 1}- ${d.getDate()}`;
    console.log(x);  //  x= 2024-1-13

    // Intl.DateTimeFormat API (locale specific)
    // format: month/ date / year
    x = Intl.DateTimeFormat('en-US').format(d);
    console.log(x);  //  x= 1/13/2024

    // format: date/month/year
    x = Intl.DateTimeFormat('en-GB').format(d);
    console.log(x);  //  x= 13/01/2024

    // format: date/month/year
    x = Intl.DateTimeFormat('default').format(d);
    console.log(x);  //   x= 13/1/2024

    //
    x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
    console.log(x);  //   x= Tháng 1

    x = d.toLocaleString('default', { month: 'short' });
    console.log(x);  //   x= Thg 1

    x = d.toLocaleString('default', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'America/New_York',
    });
    console.log(x);  // x= lúc 23:53:56 Thứ Sáu, 12 tháng 1, 2024














}
























