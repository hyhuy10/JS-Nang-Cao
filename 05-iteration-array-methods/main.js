{
    // -iteration-array-methods - phương thức lặp mảng
    // 01 - for - loop
    for (let i = 0; i <= 10; i++) {
        if (i === 7) {
            console.log('7 is my lucky number');
        }
        else {
            console.log('Number ' + i);
        }
    }
    for (let i = 1; i <= 10; i++) {
        console.log('Number ' + i);
        for (let j = 1; j <= 5; j++) {
            console.log(`${i} * ${j}= ${i * j}`);
        }
    }
    // loop
    const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];
    for (let i = 0; i < names.length; i++) {

        if (names[i] === 'John') {
            console.log(names[i] + 'is the best');
        }
        else {
            console.log(names[i]);
        }
    }
}
{

    //02-break-continue
    for (let i = 0; i <= 20; i++) {
        if (i === 15) {
            console.log('Breaking');
            break;
        }
        console.log(i);
    }
    // continue
    for (let i = 0; i <= 20; i++) {
        if (i === 13) {
            console.log('Skipping 13...');
            continue;
        }
        console.log(i);
    }
    for (let i = 0; i <= 20; i++) {
        if (i === 13) {
            console.log('Skipping 13...');
            continue;
        }
        console.log(i);
    }
}


{
    // while - do - while
    let i = 0;
    while (i <= 20) {
        console.log('Number ' + i);
        i++;
    }
    const arr = [10, 20, 30, 40, 50];
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
    while (i <= 5) {
        console.log('Number ' + i);
        let j = 1;
        while (j <= 5) {
            console.log(`${j} * ${j}= ${j * i}`);
            j++;
        }
        i++;
    }
    do {
        console.log('Number ' + i);
        i++;
    } while (i <= 20);

}
{
    let i = 0;
    //for loop
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('Hà Huy');
        }
        else if (i % 3 === 0) {
            console.log('Hải Yến');
        }
        else {
            console.log(i);
        }
    }

    // while loop
    let j = 1;
    while (j <= 100) {
        if (j % 15 === 0) {
            console.log('chia hết cho 15');
        }
        else if (j % 3 === 0) {
            console.log('Chia hết cho 3');
        }
        else if (j % 5 === 0) {
            console.log('Chia hết cho 5');
        }
        else {
            console.log(j);
        }
        j++;
    }
}
{
    console.log('for- of- loop');

    // for - of - loop
    const items = ['book', 'table', 'chair', 'kite'];
    const users = [
        {
            name: 'Hà Huy',
        },
        {
            name: 'Hải Yến',
        },
        {
            name: 'Rashford',
        }
    ];

    //
    for (const item of items) {
        console.log(item);
    }
    //
    for (const user of users) {
        console.log(user);
    }
    //loop over maps
    const map = new Map();
    map.set('name', 'John');
    map.set('age', 30);
    map.set('quê quán', 'Hà Nội');
    for (const [key, value] of map) {
        console.log(key, value);
    }



}

{

    // for - in - loop
    const colorObj = {
        color1: 'red',
        color2: 'blue',
        color3: 'orange',
        color4: 'green',
    };
    for (const key in colorObj) {
        console.log(key, colorObj[key]);
    }
    // loop - array
    const colorArr = ['red', 'green', 'blue', 'yellow'];
    for (const key in colorArr) {
        console.log(colorArr[key]);
    }
}

{

    console.log('------------------------07-forEach---------------------');
    //for Each
    const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

    //proto()
    console.log(socials.__proto__);

    // long form
    socials.forEach(function (item) {
        console.log(item);
    });

    //short form
    socials.forEach(
        (item) => console.log(item)
    );

    socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));
    socials.forEach((item, index) => console.log(`${index} - ${item}`));

    function logSocials(social) {
        console.log(social);
    }
    socials.forEach(logSocials);

    const socialObjs = [
        { name: 'Twitter', url: 'https://twitter.com' },
        { name: 'Facebook', url: 'https://facebook.com' },
        { name: 'Linkedin', url: 'https://linkedin.com' },
        { name: 'Instagram', url: 'https://instagram.com' },
    ];
    socialObjs.forEach((item) => console.log(item.url));
}

