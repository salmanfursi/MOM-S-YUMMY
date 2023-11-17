import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ item, img, title, heading }) => {

   return (
      <div className=''>
         {title && <Cover img={img} title={title} heading={heading} />}
         <div className='grid md:grid-cols-2 gap-6 mt-8 '>

            {
               item?.map(data => <MenuItem
                  key={data?._id}
                  data={data}
               ></MenuItem>)
            }
         </div>
         { title && <Link to={`/order/${title}`}> 
            <button className="btn btn-ghost hover:bg-gray-900 border-b-2 hover: border-0 hover:border-b-white border-b-black font-sans mt-3 uppercase text-black hover:text-white">Order Now</button>
         </Link>}
      </div>
   );
};

export default MenuCategory;