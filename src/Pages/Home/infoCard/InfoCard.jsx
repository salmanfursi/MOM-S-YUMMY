import React from 'react';
import img1 from './../../../assets/home/chef-service.jpg'
const InfoCard = () => {
   return (

      <div className='bg-fixed mb-16 w-full bg-auto bg-no-repeat bg-center h-[500px] flex justify-center items-center' style={{ backgroundImage: `url(${img1})` }}>
         <div className='bg-white opacity-90 w-9/12 h-4/6 flex justify-center items-center'>
            <div>
               <h1 className='md:text-4xl font-serif text-center md:pb-4'>MOM'S YUMMY</h1>
               <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, <br />libero ccusamus
                  laborum deserunt ratione dolor officiis praesentium! Deserunt<br /> magn aperiam  dolor eius dolore at</p>
            </div>
         </div>
      </div>




   )
};

export default InfoCard;