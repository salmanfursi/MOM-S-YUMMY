
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";




const FoodCard = ({ item }) => {
   const { name, recipe, image, price, _id } = item
   const { user } = useAuth()
   const [refetch]=useCart()

   const navigate = useNavigate()
   const location = useLocation()

   const handleAddToCart = (item) => {
      //console.log(item);
      if (user && user.email) {
         const cartItem = { menuItemId: _id, name,price, image, email: user.email }
         fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItem)
         })
            .then(res => res.json())
            .then(data => {
               if (data.insertedId) {
                  refetch()
                  Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "added on cart",
                     showConfirmButton: false,
                     timer: 1500
                  });
               }
            })
         // .catch(err => console.error(err));
      }
      else {
         Swal.fire({
            title: "pls login to order the food",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "login now!"
         }).then((result) => {
            if (result.isConfirmed) {
               navigate('/login', { state: { from: location } })
            }
         });

      }
   }
   return (
      <div className="card bg-base-100 rounded-none shadow-xl">
         <p className="bg-slate-900 text-white px-4 absolute right-0 m-4 py-1 ">${price}</p>
         <figure>
            <img className="w-full " src={image} alt="salad" />
         </figure>
         <div className="card-body bg-gray-200 items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div>
               <button onClick={() => handleAddToCart(item)} className="btn hover:bg-gray-900 border-b-2 border-b-yellow-600 font-sans mt-3 uppercase text-yellow-600">Add To Cart</button>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;