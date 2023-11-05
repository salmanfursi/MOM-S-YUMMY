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
<div className=" hero min-h-[600px] " >

<div className="hero-overlay bg-opacity-30"></div>

<div className="hero-content text-center text-neutral-content">

   <div className="max-w-4xl py-16  bg-black bg-opacity-60  text-white">
      <h1 className="mb-5 text-6xl px-10 font-bold uppercase">{title}</h1>
      <p className="mb-5 px-10">{heading}</p>
   </div>
</div>

</div>      
  </Parallax>

      

   );
};

export default Cover;