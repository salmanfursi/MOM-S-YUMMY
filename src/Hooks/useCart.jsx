
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useAuth();
  // const token=localStorage.getItem('access-token')
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: cart = [], error, status } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,
    queryFn: async () => {

      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      // console.log('axios data ', res);
      return res.data;
    }
  });

  return [refetch, cart];
};

export default useCart;