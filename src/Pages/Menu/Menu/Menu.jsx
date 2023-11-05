import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/cover/Cover';
import img from './../../../assets/menu/banner3.jpg'
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

import dessert from './../../../assets/menu/dessert-bg.jpeg';
import pizzaimg from './../../../assets/menu/pizza-bg.jpg';
import saladimg from './../../../assets/menu/salad-bg.jpg';
import soupimg from './../../../assets/menu/soup-bg.jpg';
 

const Menu = () => {
   const [menu] = useMenu()
   const Dessert = menu?.filter(item => item.category === "dessert")
   const soup = menu.filter(item => item.category === "soup")
   const pizza = menu.filter(item => item.category === "pizza")
   const salad = menu.filter(item => item.category === "salad")
   const offered = menu?.filter(item => item.category === "offered")

   return (
      <div>
         <Helmet>
            <title className='uppercase'>MY | MENU</title>
         </Helmet>

         <Cover img={img} title='OUR menu' heading='Would you like to try a dish?' />
      {/* main cover */}

         <SectionTitle heading={"Don't miss"} subHeading={"Todays Offer"}></SectionTitle>
         {/* offered menu item */}
         <section className='mb-14'>

            <MenuCategory
               item={offered}
               img={''}
               title={''}
               heading={''}
            ></MenuCategory>
         </section>
         {/* dessert menu item */}
         <section className='mb-16'>
            <MenuCategory
               item={Dessert}
               img={dessert}
               title={'desserts'}
               heading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
         </section>

         <section className='mb-16'>
            <MenuCategory
               item={soup}
               img={soupimg}
               title={'soup'}
               heading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
         </section>

         <section className='mb-16'>
            <MenuCategory
               item={pizza}
               img={pizzaimg}
               title={'pizza'}
               heading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
         </section>

         <section className='mb-16'>
            <MenuCategory
               item={salad}
               img={saladimg}
               title={'salad'}
               heading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
         </section>

      </div>

   );
};

export default Menu;