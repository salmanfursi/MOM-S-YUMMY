
import React, { useState, useEffect } from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import './OrderTab.css'

// SwiperCore.use(['pagination']);

//ekhane item ta destructure kora hoyeche 
const OrderTab = ({ item }) => {
  const cardsPerPage = 6; // Number of cards per page
  const [pages, setPages] = useState([]);

  // Divide the item data into pages
  useEffect(() => {
    if (item) {
// ekhane condition diya amra newpages ber korsi math ceil kore item.length er sate cardsPerPage divide kore number of page mane page sonka ber korechi
      const numPages = Math.ceil(item.length / cardsPerPage);
// then ei Array.from({ length: numPages } built in method er maddome bolsi built in ekhane array.form tho er maddome bolsi tumi numpage er lengthdiya ekta array banao oi method array bana arki ar ai array function diya 0 index er sate 1 jog korse arki (_,index) => index + 1); 
      const newPages = Array.from({ length: numPages }, (_,index) => index + 1);
      console.log(newPages,"page er number check");
      setPages(newPages);
    }
  }, [item]);


  return (
    <div className='h-full '>
      {/* ei pagination swiper js theke ansi othoba reactawsome component theke tarpor gpt diya meramot korsi */}
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        }}
        className="mySwiper"
        modules={[Pagination]}
      >
        {/* ekhane pages mane page sonke to page sonkare mao kore page ber kose mane single page ber korse like 1 number page bero kore oitare cardperpage mane 6 diya gon korse ar page asilo 1 ar ek re -1 kore 0 baniye dise jate kore slice start hote pare 0 theke ar sehs hote pare page mane 1 ar gon cardpage mane 6 mane 6 ta card dekhabe erokom babe 2nd page e slice start hobe 6 theke ar shesh hobe 12 theke jar moddome 6 taii page dekhabe thats it */}
        {pages.map((page) => (
          // pages shodo page nirnoier jonno tarpor item er theke slice kore data dekhai niche deko
          <SwiperSlide key={page}>
            <div className='grid md:grid-cols-3 gap-8 mt-6'>
              {
              item
              // ekhane page onosare item er theke slice kore data dekhacce like paybe pizza tab e 13 ta thokon eita item re slice kore ei teqnique e 6 ta kore dekacce pore maybe 6 ta na howai 1 dekaise like skip ar limet er kajtai kore dise simply eite thanks.
                .slice((page - 1) * cardsPerPage, page * cardsPerPage)
                .map((dish) => (
                  <FoodCard key={dish._id} data={dish}></FoodCard>
                ))
              }
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default OrderTab;
