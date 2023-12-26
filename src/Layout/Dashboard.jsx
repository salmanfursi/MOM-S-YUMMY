import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendarAlt,FaUtensils, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { MdBook, MdReviews } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { FaBook, FaBowlFood, FaUsers } from 'react-icons/fa6';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const [, cart] = useCart()
  //TODO:load data from server to have dynamic isadmin based on data

  // const isAdmin = true;
  const [isAdmin]=useAdmin()
  // console.log('16 line dashboard admin role',isAdmin);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">

        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet />


      </div>
      
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-6 w-80 min-h-full bg-[#D1A054]">
          {/* Sidebar content here */}

          {
            isAdmin ?
              <>
                <li><NavLink to='/dashboard/adminhome'><FaHome /> Admin Home</NavLink></li>
                <li><NavLink to='/dashboard/additam'><FaUtensils /> Add an Items</NavLink></li>
                <li><NavLink to='/dashboard/manageitems'><FaWallet /> Manage Items</NavLink></li>

                <li><NavLink to='/dashboard/review'><FaBook />  Manage Bookings </NavLink></li>
                <li><NavLink to='/dashboard/allusers'><FaUsers /> All User</NavLink></li>
              </>
              :
              <>
                <li><NavLink to='/dashboard/userhome'><FaHome /> User Home</NavLink></li>
                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
                <li><NavLink to='/dashboard/payment'><FaWallet /> Payment History</NavLink></li>

                <li>
                  <NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart
                    <span className="badge badge-secondary">+{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>

                <li><NavLink to='/dashboard/review'><MdReviews />  Add Review</NavLink></li>
                <li><NavLink to='/dashboard/booking'><MdBook /> My Booking</NavLink></li>
              </>
          }

          <div className='divider'></div>
          <li><NavLink to='/'><FaHome /> Home </NavLink></li>
          <li><NavLink to='/menu'><TiThMenu />Our Menu</NavLink></li>
          <li><NavLink to='order/salad' ><FaBowlFood />  Order Food</NavLink></li>


        </ul>
      </div>
    </div>
  );
};

export default Dashboard;