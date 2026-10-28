// var customer={
//     name:"ajith",
//     age:29,
//     cart:["Laptop", "Mouse", "Keyboard"],
//     price: [50000, 800, 1500],
// };

// console.log(customer);
// customer.cart.push("headphones")
// customer.cart.pop()
// customer.price.push(2000)
// customer.price.pop()
// customer.cart.push("monitor","webcam")
// customer.price.push(12000,3000)
// var tol=(customer.price[0]+customer.price[1]+customer.price[2]+customer.price[3]+customer.price[4]);
// console.log(customer.name);
// console.log(customer.age);
// console.log(customer.cart);
// console.log(tol);
// console.log(tol>50000);
// console.log(customer.cart.length>5);
// console.log(customer.cart.length);


var store={
    name: "Smart Mart",
    products: ["rice", "milk", "sugar", "oil"],
    prices: [60, 30, 45, 150],
    stock: [20, 15, 10, 8],
};

console.log(store);

store.products.push("bread")
store.prices.push(40)
store.stock.push(12)
store.products.pop()
store.prices.pop()
store.stock.pop()
store.products.push("eggs","biscuts")
store.prices.push(70,25)
store.stock.push(30,50)
store.pr
console.log(store.name);
console.log(store.products);
console.log(store.stock);
var rice=store.prices[0]*store.stock[0]
var milk=store.prices[1]*store.stock[1]
var sugar=store.prices[2]*store.stock[2]
var oil=store.prices[3]*store.stock[3]
var eggs=store.prices[4]*store.stock[4]
var biscuts=store.prices[5]*store.stock[5]
var total=(rice+milk+sugar+oil+eggs+biscuts)
console.log(rice);
console.log(milk);
console.log(sugar);
console.log(oil);
console.log(eggs);
console.log(biscuts);
console.log(rice+milk+sugar+oil+eggs+biscuts);
console.log(total>10000);
console.log(store.products.length>5)&&(store.stock.rice>10);
console.log(store.products.length);




















