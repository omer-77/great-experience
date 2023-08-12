import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full  bg-gray-100 rounded-lg mb-8">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Image
            src="/images/main-slider/01.png"
            className="w-full aspect-video rounded-lg"
            alt=""
            width={500}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/main-slider/02.png"
            className="w-full aspect-video rounded-lg"
            alt=""
            width={500}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/main-slider/03.png"
            className="w-full aspect-video rounded-lg"
            alt=""
            width={500}
            height={100}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
