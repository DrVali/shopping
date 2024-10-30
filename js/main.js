cartItems= [{name:"shoes",quantity:2,price:75}, {name: "Hat" ,price:20},{name:"Sokcks",quantity:3}];

const showCalcute = ({name,quantity=1,price=10})=>{
    const result= `name is ${name} and quantity is = ${quantity} and price is = ${price} and cost is = ${price * quantity}`; 
     console.log(result);
}

cartItems.map((cartitem) => {
    showCalcute(cartitem);
});
