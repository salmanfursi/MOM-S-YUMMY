import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "./../../../assets/home/slide1.jpg";
import slide2 from "./../../../assets/home/slide2.jpg";
import slide3 from "./../../../assets/home/slide3.jpg";
import slide4 from "./../../../assets/home/slide4.jpg";
import slide5 from "./../../../assets/home/slide5.jpg";

import SectionTitle from '../../../components/sectionTitle/SectionTitle';



const Category = () => {
   return (
      <section>
         <SectionTitle
         heading={"From 10.00am to 10.00pm"}
         subHeading={"Order online"}
         ></SectionTitle>

      <Swiper
         slidesPerView={4}
         spaceBetween={30}
         pagination={{
            clickable: true,
         }}
         modules={[Pagination]}
         className="mySwiper pb-12 mb-10"
      >
         <SwiperSlide>
            <img src={slide1} />
            <h1 className='text-4xl text-white uppercase text-center -mt-12'>salad</h1>
         </SwiperSlide>
         <SwiperSlide>
            <img src={slide2} />
            <h1 className='text-4xl text-white uppercase text-center -mt-12'>pizza</h1>
         </SwiperSlide>
         <SwiperSlide>
            <img src={slide3} />
            <h1 className='text-4xl text-white uppercase text-center -mt-12'>soup</h1>
         </SwiperSlide>
         <SwiperSlide>
            <img src={slide4} />
            <h1 className='text-4xl text-white uppercase text-center -mt-12'>desert</h1>
         </SwiperSlide>
         <SwiperSlide>
            <img src={slide5} />
            <h1 className='text-4xl text-white uppercase text-center -mt-12'>salad</h1>
         </SwiperSlide>

      </Swiper>
      </section>
   );
};

export default Category;