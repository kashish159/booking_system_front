import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import flight from '../assets/images/flights.jpg'
import taxi from '../assets/images/taxi.jpg'
import food from '../assets/images/food.jpg'
import trident from '../assets/images/trident.jpg'
import paris from '../assets/images/paris.jpg';
import melbourne from '../assets/images/melbourne.jpg';
import seoul from '../assets/images/seoul.jpg';
import london from '../assets/images/london.jpg';
import amsterdam from '../assets/images/amsterdam.jpg';
import india from '../assets/images/india.jpg';
import madrid from '../assets/images/madrid.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewsLetter = () => {
    const settings = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1500,
        swipeToSlide:true,
        autoplaySpeed:3000,
        slidesToShow:3,
      };
    
      return (
        <div>
            <div className="Main--2_custom ">
                <h1 className="text-3xl font-bold section__subtitle">Offers</h1>
                <h3 className="text-xl font-bold pb-4">Deals and special offers for you</h3>
            </div>
            <div className="Main-3">
                <div className="slide-container">
                <Slider {...settings}>
                    <div className="card">
                    <div className="card-image">
                        <img src={flight} alt="Flight" className="card-img" />
                        <h2 className="name">30% off on flights to special destinations!</h2>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-image">
                        <img src={taxi} alt="Taxi" className="card-img" />
                        <h2 className="name">Upto 15kms off on your first ride!</h2>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-image">
                        <img src={food} alt="Food" className="card-img" />
                        <h2 className="name">Free meals in hotels upto Rs 3000 !</h2>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-image">
                        <img src={trident} alt="Trident" className="card-img" />
                        <h2 className="name">Upto 30% savings on trident hotels!</h2>
                    </div>
                    </div>
                    {/* Add more slides here */}
                </Slider>
                </div>
            </div>
            <div className='Main--2_custom'>
                <h1 className='text-3xl font-bold section__subtitle'>Explore the world</h1>
                <h3 className='text-md font-bold pb-4 pt-1'>These popular destinations have a lot to offer</h3>
            </div>
            <div className='Main-3'>
                <div className="slide-container">
                        <Slider {...settings}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={paris} alt="Paris" className="card-img" />
                                    <h2 className="name">Paris</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <img src={melbourne} alt="Melbourne" className="card-img" />
                                    <h2 className="name text-2xl m-2">Melbourne</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <img src={seoul} alt="Seoul" className="card-img" />
                                    <h2 className="name text-2xl m-2">Seoul</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <img src={london} alt="London" className="card-img" />
                                    <h2 className="name text-2xl m-2">London</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <img src={amsterdam} alt="Amsterdam" className="card-img" />
                                    <h2 className="name text-2xl m-2">Amsterdam</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <img src={india} alt="India" className="card-img" />
                                    <h2 className="name text-2xl m-2">India</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <img src={madrid} alt="Madrid" className="card-img" />
                                    <h2 className="name text-2xl m-2">Madrid</h2>
                                </div>
                            </div>
                            {/* Add more slides here */}
                        </Slider>
                </div>
                </div>
                </div>
      );
}

export default NewsLetter