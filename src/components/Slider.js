import React from "react";
import { Link, NavLink } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

 function Slider() {
    return (
        <section className="slider">
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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="SwiperSlide">
                    {/* <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="image slide 1"
                    /> */}
                    <div className="inner-slider">
                                        <div 
                        className="bg-cover bg-center w-full hero-cover h-auto text-white py-24 px-10 object-fill bg-[url(https://imageio.forbes.com/specials-images/imageserve/932635636/Woman-preparing-muffins-at-home/960x0.jpg?format=jpg&width=960)]" 
         >
       <div className="md:w-1/2">
        {/* <p className="font-bold text-sm uppercase">Services</p> */}
        {/* <p className="text-3xl font-bold">Hello world</p> */}
        <p className="text-2xl mb-10 leading-none">Find Wonderful Recipes With Us</p>
        <Link to={'/all-recipes'}
         className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Explore</Link>
        </div>  
    </div>
                    </div>
        
                </SwiperSlide>
                <SwiperSlide>
                <div 
                        className="bg-cover bg-center w-full hero-cover h-auto text-white py-24 px-10 object-fill bg-[url(https://dmrqkbkq8el9i.cloudfront.net/Pictures/1024x536/2/3/0/166230_homebakinggetty_603199.jpg)]" 
         >
       <div className="md:w-1/2">
        {/* <p className="font-bold text-sm uppercase"></p> */}
        <p className="text-3xl font-bold">Free Recipes</p>
        <p className="text-2xl mb-10 leading-none">Enjoy Baking While Learning New Recipes With Us</p>
        <Link to='/all-recipes'
         className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Explore More</Link>
        </div>  
    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div 
                        className="bg-cover bg-center w-full  hero-cover h-auto text-white py-24 px-10 object-fill bg-[url(https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/rkbltvavimi1vq3zkjw8.jpg)]" 
         >
       <div className="md:w-1/2">
       <p className="text-3xl font-bold">Free Recipes</p>
        <p className="text-2xl mb-10 leading-none">Enjoy Baking While Learning New Recipes With Us</p>
        <Link to='/all-recipes'
         className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Explore More</Link>
         </div>  
    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
export default Slider