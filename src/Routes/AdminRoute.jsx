
import { Navigate, useLocation } from 'react-router-dom';
import gif from './../assets/833.gif'
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
  const {user ,loading}=useAuth()
  const location =useLocation()
  const [isAdmin,isAdminLoading]=useAdmin();

  if(loading && isAdminLoading){
    return (
      <div className="flex items-center justify-center h-screen">
        <img src={gif} alt="Loading" />
      </div>
    )
  }
  if(user && isAdmin){
    return children
  }
  return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;