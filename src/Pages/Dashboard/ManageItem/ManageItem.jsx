import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageItem = () => {
  const [menu, loading, refetch] = useMenu()
  const [axiosSecure] = useAxiosSecure()

  const handlDelete = (item) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`, {
          method: 'delete'
        })
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })

      }
    });

  }


  return (
    <div className='w-full '>
      <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up'}></SectionTitle>
      {loading ? loading : ''}
      <div className="overflow-x-auto">
        <table className="table mx-4">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              menu.map((item, index) => <tr key={item._id}>
                <td>
                  <div>
                    {
                      index + 1
                    }
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.category}
                </td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td onClick={() => handlDelete(item)} className='btn btn-ghost bg-red-600 text-white'>
                  <FaTrashAlt />
                </td>
              </tr>)
            }


          </tbody>


        </table>
      </div>

    </div>
  );
};

export default ManageItem;