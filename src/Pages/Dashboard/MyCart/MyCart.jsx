import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
  //cart er ager koma oi position er jonno age kitu refetch thake thai console e function ase tai positon reke , diye cart disi
  const [refecth, cart] = useCart()

  //how does reduce work reduce use for calculate the sum of separate object prices most likely working like looping
  const total = cart.reduce((sum, item) => item.price + sum, 0)
  //console.log(cart);

  const handlDelete=(item)=>{

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
        fetch(`http://localhost:5000/carts/${item._id}`,{
          method:'delete'
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.deletedCount > 0){
            refecth()
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
    <div className='w-full pl-4'> 
      <Helmet>
        <title>M-Y | My Cart</title>
      </Helmet>

      <div className='uppercase font-bold h-[60px] flex justify-evenly '>
        <h3 className="text-3xl">Total item:{cart.length}  </h3>
        <h3 className="text-3xl">Total price:{total}  </h3>
        <Link to={'/dashboard/payment'}>
        <button className="btn btn-warning btn-sm">pay</button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr  className=''>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) =>
              <tr key={item._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>{item.price}</td>
                <td onClick={()=>handlDelete(item)} className='btn btn-ghost bg-red-600 text-white'>
                  <FaTrashAlt />
                </td>
              </tr>

            )}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default MyCart;