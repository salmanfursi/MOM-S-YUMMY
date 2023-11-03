import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
   return (
      <div className='featured-item bg-fixed text-white'>
         <div className='bg-black bg-opacity-40 pt-6'>
            <SectionTitle
               heading='Check It Out'
               subHeading='FEATURED ITEM'>
            </SectionTitle>
            <div className='md:flex justify-center items-center pb-20 md:px-36'>
               <div>
                  <img src={img} alt="" />
               </div>
               <div className='md:ml-10'>
                  <p className='text-md'>March 20, 2023</p>
                  <p className='uppercase text-md'>WHERE CAN I GET SOME?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                  <div>
                     <button className="btn btn-ghost hover:bg-gray-900 border-b-2 hover: border-0 hover:border-b-white border-b-white font-sans mt-3 uppercase text-white">Order Now</button>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default Featured;