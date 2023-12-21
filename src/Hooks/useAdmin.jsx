import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
  const { user } = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const { data:isAdmin,isLoading:isAdminLoading ,error}=useQuery({
    queryKey:['isAdmin',user?.email],
    queryFn: async () => {
 
      // console.log('data pass isAdmin ',isAdmin);
      // console.log(error);
        const response = await axiosSecure.get(`/users/admin/${user?.email}`);
        // console.log('useAdmin - Response:', response.data.admin);

        return response.data.admin;

    }
  })
return [isAdmin,isAdminLoading]
};

export default useAdmin;