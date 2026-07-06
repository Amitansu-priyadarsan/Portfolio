import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import ashutosh from '../../assets/testimonials/ashutosh-agrawal.jpg';
import sanjoy from '../../assets/testimonials/sanjoy-mohanty.jpg';
import './Testimonial.scss';

const testimonials = [
  {
    name: 'Ashutosh Agrawal',
    company: 'Jindal Stainless Limited',
    imgurl: ashutosh,
    feedback:
      'I am pleased to commend Amitansu for his outstanding performance during his internship with our JSL group. He consistently demonstrated both hard work and smart work, I highly recommend Amitansu for future opportunities.',
  },
  {
    name: 'Sanjoy Kumar Mohanty',
    company: 'Jindal Stainless Steel',
    imgurl: sanjoy,
    feedback:
      'Hard working and Responsible. His dedication and problem-solving skills make him a valuable asset to any team.',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="head-text">Testimonials <span>Section</span></h2>
      <div className="app__testimonial-item app__flex">
        <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
        <div className="app__testimonial-content">
          <p className="p-text">{testimonials[currentIndex].feedback}</p>
          <div>
            <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
            <h5 className="p-text">{testimonials[currentIndex].company}</h5>
          </div>
        </div>
      </div>

      <div className="app__testimonial-btns app__flex">
        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
          <HiChevronLeft />
        </div>

        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
          <HiChevronRight />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
