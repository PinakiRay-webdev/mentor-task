import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from "react-icons/ci";
import Ratings from './Ratings';
import { data } from './CardsData';
const ImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className='w-[80vw] h-[65vh] px-5' >
      <Slider {...settings} >
        {data.map((Element , id)=>{
            return(
                <div key={id} className='border w-[400px] h-[500px] relative' >
                <img className='w-full h-full object-cover rounded-2xl' src={Element.picture} alt="" />
                <div id='card-data' className='w-full h-full absolute bottom-0 rounded-2xl' >
                    <div className='absolute bottom-0 px-2 py-3 w-full' >
                    <header className='flex justify-between items-center my-2' >
                        <h1 className='text-white text-xl' >{Element.place}</h1>
                        <p className='text-white text-xl' ><CiHeart /></p>
                    </header>
                    <p className='text-slate-300 text-sm font-light' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum accusamus dignissimos sunt eius, esse vero facere! Nobis illum consequuntur.</p>
                    <Ratings stars = {Element.rating}/>
                    </div>
                </div>
              </div>
            )
        })}
      </Slider>
    </div>
  )
}

export default ImageSlider
