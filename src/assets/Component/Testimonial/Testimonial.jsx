import React, { useRef, useEffect, useState } from 'react';
import client1 from "../../../Gallery/client1.jpeg";
import client2 from "../../../Gallery/client2.webp";
import client3 from "../../../Gallery/client3.jpeg";
import client4 from "../../../Gallery/client4.webp";
import client5 from "../../../Gallery/client5.webp";
import video from "../../../Gallery/video.mp4";

export default function Testimonial() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Observer to detect when the video is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isPlaying) {
                        videoRef.current.play();
                        setIsPlaying(true);
                    } else if (!entry.isIntersecting && isPlaying) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                    }
                });
            },
            {
                threshold: 0.5, // 50% of the video needs to be in view to start playing
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [isPlaying]);

    const testimonials = [
        {
            name: "Sophia Martinez",
            quote:
                "“The [signature dish] was absolutely amazing! Perfectly balanced flavors, beautifully presented.",
            image: client1,
        },
        {
            name: "James Anderson",
            quote:
                "“Hands down, some of the best food I've had recently! The freshness of the ingredients.",
            image: client2,
        },
        {
            name: "Elena Rossi",
            quote:
                "“The [signature dish] was absolutely amazing! Perfectly balanced flavors, beautifully presented.",
            image: client3,
        },
        {
            name: "Michael Brown",
            quote:
                "“Hands down, some of the best food I've had recently! The freshness of the ingredients",
            image: client4,
        },
        {
            name: "Emma Watson",
            quote:
                "“The [signature dish] was absolutely amazing! Perfectly balanced flavors, beautifully presented.",
            image: client5,
        },
    ];

    const [index, setIndex] = useState(0);

    const prevTestimonial = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const nextTestimonial = () => {
        setIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section id="/Testimonial" className=" relative py-24  relative bg-orange-100">
           
            <div className="relative">
                <video
                    ref={videoRef}
                    src={video}
                    className="w-full h-[500px]"
                    muted
                    loop
                    preload="auto"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className='absolute inset-0 flex justify-center items-center'>
                <div className=" max-w-sm mx-auto relative px-5 lg:px-0">
                    {/* Testimonial Card */}
                    <div className="bg-orange-100 shadow-2xl text-center rounded-lg">
                        <div className="relative h-32 p-2 bg-orange-200 rounded-lg">
                            <div className="relative">
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>
                                <div className="h-0.5 w-full border-2 border-dashed border-orange-300 my-1.5"></div>

                            </div>
                            <div className="absolute top-24 inset-0 flex justify-center items-center">
                                <img
                                    src={testimonials[index].image}
                                    alt={`Investor ${testimonials[index].name}`}
                                    className="w-28 h-28 rounded-full mx-auto border-4 border-orange-500"
                                />
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-gray-700 italic px-4">
                                "{testimonials[index].quote}"
                            </p>
                            <h3 className="mt-3 font-semibold text-orange-600">
                                {testimonials[index].name}
                            </h3>
                        </div>

                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-amber-600 transition"
                    >
                        ❮
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-amber-600 transition"
                    >
                        ❯
                    </button>
                </div>
            </div>
        </section>
    );
}