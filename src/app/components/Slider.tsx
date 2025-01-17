'use client'
import Image from "next/image";
import React, {useState} from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id:2,
    title: "we deliver your order wherever you are in Delhi",
    image: "/slide2.png",
  },
  {
    id:3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  setTimeout(() =>{
    setCurrentSlide((prev) => (prev + 1) % data.length);
  }, 4000);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="flex flex-col items-center justify-center gap-8 text-red-500 font-bold flex-1">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl md:p-10 xl:text-7xl">{data[currentSlide].title}</h1>
        <button className="bg-red-500 text-white py-4 px-8 ">Order Now</button>
      </div>
      <div className="w-full relative flex-1 ">
        <Image src={data[currentSlide].image} alt="slide" fill className="object-cover" />
      </div>
    </div>
  );
}

export default Slider;
