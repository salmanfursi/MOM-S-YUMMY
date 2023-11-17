import React from 'react';
import { Parallax } from 'react-parallax';


const Cover = ({ img, title, heading }) => {
   return (

      <Parallax
         blur={{ min: -50, max: 50 }}
         bgImage={img}
         bgStyle={Cover}
         strength={-200}

      >
         <div className=" hero md:min-h-[600px] " >

            <div className="hero-overlay bg-opacity-30"></div>

            <div className="hero-content text-center text-neutral-content">

               <div className="md:max-w-4xl md:py-16  bg-black bg-opacity-60  text-white">
                  <h1 className="mb-5 text-6xl px-10 font-bold uppercase">{title}</h1>
                  <p className="mb-5 md:px-60">{heading}</p>
               </div>
            </div>

         </div>
      </Parallax>



   );
};

export default Cover;