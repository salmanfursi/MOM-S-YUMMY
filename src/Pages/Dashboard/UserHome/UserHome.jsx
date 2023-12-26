import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BarChart } from 'recharts';

const UserHome = () => {
  // const [data, setData] = useState([]);
  // let dat = new Date()


  // const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth()

  // const { data: stats = {} } = useQuery({
  //   queryKey: ['admin-state'],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/admin-stats`);
  //     // console.log('user stats', res.data);
  //     setData(stats)
  //     return res.data
  //   }

  // })





  return (
    <div className='text-3xl m-4'>
      <h1 className='pb-2 pl-1'>Hi Welcome back, {user.displayName} !</h1>

      <div className="stats shadow">

        <div className="stat bg-gradient-to-r from-cyan-500 to-blue-300">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div className="stat-title font-bold">Ravenue</div>
          <div className="stat-value">$5666</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat  bg-gradient-to-r from-cyan-500 to-blue-300">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div className="stat-title font-bold">Customer</div>
          <div className="stat-value">68</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat  bg-gradient-to-r from-cyan-500 to-blue-300">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
          </div>
          <div className="stat-title font-bold">Items</div>
          <div className="stat-value">98</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat  bg-gradient-to-r from-cyan-500 to-blue-300">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
          </div>
          <div className="stat-title font-bold">Orders</div>
          <div className="stat-value">32</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

      </div>

    </div>
  );
};

export default UserHome;