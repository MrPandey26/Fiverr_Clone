import React from 'react';
import "./Slide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "../../data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import CatCard from '../catCard/CatCard';

const Slide = () => {
    return (
        <div className='slide'>
            <div className="container">
                <h1>Popular services</h1>
                <Swiper
                    slidesPerView={5}
                    // pagination={{
                    //     type: "fraction",
                    // }}
                    navigation={true} // Enable arrow navigation
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {cards.map(card => (
                        <SwiperSlide key={card.id}>
                            <CatCard item={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slide;
