import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_imgae_upload_token

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = data => {
    console.log('form data', data)
    const formData = new FormData()
    formData.append('image', data.image[0])

    fetch(image_hosting_url, {
      method: 'post',
      body: formData
    })
      .then(res => res.json())
      .then(imageResponse => {
        if(imageResponse.success){
          const imgURL = imageResponse.data.display_url
          const {name,price,category,racipe,details}=data;
          const newItem={details,name,price:parseFloat(price),category,racipe,image:imgURL}

          axiosSecure.post('/menu',newItem)
          .then(data =>{
            console.log('after posting new menu item',data.data);
            if(data.data.insertedId){
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Itel added succefully",
                showConfirmButton: false,
                timer: 1500
              });
            }
          })

        }
      })
  };


  return (
    <div className='w-full ml-8'>
      <SectionTitle subHeading={'Add an item'} heading={'Whats new'}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">recipe name*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text" placeholder="Type here" className="input input-bordered w-full " />
        </div>
<div className='md:flex gap-4'>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Category*</span>
          </label>
          <select defaultValue={'Pick one'} {...register("category", { required: true })}
            className="select select-bordered">
            <option disabled >Pick one</option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Salad</option>
            <option>drinks</option>
            <option>Desi</option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            {...register("price", { required: true })}
            type="number" placeholder="Type here" className="input input-bordered w-full " />
        </div>
</div>

        <div className="form-control w-full max-w=-xl">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            {...register("details", { required: true })}
            className="textarea textarea-bordered h-24" placeholder="recipe details"></textarea>

        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Item image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file" className="file-input file-input-bordered w-full " />
        </div>
        <input className='btn btn-success btn-sm m-4' type='submit' value='add item' />
      </form>
    </div>
  );
};

export default AddItem;