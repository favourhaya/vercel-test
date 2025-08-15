import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import inter from "./images/Inter.png";
import ibls from "./images/Ibls.jpg";
import glendo from "./images/Glendo.png";
import lympics from "./images/Climbalympics.png";

import FadeInOnScroll from "./Fadein";
const skills = [
  { name: "Climbalympics", image: lympics },
  { name: "Inter-Varsities 2025", image: inter },
  { name: "Cork Ibls 2024", image: ibls },
  { name: "Glendolough 2024", image: glendo },
];

const LoopingSlider = () => {
  return (
    <div>
       
       <hr className=" hidden md:flex aboslute mt-150" />

    <div className="hidden md:flex w-full  justify-center mt-35 py-20">
        

<FadeInOnScroll>
      <div className="w-full">

        <div className="max-w-6xl">
        <h2 className="text-[48px] lg:text-[90px] font-bold text-[#363636] text-center mb-16 leading-tight">
            
          Trips and <span className="text-[#E37345]">Events</span>
          
        </h2>
   

        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        
          modules={[Pagination, Autoplay, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 60 },
          }}
          className="w-full"
        >
          {skills.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden flex flex-col shadow-md bg-[#F0F0F0] border-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[230px] object-cover"
                />
                <div className="flex flex-col items-center p-6">
                  <h3 className="text-2xl font-semibold text-[#363636] mb-4">
                    {item.name}
                  </h3>
                  <button className="bg-[#2C84AC] px-6 py-2 rounded-lg hover:bg-[#d86230] transition-all">
                    <a
                      href="#"
                      className="text-white text-lg font-medium"
                    >
                      View Gallery
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      </FadeInOnScroll>
      </div>



        <div className="block md:hidden absolute w-[100%] top-1200 ">
          <FadeInOnScroll>
            <hr className="mt-15" />
        <h1 className="text-[530%] leading-20 text-[#363636] font-bold mt-25 text-center">Trips and <span className="text-[#E37345]"> Events</span></h1>
        
        <div className="mt-20 ml-3 ">
                <Swiper
          loop={true}

          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          
        
          modules={[Pagination, Autoplay, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 60 },
          }}
          className="w-5/6"
        >
          {skills.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden flex flex-col shadow-md bg-[#F0F0F0] border-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[230px] object-cover"
                />
                <div className="flex flex-col items-center p-6">
                  <h3 className="text-2xl font-semibold text-[#363636] mb-4">
                    {item.name}
                  </h3>
                  <button className="bg-[#2C84AC] px-6 py-2 rounded-lg hover:bg-[#d86230] transition-all">
                    <a
                      href="#"
                      className="text-white text-lg font-medium"
                    >
                      View Gallery
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        </FadeInOnScroll>
        </div>

    </div>
  );
};


export default LoopingSlider;
