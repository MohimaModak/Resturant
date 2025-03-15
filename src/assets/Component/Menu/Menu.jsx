import React from "react";
import menu1 from "../../../Gallery/menu1.jpeg";
import menu2 from "../../../Gallery/menu2.webp";
import menu3 from "../../../Gallery/menu3.jpeg";
import menu4 from "../../../Gallery/menu4.jpeg";
import menu5 from "../../../Gallery/menu5.jpeg";
import menu6 from "../../../Gallery/menu6.webp";
import menu7 from "../../../Gallery/menu7.jpeg";
import menu8 from "../../../Gallery/menu8.webp";
// import menu9 from "../../../Gallery/menu9.jpeg";
// import menu10 from "../../../Gallery/menu10.jpeg";
// import menu11 from "../../../Gallery/menu11.jpeg";
import "./Menu.css";
import Food from "../../../Gallery/Food3.png"


const menuItems = [
  { image: menu1, title: "Pasta", price: "$25" },
  { image: menu2, title: "Spaghetti", price: "$15" },
  { image: menu3, title: "Burger", price: "$18" },
  { image: menu4, title: "Chicken", price: "$10" },
  { image: menu5, title: "Fruit", price: "$45" },
  { image: menu6, title: "Rice", price: "$89" },
  { image: menu7, title: "Biriyani", price: "$75" },
  { image: menu8, title: "Egg", price: "$25" },
  // { image: menu9, title: "Burger", price: "$25" },
  // { image: menu10, title: "Cake", price: "$25" },
  // { image: menu11, title: "Birthday Cake", price: "$25" },
];

export default function Menu() {
  return (
    <div id="/Menu" className="py-24 px-10 bg-orange-100">
      <div>
        <h1 className="text-orange-500 text-4xl lg:text-5xl text-center font-bold food pb-16 hidden md:block"><span className='flex justify-center items-center'><strong><img src={Food} className='w-14 md:w-16 lg:w-28' /></strong> <span>ain Dishes</span></span> </h1>
        <h1 className="text-orange-500 text-4xl lg:text-5xl text-center font-bold food pb-16 block md:hidden">Main Dishes</h1>
      </div>
      <div className="flex justify-center items-center text-center font-semibold">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md border-4 border-dashed border-orange-300 "
            >
              <div className="p-2">
                <img
                  src={item.image}
                  className="w-full h-full lg:h-52 rounded-md  block"
                  alt="Menu Item"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-amber-700 to-transparent backdrop-blur-sm text-orange-50 rounded-md  text-center p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <div className='flex justify-center items-center h-full'>
                    <div>
                      <h1 className="text-3xl">{item.title}</h1>
                      <h1 className="my-2.5 text-xl">Price: {item.price}</h1>
                      <div>
                        <button className="bg-orange-300 rounded-full px-4 py-1.5 text-sm w-max text-gray-700">Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
