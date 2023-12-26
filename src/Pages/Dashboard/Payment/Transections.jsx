import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AiOutlineTransaction } from "react-icons/ai";
import Swal from 'sweetalert2';
import useTransection from '../../../Hooks/useTransection';

const Transections = () => {
  const [axiosSecure] = useAxiosSecure()
  const [refetch, transactions] = useTransection()

  console.log(transactions);

  const handleDelete = (id) => {
    axiosSecure.delete(`payments/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "transection data deleted",
            showConfirmButton: false,
            timer: 600
          });
        }
      })
  }

  const handleDeleteAll = () => {
    axiosSecure.delete('/allpayments')
      .then((res) => {
        if (res.data.deletedCount > 0) {
          console.log('delete all');
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'All transaction data deleted',
            showConfirmButton: false,
            timer: 600,
          });
        }
      })

  };





  return (
    <div>
      <div className='flex justify-end'>
        <label htmlFor="my_modal_6" className="btn bg-yellow-500 btn-sm"><AiOutlineTransaction className='text-3xl' />
          Transections<div className="badge badge-secondary badge-lg">+{transactions?.length}</div>
        </label>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          {/* start modal body */}

          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn btn-outline btn-neutral btn-sm  rounded-full">X</label>
          </div>

          <div className="container mx-auto p-4">

            <div className='text-2xl font-bold flex items-center  justify-between mb-2'>

              <div className='flex'><AiOutlineTransaction className='text-3xl font-extrabold' />
                Transections: <p className='text-secondary '>+{transactions?.length} </p></div>

              <div onClick={handleDeleteAll} className='btn btn-sm btn-error'>Remove all</div>

            </div>

            {transactions?.length > 0 ? (
              transactions?.map((transaction) => (


                <div key={transaction?._id} className="bg-orange-400 rounded-lg p-4 mb-6 shadow-md">

                  <div onClick={() => handleDelete(transaction?._id)} className='text-end btn btn-error btn-circle btn-sm'>X</div>

                  <h2 className="text-lg border-b-2 font-medium mb-2">Transaction ID:{transaction?.transectionId}</h2>
                  <p className="mb-1 border-b-2">Email: {transaction?.email}</p>
                  <p className="mb-1 border-b-2">Price: {transaction?.price}</p>
                  <p className="mb-1 border-b-2">Date: {transaction?.date}</p>
                  <p className="mb-1 border-b-2">Status: {transaction?.status}</p>
                  <p className="mb-1 border-b-2">Cart: {transaction?.cart}</p>

                  <div className='border-b-2 flex items-center'>

                    <h3 className="mb-2">Cart Items:</h3>
                    <select className="rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500">
                      {transaction?.cartItems.map((cartItemId) => (
                        <option key={cartItemId} value={cartItemId} className="text-sm">
                          {cartItemId}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='border-b-2 flex items-center'>

                    <h3 className="mb-2">Menu Items:</h3>
                    <select className="rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500">
                      {transaction?.menuItems.map((menuItemId) => (
                        <option key={menuItemId} value={menuItemId} className="text-sm">
                          {menuItemId}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='border-b-2 flex items-center'>

                    <h3 className="mb-2">Items Name:</h3>
                    <select className="rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500">
                      {transaction?.itemsNames.map((itemName) => (
                        <option key={itemName} value={itemName} className="text-sm">
                          {itemName}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No transactions found.</p>
            )}
          </div>


        </div>
      </div>
    </div>
  );
};

export default Transections;