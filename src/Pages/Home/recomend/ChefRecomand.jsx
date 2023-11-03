
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import img from "../../../assets/menu/salad-bg.jpg";

const ChefRecomand = () => {

   return (
      <section className='mb-12'>
         <SectionTitle
            heading={'Should Try'}
            subHeading={'CHEF RECOMMENDS'}
         ></SectionTitle>

         <div className=' md:flex justify-around'>
            <div className="card mb-4 md:w-96 bg-base-100 rounded-none shadow-xl">
               <figure>
                  <img src={img} alt="salad" />
               </figure>
               <div className="card-body bg-gray-200 items-center text-center">
                  <h2 className="card-title">Fish Parmentier</h2>
                  <p>Sautéed breaded veal escalope with lemon and veal jus.</p>
                  <div>
                     <button className="btn hover:bg-gray-900 border-b-2 border-b-yellow-600 font-sans mt-3 uppercase text-yellow-600">Add To Cart</button>
                  </div>
               </div>
            </div>
            <div className="card mb-4 md:w-96 bg-base-100 rounded-none shadow-xl">
               <figure>
                  <img src={img} alt="salad" />
               </figure>
               <div className="card-body bg-gray-200 items-center text-center">
                  <h2 className="card-title">Fish Parmentier</h2>
                  <p>Sautéed breaded veal escalope with lemon and veal jus.</p> 
                  <div className="">
                     <button className="btn hover:bg-gray-900 border-b-2 border-b-yellow-600 font-sans mt-3 uppercase text-yellow-600">Add To Cart</button>
                  </div>
               </div>
            </div>
            <div className="card md:w-96 bg-base-100 rounded-none shadow-xl">
               <figure>
                  <img src={img} alt="salad" />
               </figure>
               <div className="card-body bg-gray-200 items-center text-center">
                  <h2 className="card-title">Fish Parmentier</h2>
                  <p>Sautéed breaded veal escalope with lemon and veal jus.</p>
                  <div className="">
                     <button className="btn hover:bg-gray-900 border-b-2 border-b-yellow-600 font-sans mt-3 uppercase text-yellow-600">Add To Cart</button>
                  </div>
               </div>
            </div>


         </div>

      </section>
   );
};

export default ChefRecomand;