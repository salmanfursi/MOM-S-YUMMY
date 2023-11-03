import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg';

const Featured = () => {
   return (
      <div>
         <SectionTitle
            heading='Check It Out'
            subHeading='FEATURED ITEM'>
         </SectionTitle>
         <div>
            <div>
               <img src={img} alt="" />
            </div>
            <div>
               <p>March 20, 2023</p>
               <p className='uppercase'>WHERE CAN I GET SOME?</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            </div>
         </div>

      </div>
   );
};

export default Featured;