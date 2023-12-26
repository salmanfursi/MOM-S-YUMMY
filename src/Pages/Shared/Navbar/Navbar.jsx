import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaCartShopping } from "react-icons/fa6";
import useCart from '../../../Hooks/useCart';
import useAuth from '../../../Hooks/useAuth';
import useAdmin from '../../../Hooks/useAdmin';

const Navbar = () => {
	const { user, logOut } = useAuth()
	const [isAdmin] = useAdmin()
	const [, cart] = useCart() //ekhane he koma , deya hoise eita use cart er return [refetch, cart]; return er mongodb er parameter er moto eita o position hisebe access kora lage like first e refecth tho first er jaiga khali then 2nd e cart disi thats it arekta kotha jekono nam diya destructure kora jabe but position khyal rakhte hobe.

	//console.log(cart," 11  navbar er daat a");
	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.then(error => {
				//console.log(error);
			})
	}

	const navOption = <div className=' flex flex-col md:flex-row'>
		<li><Link to='/'>Home</Link></li>
		<li><Link to='/menu'>Our Menu</Link></li>
		<li><Link to='/order/salad'>Order</Link></li>
		<li><Link to={isAdmin ? 'dashboard/adminhome' : 'dashboard/userhome'}>Dashboard</Link></li>
		<li>
			<Link to='dashboard/mycart'>
				<FaCartShopping />
				<div className="badge badge-secondary">+{cart?.length || 0}</div>
			</Link>
		</li>

		{
			user ? <>
				{/* <li><span className='text-red-700'>{user.displayName}</span></li> */}
				<li><button onClick={handleLogOut}>Log Out</button></li>
			</>
				:
				<li><Link to='/login'>Login</Link></li>
		}
	</div>

	return (
		<>
			<div className="navbar bg-black text-white fixed z-10 bg-opacity-30   mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] shadow bg-black rounded-box w-52 text-lg font-bold">
							{navOption}
						</ul>
					</div>
					<a>
						<h1 className='border-black font-bold font-serif text-white rounded-e-lg border-b-0 border-2 px-2'>Mom's Yummy</h1>
						<p className='border-black font-serif text-center  text-white rounded-s-lg  border-t-3 border-2 px-2 pb-1'>spice to honey</p>
					</a>
				</div>
				<div className="navbar-end">

					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1 text-lg font-bold">
							{navOption}
						</ul>
					</div>

					<div className="avatar">
						<div className="w-12 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
							<img src='https://img.freepik.com/free-photo/portrait-school-girl-doing-phone-call-park_23-2148199231.jpg' alt='tharin' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;