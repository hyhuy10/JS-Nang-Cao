//----------------------------- SECTION 9------------------------------------
// ----------------------VIDEO 103: CẤU TRÚC MẢNG   ------------------------
{
    const array = [2, 3, 4];
    const a = array[0];
    const b = array[1];
    const c = array[2];
    const [x, y, z] = array;
    console.log(x, y, z);
    console.log(array);

    const restaurant = {
        name: 'Ha Huy',
        location: ' Ha Noi',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        startMenu: ['Focacia', 'Bruschetta', 'Garlic', 'Bread', 'Capress Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
        order: function (starterIndex, mainIndex) {
            return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
        },
        openingHours: {
            thu: {
                open: 12,
                close: 22,
            },
            fri: {
                open: 11,
                close: 23,
            },
            sat: {
                open: 0,
                close: 24,
            },
        },

    };
    // const [first, second]= restaurant.categories; // first = Italian , second = Pizzeria
    const [first, , second] = restaurant.categories; // first = Italian , second = Vegetarian
    console.log(first, second);

    // đổi giá trị cho nhau
    let [main, , secondary] = restaurant.categories; // main = Italian , secondary = Vegetarian
    console.log(main, secondary);
    // let temp = main;
    // main = secondary;
    // secondary = temp;
    // console.log(main, secondary);

    // đổi giá trị cho nhau trong mảng sử dụng cấu trúc hủy
    [main, secondary] = [secondary, main];
    console.log(main, secondary); // main = vegetarian, second= Italian;

    // dùng hàm trả về 1 mảng và hủy luôn giá trị của biến (nhận 2 giá trị trả về từ 1 hàm)
    // console.log(restaurant.order(2, 0));
    restaurant.order(2, 0);
    const [starter, mainCourse] = restaurant.order(2, 0);
    console.log(starter, mainCourse);

    // mảng lồng nhau
    const nested = [2, 4, [5, 6]];
    const [i, , j] = nested;  // chỉ lấy ra phần tử thứ 0 và thứ 2 trong mảng, bỏ qua phần tử ở giữa
    console.log(i, j);  // i = 2 , j= [5,6]
    // lấy hết các phần tử trong mảng lồng mảng riêng lẻ
    const [t, , [k, h]] = nested;
    console.log(t, k, h); // t = 2 , k= 5 , h=6

    // default values array
    // let [p, q, r] = [8, 9]; // p=8 , q=9 , r= undefind
    // console.log(p, q, r);
    // có thể gán giá trị mặc định cho phần tử trong mảng
    const [p = 1, q = 1, r = 1] = [8, 9];  // p=8, q=9 , r=1
    // => value được định nghĩa sau cùng sẽ đc chọn
    console.log(p, q, r);
}

// -----------------------VIDEO 105: CẤU TRÚC ĐỐI TƯỢNG -----------------------
{

    const restaurant = {
        name: 'Ha Huy',
        location: ' Ha Noi',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        startMenu: ['Focacia', 'Bruschetta', 'Garlic', 'Bread', 'Capress Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
        order: function (starterIndex, mainIndex) {
            return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
        },
        openingHours: {
            thu: {
                open: 12,
                close: 22,
            },
            fri: {
                open: 11,
                close: 23,
            },
            sat: {
                open: 0,
                close: 24,
            },
        },
        // cách truyền đối số là đối tượng vào hàm
        // cách 1: 
        // orderDelivery: function (obj) {
        //     console.log(obj);
        // }

        // cách 2: 
        orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
            console.log(`Đặt món thành công! ${this.startMenu[starterIndex]} 
            and ${this.mainMenu[mainIndex]}  - Địa chỉ: ${address} at ${time}`);
        }
        // đặt giá trị mặc định cho các thuộc tính trong đối tượng 
        // orderDelivery: function ({ time= '12:00', address='Ha Noi', mainIndex= 0, starterIndex=0 }) {
        //     console.log(`Đặt món thành công! ${this.startMenu[starterIndex]} 
        //     and ${this.mainMenu[mainIndex]}  - Địa chỉ: ${address} at ${time}`);
        // }

    };
    // trong đối tượng :thứ tự các phần tử ko quan trọng 
    //= > ko cần phải viết cú pháp bỏ qua đối tượng ko cần đến
    const { name, openingHours, categories } = restaurant;
    console.log(name, openingHours, categories); // lấy giá trị của biến trong đối tượng restaurant
    // có thể đặt lại tên thuộc tính của đối tượng để cho cú pháp ngắn gọn hơn. 
    const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
    // => các tên thuộc tính của đối tượng đã được thay đổi
    // name => restaurantName, openinhHours=> hours , categories=> tags
    console.log(restaurantName, hours, tags);
    // default values: các biến mặc định
    // thực hành
    const { menu = [], startMenu: starter = [] } = restaurant;
    //=> thuộc tính menu ko tồn tại restaurant nên value menu = value đã đc gán = [],
    //=> thuộc tính startMenu đã đc đổi tên thành starter 
    //và tồn tại value trong restaurant nên giá trị đc gán sau đó [] ko được lấy. 
    console.log(menu, starter);

    // Mutating variables: các biến mặc định
    let a = 111;
    let b = 999;
    const obj = { a: 23, b: 7, c: 14 };
    // thực hiện cấu trúc lại mảng trên theo cú pháp sau: 
    ({ a, b } = obj);
    console.log(a, b); // a= 23 , b=7

    // CÁC ĐỐI TƯỢNG LỒNG NHAU (nested obj)

    // const {fri} = openingHours; // lấy đối tượng fri trong đối tượng openingHours
    // console.log(fri);

    // lấy giá trị của đối tượng ko lấy tên biến 
    // cú pháp sau
    const { fri: { open, close } } = openingHours; // lấy đối tượng fri trong đối tượng openingHours
    console.log(open, close);

    // thay đổi tên biến trong đối tượng: cú pháp sau: 
    // const { fri: { open: o, close: c } } = openingHours; // lấy đối tượng fri trong đối tượng openingHours
    // console.log(o, c);

    // hàm truyền vào đối số là 1 object 
    restaurant.orderDelivery({
        time: '22:30',
        address: 'Via del Sole , 21',
        mainIndex: 2,
        starterIndex: 2,
    })

    // đặt giá trị mặc định cho các thuộc tính trong đối tượng 
    // restaurant.orderDelivery({
    //     starterIndex: 2,
    // })
}
//-------------------------VIDEO 106 : TOÁN TỬ Speard -----------------------

{

    // thêm mảng vào mảng mới
    const arr = [7, 8, 9];
    const badNewArray = [1, 2, arr[0], arr[1], arr[2]]; // thêm các phần tử của mảng arr vào mảng này
    console.log(badNewArray);

    // toán tử để thêm mảng vào mảng
    // cú pháp
    const newArray = [1, 2, 3, ...arr];  // thêm tất cả các phần tử trong mảng arr riêng lẻ vào mảng newArray
    console.log(newArray);

    // dùng toán tử để in các giá trị mảng
    console.log(...newArray); // in ra '1 2 3 7 8 9'
    //console.log(...newArray); = console.log(1,2,3,7,8,9);

    //có thể tạo ra 1 mảng mới chứa giá trị của mảng có sẵn và có thể thêm giá trị mới khác
    const restaurant = {
        name: 'Ha Huy',
        location: ' Ha Noi',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        startMenu: ['Focacia', 'Bruschetta', 'Garlic', 'Bread', 'Capress Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
        orderPaste: function (ing1, ing2, ing3) {
            console.log(`Here is your declicious pasta with ${ing1}, ${ing2},${ing3}`);
        }
    };
    const newMenu = [...restaurant.mainMenu, 'Mi hao hao', 'Gnocci'];
    //=> mảng newMenu sẽ chứa mainMeu trong object restaurant
    console.log(newMenu);

    // Copy array
    const mainMenuCopy = [...restaurant.mainMenu];
    // Join 2 arrays: nối 2 mảng 
    // trong 1 object có nhiều mảng có thể nối các mảng đó lại bằng cú pháp như sau: 
    const menu = [...restaurant.mainMenu, ...restaurant.startMenu];
    console.log(menu);

    // Iterables: arrays, strings, maps, sets => NOT OBject
    const str = 'Jonas';
    const letters = [...str, '', 'S.'];
    console.log(letters);  // letters = j, o , h , n , , s.

    // array
    // const ingredients = [
    //     prompt("Let's make pasta ! Ingredient 1?"),
    //     prompt("Ingredient 2?"),
    //     prompt("Ingregdient 3"),
    // ]
    // console.log(ingredients);

    // // orderPasta
    // restaurant.orderPaste(ingredients[0], ingredients[1], ingredients[2]);
    // restaurant.orderPaste(...ingredients);

    // object
    const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
    console.log(newRestaurant);

    // copy object
    const restaurantCopy = { ...restaurant };
    restaurantCopy.name = "Ha Duc Huy";
    console.log(restaurantCopy.name);
    console.log(restaurant.name);

}

//----------------------------------- VIDEO 107: --------------------------------------
{
    // ... toán tử Spread 
    const arr = [1, 2, ...[3, 4]];
    console.log(...arr);

    const restaurant = {
        name: 'Ha Huy',
        location: ' Ha Noi',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        startMenu: ['Focacia', 'Bruschetta', 'Garlic', 'Bread', 'Capress Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
        order: function (starterIndex, mainIndex) {
            return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
        },
        openingHours: {
            thu: {
                open: 12,
                close: 22,
            },
            fri: {
                open: 11,
                close: 23,
            },
            sat: {
                open: 0,
                close: 24,
            },
        }

    };

    // toán tử gán
    const [a, b, ...others] = [1, 2, 3, 4, 5];
    console.log(a, b, others);

    // sử dụng ... 
    const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.startMenu];
    console.log(pizza, risotto, otherFood);

    // object
    const { sat, ...weekdays } = restaurant.openingHours;
    console.log(weekdays);


    // funtions
    const add = function (...numbers) {  // ...numbers có thể nhận nhiều giá trị ko cần chỉ định trước
        console.log(...numbers);
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        console.log(sum);

    };
    add(2, 3);
    add(5, 6, 7, 2);
    add(8, 2, 5, 4, 4, 5, 3, 2);

    // có thể truyền vào function 1 toán tử spread
    // ví dụ: 
    const x = [23, 5, 7];
    add(...x);

    // restaurant.orderPizza('mushrooms', 'orion', 'olives', 'spinach');
    // restaurant.orderPizza('mushrooms');

}
// ------------------------------ VIDEO 108: SHORT Circuiting (&& and II)-----------------------
{

    // có thể sử dụng bất kì kiểu dữ liệu nào
    // toán tử OR
    // nó sẽ trả về 1 giá trị ko phải boolean . nó sẽ trả về giá trị trung thực đầu tiên đc phát hiện
    // các giá trị sau sẽ ko ddc quan tâm.
    console.log(3 || 'Ha Huy');
    // ví dụ sau: 
    console.log('' || 'Ha Huy');
    console.log(true || 0);
    console.log(undefined || null);
    console.log(undefined || 0 || '' || 'Hello' || 23 || null);
    
}








