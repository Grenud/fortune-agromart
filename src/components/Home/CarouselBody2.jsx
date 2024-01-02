import React from 'react'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation} from 'swiper/modules';

const CarouselBody2 = ({data}) => {
  return (
    <>
      <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 10,
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

          className='w-[90vw] h-[25em]'
      >
          { data.map(e => {
          return (
            <SwiperSlide key={e.id}>
            <Link to={e.link}>
                <div className="w-[29em] m-auto hover:bg-[#e7e7e7] rounded-md p-[15px]">
                    <div className='flex justify-center items-center py-[20px]'>
                        <img className='w-[88%] h-[14em]' src={e.img} alt={e.alt} />
                    </div>
                    <h1 className='text-[23px] text-center font-semibold'>{e.title}</h1>
                </div>
            </Link>
            </SwiperSlide>
          )
      })}
      </Swiper>
    </>
  )
}

export default CarouselBody2