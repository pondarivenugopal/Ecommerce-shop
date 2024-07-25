import React from "react";
import { useState } from "react";
import Img1 from "../../assets/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../../CartContext.jsx";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 4.1,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.3,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.8,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState([]);
  

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems([...addedItems, item.id]);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="">
        {/* Header section */}
        <div className="text-center mb-10 mx-auto">
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold text-pink-500 underline"
          >
            PRODUCTS
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500 mt-3">
            Shopping products require personal selling and advertising and are
            located in fewer outlets (compared to convenience products) and
            selectively distributed.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="zoom-in-down"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(data)}
                    className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded-md mt-2"
                    disabled={addedItems.includes(data.id)}
                  >
                  {addedItems.includes(data.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
