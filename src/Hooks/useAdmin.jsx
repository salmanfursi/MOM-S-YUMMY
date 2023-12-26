import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
  const { user,loading } = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const { data:isAdmin,isLoading:isAdminLoading ,error}=useQuery({
    queryKey:['isAdmin',user?.email],
    enabled:!loading, //ekhane bola hoi se jodi user pai (user privateroute e o loading hote pare abar login hote o ) (user pailei loading of hoye jai tai) user pele mane loading off hole ba not loading thakle queryfn ta start korbe thats it ,karon jokhon user paina thokon admin dashboard a loading hote thake. 
    queryFn: async () => {
 
      console.log('admin admin isAdmin ',isAdmin);
      // console.log(error);
        const response = await axiosSecure.get(`/users/admin/${user?.email}`);
        // console.log('useAdmin - Response:', response.data.admin);

        return response.data.admin;

    }
  })
return [isAdmin,isAdminLoading]
};

export default useAdmin;