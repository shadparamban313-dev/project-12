var customer={
    name:"ajith",
    age:29,
    cart:["Laptop", "Mouse", "Keyboard"],
    price: [50000, 800, 1500],
};

console.log(customer);
customer.cart.push("headphones")
customer.cart.pop()
customer.price.push(2000)
customer.price.pop()
customer.cart.push("monitor","webcam")
customer.price.push(12000,3000)
var tol=(customer.price[0]+customer.price[1]+customer.price[2]+customer.price[3]+customer.price[4]);
console.log(customer.name);
console.log(customer.age);
console.log(customer.cart);
console.log(tol);
console.log(tol>50000);
console.log(customer.cart.length>5);
console.log(customer.cart.length);











