import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopulerMenu = () => {
   const [menu, setMenu] = useState([])

   useEffect(() => {
      fetch('Menu.json')
         .then(res => res.json())
         .then(data => {
            const popularItem = data.filter(item => item.category === "popular")
            // console.log(popularItem);
            setMenu(popularItem)

         })
   }, [])
   return (
      <section className='mb-12'>
         <SectionTitle
            heading={'From Our menu'}
            subHeading={'Populer Items'}
         ></SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
        {
            menu.map(item => <MenuItem
               key={item._id}
               item={item}
            ></MenuItem>)
         }
        </div>

      </section>
   );
};

export default PopulerMenu;