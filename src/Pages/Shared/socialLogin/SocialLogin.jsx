import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const SocialLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const { googleSignin } = useAuth()
  const handleGoogleSignin = () => {
    googleSignin()
      .then(result => {
        const loggedUser = result.user
        //console.log(loggedUser, 'google diya login');
        const saveUser = { name: loggedUser.displayName, email: loggedUser.email, }

        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            //console.log(data);
            if(data.massage){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.massage}`,
                showConfirmButton: false,
                timer: 1500
             });
            }
            // ekhane nvigat hoina karon data.massage ase mane already user ase tai data.insert hoina ar vitore giya navigate o hoina so ekhane dite paro data.insertedid or data.massage othoba data.inserted id bad diya delao

            // if (data.insertedId > 1 ) {
            //   //console.log("from",from);

            //   navigate(from, { replace: true })
            // }
            navigate(from, { replace: true })
          })

      })
  }
  return (
    <div>
      <div className='divider'></div>
      <div className='w-full my-4 text-center'>
        <button onClick={handleGoogleSignin} className="btn btn-circle btn-outline">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;