import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from "swiper/react"
import "swiper/css"
import "./Residencies.css"
import data from "../../assets/slider.json"
import { sliderSetting } from '../../assets/common.js'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
const Residencies = () => {
  return (
    
      <section className='r-wrapper'>
         <div className='paddings innerWidth flexCenter r-container'>
            <div className=' flexColStart r-head '>
                  <span className='orangeText'>Best Choices</span>
                  <span className='primaryText'>Popular Residency</span>
            </div>
            <Swiper {...sliderSetting}>
                
            <SliderButton/>
            {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt="home"/>
                <span className='secondaryText r-price'>
                  <span style={{color:"orange"}}>$</span><span>{card.price}</span>
                </span>
                 <span className='primaryText'>{card.name}</span>
                 <span className='secondaryText'>{card.detail}</span>


              </div>
            </SwiperSlide>
          ))}
         
            </Swiper>
         </div>

      </section>
   
  )
}

export default Residencies

const SliderButton = ()=>{
    const swiper= useSwiper();
    return (
        <div  className='slider_buttons'>
           <button className='button-slider' onClick={() =>swiper.slidePrev()}>
           <FaArrowLeftLong size={25} />
           </button>
           <button className='button-slider' onClick={() =>swiper.slideNext()}><FaArrowRightLong size={25} /></button>
        </div>
    )
}