import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/7SPLJRS/Black-Simple-Sports-Equipment-Big-Sale-Email-Header-You-Tube-Thumbnail-1.png"
            alt="Sports Equipment"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 lg:pl-20 flex flex-col justify-center items-center text-white text-left p-6 md:p-12">
            <div className="bg-white font-thin md:w-8/12 text-center italic text-black text-sm md:text-xl font-opensans p-2 mt-4">
              <p>Explore top-tier sports equipment that enhances your performance.</p>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl lg:w-9/12 mx-auto text-center font-bold text-white font-raleway">
              Premium Sports Gear
            </h2>
            <div className="bg-white md:w-8/12 font-opensans text-center font-bold text-black text-sm md:text-lg p-4 mt-4">
              <p>
                From fitness machines to outdoor gear, we have everything you need to perform at your best.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/7SPLJRS/Black-Simple-Sports-Equipment-Big-Sale-Email-Header-You-Tube-Thumbnail-1.png"
            alt="Best Deals"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 lg:pl-20 flex flex-col justify-center items-center text-black text-left p-6 md:p-12">
            <div className="bg-white font-thin md:w-8/12 text-center italic text-black text-sm md:text-xl font-opensans p-2 mt-4">
              <p>Get unbeatable prices on top-quality sports gear. Hurry, limited-time offers!</p>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl lg:w-9/12 mx-auto text-center font-bold text-white font-raleway">
              Best Gear Deals
            </h2>
            <div className="bg-white md:w-8/12 font-opensans text-center font-bold text-black text-sm md:text-lg p-4 mt-4">
              <p>
                Browse exclusive discounts on the best equipment and gear up for success at a fraction of the cost.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/7SPLJRS/Black-Simple-Sports-Equipment-Big-Sale-Email-Header-You-Tube-Thumbnail-1.png"
            alt="Featured Equipment"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 lg:pl-20 flex flex-col justify-center items-center bg-transparent text-white text-left p-6 md:p-12">
            <div className="bg-white font-thin md:w-8/12 text-center italic text-black text-sm md:text-xl font-opensans p-2 mt-4">
              <p>Discover our handpicked selection of premium equipment.</p>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl lg:w-9/12 mx-auto text-center font-bold text-white font-raleway">
              Featured Gear
            </h2>
            <div className="bg-white md:w-8/12 font-opensans text-center font-bold text-black text-sm md:text-lg p-4 mt-4">
              <p>
                From cutting-edge machines to reliable outdoor equipment, check out our best products for all types of sports enthusiasts.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