{
    // filter: xét đk của 1 item trong mảng và trả về cả mảng

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const evenNumbers = numbers.filter(function (number) {
        return number % 2 === 0;
    });

    //short version
    const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

    //
    const evenNumbers3 = [];
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    });

    const companies = [
        { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
        { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
        { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
        { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
        { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
        { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
        { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
        { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
        { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
    ];

    let companiesAfterFilter = companies.filter((hue, i) => i % 2 === 0);
    const retail = companies.filter((company) => company.category === 'Finance');
    console.log(retail);

    // vd 
    const test = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
    console.log(test);
    const longCompanies = companies.filter(
        (company) => company.end - company.start >= 10
    );

}

{
    //map
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const doubleNumbers = numbers.map((number) => number * 2);
    console.log(doubleNumbers);

    //forEach
    const test2 = [];
    numbers.forEach((number) => {
        test2.push(number * 2);
    });
    const companies = [
        { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
        { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
        { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
        { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
        { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
        { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
        { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
        { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
        { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
    ];

    const companyNames = companies.map((company) => company.name);
    console.log(companyNames);

    const companyInfo = companies.map((company) => {
        const { name, category } = company
        return {
            name,
            category
        }
    }
    );
    console.log(companyInfo);

    // Create an array of objects with the name and the length of each company in years
    const companyYears = companies.map((company) => {
        return {
            name: company.name,
            length: company.end - company.start + ' years',
        };
    });

    // Chain map methods
    const squareAndDouble = numbers
        .map((number) => Math.sqrt(number))
        .map((sqrt) => sqrt * 2);

    const squareAndDouble2 = numbers
        .map(function (number) {
            return Math.sqrt(number);
        })
        .map(function (sqrt) {
            return sqrt * 2;
        })
        .map(function (sqrtDoubled) {
            return sqrtDoubled * 3;
        });

    // Chaining different methods
    const evenDouble = numbers
        .filter((number) => number % 2 === 0)
        .map((number) => number * 2);

    console.log(evenDouble);


}

{
    // -----------reduce------------------
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Add all numbers together
    const sum = numbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

    // Using a for loop
    const sum3 = () => {
        let acc = 0;
        for (const cur of numbers) {
            acc += cur;
        }
        return acc;
    };

    // Shopping cart example (objects)
    const cart = [
        { id: 1, name: 'Product 1', price: 130 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 },
    ];

    const total = cart.reduce(function (acc, product) {
        return acc + product.price;
    }, 0);

    console.log(total);

}

{
    // Challenge 1
    const people = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            phone: '111-111-1111',
            age: 30,
        },
        {
            firstName: 'Jane',
            lastName: 'Poe',
            email: 'jane@gmail.com',
            phone: '222-222-2222',
            age: 25,
        },
        {
            firstName: 'Bob',
            lastName: 'Foe',
            email: 'bob@gmail.com',
            phone: '333-333-3333',
            age: 45,
        },
        {
            firstName: 'Sara',
            lastName: 'Soe',
            email: 'Sara@gmail.com',
            phone: '444-444-4444',
            age: 19,
        },
        {
            firstName: 'Jose',
            lastName: 'Koe',
            email: 'jose@gmail.com',
            phone: '555-555-5555',
            age: 23,
        },
    ];


    const youngPeople = people
        .filter((person) => person.age <= 25)
        .map((person) => ({
            name: person.firstName + ' ' + person.lastName,
            email: person.email,
        }));

    console.log(youngPeople);

    // Challenge 2
    const numbers = [2, -30, 50, 20, -12, -9, 7];

    const positiveSum = numbers
        .filter((number) => number > 0)
        .reduce((acc, cur) => acc + cur, 0);

    console.log(positiveSum);

    // Challenge 3
    const words = ['coder', 'programmer', 'developer'];

    const cWords = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1, word.length);
    });

    console.log(cWords);

}