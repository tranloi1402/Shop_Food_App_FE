import React from 'react';
import Slider from 'react-slick';

import imgSlider1 from '../../../../assets/image/slider/slider1.jpg';
import '../../../../assets/styles/_class.scss';

const simpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='pt-header hidden md:block'>
            {/* eslint-disable react/jsx-props-no-spreading */}
            <Slider {...settings}>
                <div className=''>
                    <img className='w-full' src={`${imgSlider1}`} alt='slider1' />
                </div>
                <div>
                    <img className='w-full' src={`${imgSlider1}`} alt='slider1' />
                </div>
                <div>
                    <img className='w-full' src={`${imgSlider1}`} alt='slider1' />
                </div>
                <div>
                    <img className='w-full' src={`${imgSlider1}`} alt='slider1' />
                </div>
            </Slider>
        </div>
    );
};

export default simpleSlider;
