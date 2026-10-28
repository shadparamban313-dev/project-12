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


// var store={
//     name: "Smart Mart",
//     products: ["rice", "milk", "sugar", "oil"],
//     prices: [60, 30, 45, 150],
//     stock: [20, 15, 10, 8],
// };

// console.log(store);

// store.products.push("bread")
// store.prices.push(40)
// store.stock.push(12)
// store.products.pop()
// store.prices.pop()
// store.stock.pop()
// store.products.push("eggs","biscuts")
// store.prices.push(70,25)
// store.stock.push(30,50)
// store.pr
// console.log(store.name);
// console.log(store.products);
// console.log(store.stock);
// var rice=store.prices[0]*store.stock[0]
// var milk=store.prices[1]*store.stock[1]
// var sugar=store.prices[2]*store.stock[2]
// var oil=store.prices[3]*store.stock[3]
// var eggs=store.prices[4]*store.stock[4]
// var biscuts=store.prices[5]*store.stock[5]
// var total=(rice+milk+sugar+oil+eggs+biscuts)
// console.log(rice);
// console.log(milk);
// console.log(sugar);
// console.log(oil);
// console.log(eggs);
// console.log(biscuts);
// console.log(rice+milk+sugar+oil+eggs+biscuts);
// console.log(total>10000);
// console.log(store.products.length>5)&&(store.stock.rice>10);
// console.log(store.products.length);


// var student={
//     name: "Ajith",
//     age: 21,
//     marks: [85, 72, 90],
// };



// console.log(student);
// student.marks.push(88)
// student.marks.pop()
// student.marks.push(95,60)
// var total=(student.marks[0]+student.marks[1]+student.marks[2]+student.marks[3]+student.marks[4]);
// var avg=(total/5)
// console.log(total);
// console.log(avg);
// var per=(total/500)*100
// console.log(per);
// console.log(avg>=80);
// console.log(student.marks[0]>=40)&&(student.marks[1]>=40);
// console.log(avg>=80||per>80);

// if(avg>=90){
//     console.log("grade A+");
    
// }else if(avg>=80){
//     console.log("grade A");
    
// }else if(avg>=60){
//     console.log("grade B");
    
// }else if(avg>=40){
//     console.log("grade C");
    
// }else{
//     console.log("grade :Failed");
    
// }
// console.log(student.marks.length);
 


var problem={
    name: "Ajith",
    age: 22,
    membership: "Gold",
    products: ["Laptop", "Mouse", "Keyboard"],
    prices: [50000, 800, 1500],
};

console.log(problem);
problem.products.push("headphone")
problem.prices.push(2000)
problem.products.push("webcam")
problem.prices.push(3000)
problem.products.pop()
problem.prices.pop()
problem.products.push("monitor")
problem.prices.push(12000)

console.log(problem.products.length);
var total=(problem.prices[0]+problem.prices[1]+problem.prices[2]+problem.prices[3]+problem.prices[4]) 
console.log(total);
console.log(total/5);

if(total>=50000&&problem.membership=="Gold"){
    console.log("20% discount");
    
}else if(total>=30000)
{
    console.log("10% discount");
    
}else if(total>=10000){
    console.log("5% discount");
    
}else{
    console.log("no discount");
    
}
var dis=(total*20)/100
console.log(dis);

var del=(dis>=40000||problem.membership=="Gold")
console.log("Free delivery eligibility : ", del);

var prm=(problem.membership=="Gold"&&problem.products.length>4)
console.log("Premium gift eligibility:",prm);

var und=(problem.age<25&&dis>30000)
console.log(und);











