import { useState } from "react";

function Discount()
{
    const actualPrice = 9999;
    const[price,setPrice]=useState(0);
    const[discount,setDiscount]=useState(0);
const applyDiscount = (discountValue) => {
    setDiscount(discountValue);

    if (discountValue === 10)
         {
        setPrice(actualPrice * 0.1);
    } 
    else if (discountValue === 20)
         {
        setPrice(actualPrice * 0.2);
    }
     else if (discountValue === 30) 
        {
        setPrice(actualPrice * 0.3);
    } 
    else 
    {
        setPrice(actualPrice*0);
    }
    
};
const GetPrice = actualPrice -discount;

return (
    <>
        <h1>Original Price is: ${actualPrice}</h1>
        <h2>Discounted Price: ${price.toFixed(2)}</h2>
        <h3>Price After Discount:${GetPrice}</h3>
        <h3>Applied Discount: {discount}%</h3>
        <h2>Click a buttons to apply a discount</h2>
        <button onClick={() => applyDiscount(10)}>Apply 10% Discount</button>
        <button onClick={() => applyDiscount(20)}>Apply 20% Discount</button>
        <button onClick={() => applyDiscount(30)}>Apply 30% Discount</button>
        <button onClick={() => applyDiscount(0)}>Reset price</button>
    </>
);
}
export default Discount;