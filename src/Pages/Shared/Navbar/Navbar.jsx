import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
	const {user,logOut}=useContext(AuthContext);
 
	const handleLogOut=()=>{
		logOut()
		.then(()=>{})
		.then(error =>{
			console.log(error);
		})
	}

const navOption = <div className='flex flex-col md:flex-row md:gap-4'>
	<a><Link to='/'>Home</Link></a>
	<a><Link to='/menu'>Our Menu</Link></a>
	<a><Link to='/order/salad'>Order</Link></a>
	<a><Link to='/secret'>Secret</Link></a>

	{
		user ? 
		<button onClick={handleLogOut}>Log Out</button>
		 : 
		 <a><Link to='/login'>Login</Link></a> 
	}
</div>

	return (
		<>
			<div className="navbar bg-black text-white fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 text-lg font-bold">
							{navOption}
						</ul>
					</div>
					<a>
						<h1 className='border-black font-bold font-serif text-white rounded-e-lg border-b-0 border-2 px-2'>Mom's Yummy</h1>
						<p className='border-black font-serif text-center  text-white rounded-s-lg  border-t-3 border-2 px-2 pb-1'>spice to honey</p>
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 text-lg font-bold">
						{navOption}
					</ul>
				</div>
				<div className="navbar-end">
					<li className="btn">Button</li>
				</div>
			</div>
		</>
	);
};

export default Navbar;