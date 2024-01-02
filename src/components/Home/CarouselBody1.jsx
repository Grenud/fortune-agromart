import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation} from 'swiper/modules';


const CarouselBody1 = ({data}) => {

  return (
    <>
      <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            }}

          style={{
              "--swiper-theme-color": "#00d563"
          }}

          navigation={true}
          
          pagination={{
            "clickable": true
          }}

          modules={[Pagination, Navigation]}

          className='w-[90vw]'
      >
          { data.map(e => {
          return (
            <SwiperSlide key={e.id}>
            <div className="w-[29em] m-auto">
              <div className='flex flex-col justify-center items-center mx-[10px] px-[25px] py-[20px]'>
                <h1 className='text-[23px] text-center font-semibold'>{e.title}</h1>
                <p className='text-center text-[#424242] text-[16px] my-[30px]'>{e.subText1}</p>
                <h1 className='text-primary text-[28px] font-bold'>{e.amount}</h1>
                <p className='text-center text-[#424242] text-[16px] my-[15px]'>{e.subText2}</p>
              </div>
            </div>
            </SwiperSlide>
          )
      })}
      </Swiper>
    </>
  )
}

export default CarouselBody1