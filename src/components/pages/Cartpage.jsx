import React from "react";
import { useCart } from "../../../CartContext";
import { FaStar } from "react-icons/fa";

const CartPage = () => {
  const { cart,removeFromCart } = useCart();

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="container mx-auto p-4">
      {cart.length === 0 ? (
        <p className="text-4xl text-slate-800/70 drop-shadow-[10px_35px_35px_rgba(100,100,100)] mt-20 text-center">Your cart is empty.</p>
      ) : (
        <ul>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div data-aos="flip-up">
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="h-[200px] w-[150px] object-cover rounded-md"
                    />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-customcolor hover:bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default CartPage;
