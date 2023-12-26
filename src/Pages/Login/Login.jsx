import React, { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/socialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

  const [disabled, setDisabled] = useState(true)

  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"



  useEffect(() => {
    loadCaptchaEnginge(2);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    //console.log(email, password );

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        Swal.fire({
          title: "user logged successfully",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
          }
        });
        navigate(from, { replace: true })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //console.log(errorCode,errorMessage);
      });
  }

  const handleValidateCaptcha = (e) => {
    e.preventDefault()
    const user_captcha_value = e.target.value
    //console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }
  return (

    <div className="hero -mt-14 bg-base-200">
      <Helmet>
        <title className='uppercase'>MY | LOGIN</title>
      </Helmet>
      <div className="hero-content flex-col md:flex-row-reverse">


        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>

        <form onSubmit={handleLogin} className=" max-w-md w-full flex flex-shrink-0 card card-body flex-col justify-center shadow-2xl bg-base-100 p-4 ">

          <div className="">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered w-full" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered w-full" required />
            </div>

            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the text above" className="input input-bordered w-full" required />
            </div>

            <div className="form-control mt-6">
              <input disabled={false} className='btn btn-primary' type="submit" value="Login" />
            </div>

            <div className="mt-4">
              <p className=''><small>New here?</small><Link to={'/signup'}>Create an account</Link></p>
              <SocialLogin></SocialLogin>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;