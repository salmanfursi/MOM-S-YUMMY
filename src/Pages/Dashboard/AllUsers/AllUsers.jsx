import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import { FaUserShield } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllUsers = () => {
  const [axiosSecure]=useAxiosSecure()//axiosSecure er sate get dite hobe
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const result = await axiosSecure.get('/users')
      return result.data
    }
  })

  const handleDelete = () => {
    // console.log("deleted successfully");
  }

  const handleMakeAdmin = user => {
    // console.log(`handle make admin updata   ${user._id}`);
   fetch(`http://localhost:5000/users/admin/${user._id}`,{
    method:"PATCH"
   })
   .then(res=>res.json())
   .then(data => {
    // console.log(data);
    if(data.modifiedCount){
      refetch()
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${user.name} is Admin Now`,
        showConfirmButton: false,
        timer: 1500
      });
    }
   })
  }

  return (
    <div className='w-3/4 mx-auto'>
      <Helmet>
        <title>M-Y | All User</title>
      </Helmet>
      <h3 className="text-3xl my-4 font-semibold">Total User: {users?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Rule</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Name: {user.name}</td>
                <td>Email: {user.email}</td>

                <td>
                  <button onClick={() => handleMakeAdmin(user)} className='btn btn-ghost bg-orange-600 text-white'>
                    {
                      user.role == 'admin' ?
                        'admin' :
                        <FaUserShield></FaUserShield>
                    }
                  </button>
                </td>

                <td>
                  <button onClick={() => handleDelete(index + 1)} className='btn btn-ghost bg-red-600 text-white'>
                    <FaTrashAlt />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

