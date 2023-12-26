
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTransection = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure()

  const { refetch, data: transactions = [] } = useQuery({
    queryKey: ['payments', user?.email],
    enabled: !loading,
    queryFn: async () => {

      const res = await axiosSecure.get(`/payments/${user?.email}`);
      console.log('usetransections data',res.data);
      return res.data;
    }
  });

  return [refetch, transactions];
};



export default useTransection;