import React from 'react';
const navOption = <>
   <li><a>Item 1</a></li>
   <li><a>Item 1</a></li>
   <li><a>Item 3</a></li>
</>
const Navbar = () => {
   return (
      <>
         <div className="navbar bg-black text-white fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navOption}
                  </ul>
               </div>
               <a>
                  <h1 className='border-black font-bold font-serif text-black rounded-e-lg border-b-0 bg-orange-600 border-2 px-2'>Mom's Yummy</h1>
                  <p className='border-orange-600 font-serif text-center bg-black text-white rounded-s-lg  border-t-0 border-2 px-2 pb-1'>spice to honey</p>
               </a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navOption}
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn">Button</a>
            </div>
         </div>
      </>
   );
};

export default Navbar;