import React from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div className="addtocart" key={index}>
              <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} />
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <div className="cartbtn">
                <div className="cartbtn1">
                    <button>Change Date</button>
                </div>
                <div className="cartbtn2">
                    <button>Cancel Booking</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
