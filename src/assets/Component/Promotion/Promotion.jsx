import React from "react";

export default function Promotion() {
    return (
        <div id="/Promotion" className=" bg-orange-100 flex justify-center items-center p-6">
            <div>
                <div>
                    <h1 className="text-orange-500 text-4xl lg:text-5xl text-center font-bold food pb-16">Special Offers</h1>
                </div>
                <div className="max-w-4xl w-full shadow-lg rounded-lg p-8 border-4 border-dashed border-orange-300">
                    <h2 className="text-3xl font-bold text-gray-600 text-center mb-6">
                        Exclusive Offers
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Offer Card 1 */}
                        <div className="p-5 bg-orange-50 border bg-orange-100 border-2 border-orange-200 border-dashed shadow-sm rounded-lg text-center shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">20% Off Your First Order</h3>
                            <p className="text-gray-700">Use Code <span className="font-bold">WELCOME20</span></p>
                        </div>

                        {/* Offer Card 2 */}
                        <div className="p-5 bg-orange-50 border bg-orange-100 border-2 border-orange-200 border-dashed shadow-sm rounded-lg text-center shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">Weekend Brunch Special</h3>
                            <p className="text-gray-700">$15 per person</p>
                        </div>

                        {/* Offer Card 3 */}
                        <div className="p-5 bg-orange-50 border bg-orange-100 border-2 border-orange-200 border-dashed shadow-sm rounded-lg text-center shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">Happy Hour: 5 PM - 7 PM</h3>
                            <p className="text-gray-700">50% Off Cocktails</p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center items-center">

                        <div className="inline-block bg-orange-400 font-bold text-gray-100 rounded-md  px-4 py-1.5 text-center">
                            <button> Claim Your Offer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



