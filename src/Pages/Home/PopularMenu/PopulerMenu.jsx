import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopulerMenu = () => {
   const [menu]=useMenu()
   const popularItem = menu?.filter(item => item.category === "popular")
   console.log(popularItem,'menu popular');
  

   return (
      <section className='mb-12'>
         <SectionTitle
            heading={'From Our menu'}
            subHeading={'Populer Items'}
         ></SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
        { popularItem &&
            popularItem.map(data => <MenuItem
               key={data._id}
               data={data}
            ></MenuItem>)
         }
        </div>
        <div className='flex justify-center my-8'>
        <button className="btn hover:bg-gray-900 hover:text-white border-b-2 border-b-black font-sans uppercase text-black">view full menu</button>
        </div>
      </section>
   );
};

export default PopulerMenu;