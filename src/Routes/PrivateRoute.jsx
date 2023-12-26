
import { Navigate, useLocation } from 'react-router-dom';
import gif from './../assets/833.gif'
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
  const {user ,loading}=useAuth()
  const location =useLocation()

  if(loading){
    return (
      <>
      <p className='text-3xl text-center text-red-600'>make sure about login !!!!</p>
      <div className="flex items-center justify-center h-screen">
        <img src={gif} alt="Loading" />
      </div>
      </>
    )
  }
  
  if(user){
    return children
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;