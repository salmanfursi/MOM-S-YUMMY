

const FoodCard = ({data}) => {
const {name,recipe,image,price}=data
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
          <button className="btn hover:bg-gray-900 border-b-2 border-b-yellow-600 font-sans mt-3 uppercase text-yellow-600">Add To Cart</button>
       </div>
    </div>
 </div>
   );
};

export default FoodCard;