import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/cover/Cover';

const MenuCategory = ({ item, img, title, heading }) => {
   console.log(item, 'items ashchenin janar laiga');
   return (
      <div className=''>
         {title && <Cover img={img} title={title} heading={heading} />}
         <div className='grid md:grid-cols-2 gap-6 mt-8 '>

            {
               item?.map(data => <MenuItem
                  key={data._id}
                  data={data}
               ></MenuItem>)
            }
         </div>
      </div>
   );
};

export default MenuCategory;