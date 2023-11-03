import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../infoCard/InfoCard';
import Category from '../Category/Category';
import PopulerMenu from '../PopularMenu/PopulerMenu';
import Number from '../Number/Number';
import ChefRecomand from '../recomend/ChefRecomand';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
   return (
      <div>
       <Banner />
       <Category />
       <InfoCard />
       <PopulerMenu />
       <Number />
       <ChefRecomand />
       <Featured />
       <Testimonial />
      </div>
   );
};

export default Home;