import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//ratings imports
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from 'react-icons/fa';


const Testimonial = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('Reviews.json')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [])
  return (
    <section className='mt-20 mb-14'>
      <SectionTitle heading={'What Our Client Say'} subHeading={'Testimonial'}></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review =>
            <SwiperSlide
              key={review._id
              }>
              <div className='flex flex-col text-center items-center gap-5 mx-8 md:mx-36'>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              <FaQuoteLeft className='text-6xl' />
                
                <p>{review.details}</p>
                <p className='text-2xl text-yellow-500 uppercase'>{review.name}</p>
              </div>
            </SwiperSlide>)
        }
      </Swiper>

    </section>
  );
};

export default Testimonial;