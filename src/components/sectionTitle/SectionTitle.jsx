import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
   return (
      <div className='mx-auto text-center md:w-4/12 my-12'>
         <p className='text-yellow-700 mb-2'>--- {heading} ---</p>
         <h3 className='text-3xl uppercase border-y-4 py-4'>{subHeading}</h3>
      </div>
   );
};

export default SectionTitle;