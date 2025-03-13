import React, { useRef, useEffect, useState } from 'react';
import video from "../../../Gallery/Hero.mp4";

export default function Reservation() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        people: 1,
        date: "",
        time: "",
        requests: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const videoRef = useRef(null); // Reference for the video element
    const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
  
    // Observer to detect when the video is in view
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isPlaying) {
              videoRef.current.play(); // Play the video when in view
              setIsPlaying(true);
            } else if (!entry.isIntersecting && isPlaying) {
              videoRef.current.pause(); // Pause the video when not in view
              setIsPlaying(false);
            }
          });
        },
        {
          threshold: 0.5, // 50% of the video needs to be in view to start playing
        }
      );
  
      if (videoRef.current) {
        observer.observe(videoRef.current); // Observe the video element
      }
  
      // Cleanup observer on component unmount
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, [isPlaying]);

    return (
        <div id='/Reservation' className="lg:flex justify-center items-center min-h-screen bg-orange-100 p-6 relative gap-5">
            <div className="flex justify-center items-center mb-5 lg:mb-0">
               <div className="relative">
                               <video
                                   ref={videoRef}
                                   src={video}
                                   className="w-full h-[550px] lg:h-[750px] rounded-md"
                                   muted
                                   loop
                                   preload="auto"
                                   style={{ objectFit: "cover" }}
                               />
                           </div>
            </div>
            <div className="w-full max-w-lg border rounded-lg shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
                    Reserve Your Seat
                </h2>

                <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-orange-300 bg-orange-100 rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-orange-300 bg-orange-100 rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="example@mail.com"
                        />
                    </div>

                
                    {/* Number of People */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Number of People</label>
                        <input
                            type="number"
                            name="people"
                            min="1"
                            max="20"
                            value={formData.people}
                            onChange={handleChange}
                            className="w-full border border-orange-300 bg-orange-100 rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    {/* Date Selection */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Reservation Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border border-orange-300 bg-orange-100 rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    {/* Time Selection */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Reservation Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full border border-orange-300 bg-orange-100 rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    {/* Special Requests */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Special Requests (Optional)</label>
                        <textarea
                            name="requests"
                            value={formData.requests}
                            onChange={handleChange}
                            className="w-full border border-orange-300 bg-orange-100 rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="E.g. Vegetarian meal, high chair for a baby"
                        />
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            className="h-5 w-5 text-orange-500 border-orange-300 bg-orange-100 rounded focus:ring-orange-500"
                        />
                        <label className="ml-2 text-gray-700">
                            I agree to the <a href="#" className="text-orange-500 underline">terms and conditions</a>.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-300 shadow-md"
                    >
                        Reserve Now
                    </button>
                </form>
            </div>
        </div>
    );
} 