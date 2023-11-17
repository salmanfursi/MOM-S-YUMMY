import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { createUser } = useContext(AuthContext)
  const {
    register,
    handleSubmit, 
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
            <title className='uppercase'>MY | SIGN UP</title>
         </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">sign up now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text"  {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
              {errors.name && <span className='text-red-600'>name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
              {errors.email && <span className='text-red-600'>email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", { 
                required: true,
                minLength: 6,
                maxLength: 20,
                // pattern:
                // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
                })} name='password' placeholder="password" className="input input-bordered" required />
              {errors.password?.type == "required" && <span className='text-red-600'>password is required</span>}
              {errors.password?.type == "minLength" && <span className='text-red-600'>password must be 6</span>}
              {errors.password?.type == "maxLength" && <span className='text-red-600'>password will be under 20</span>}
              {errors.password?.type == "pattern" && <span className='text-red-600'>add uppercase lowercase number and regular expression</span>}
             
            </div>
            <div className="form-control mt-6">
              <input type='submit' className="btn btn-primary"value="sign up" />
            </div>
          </form>
          <p className='px-8 pb-4'><small>allready have an account?</small><Link to={'/signup'}>click hare to login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;