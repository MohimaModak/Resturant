import React from 'react'
import dessert1 from "../../../Gallery/dessert1.webp"
import dessert2 from "../../../Gallery/dessert2.jpeg"
import dessert3 from "../../../Gallery/dessert3.jpeg"
import dessert4 from "../../../Gallery/dessert4.webp"
import dessert5 from "../../../Gallery/dessert5.webp"
import dessert6 from "../../../Gallery/dessert6.webp"
import Food from "../../../Gallery/Food1.png"

import "./Highlights.css"
export default function Highlights() {

    const menuItems = [
        { image: dessert1, title: "Pasta", price: "$45" },
        { image: dessert2, title: "Spaghetti", price: "$40" },
        { image: dessert3, title: "Burger", price: "$99" },
        { image: dessert4, title: "Chicken", price: "$105" },
        { image: dessert5, title: "Fruit", price: "$25" },
        { image: dessert6, title: "Rice", price: "$25" },
        { image: dessert1, title: "Pasta", price: "$45" },
        { image: dessert2, title: "Spaghetti", price: "$40" },
        
    ];

    return (
        <div className="py-24 px-10 bg-orange-100">
            <div>
                <h1 className="text-orange-500 text-4xl lg:text-5xl text-center font-bold food pb-16 hidden md:block"><span className='flex justify-center items-center'><strong><img src={Food} className='w-14 md:w-16 lg:w-28' /></strong> <span>ur Signature Dishes</span></span> </h1>
                <h1 className="text-orange-500 text-4xl lg:text-5xl text-center font-bold food pb-16 block md:hidden">Our Signature Dishes</h1>
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
    )
}
