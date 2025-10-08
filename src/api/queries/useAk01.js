import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";

// Fetch all AK-01 submissions (mirrors APL-02 query style)
export const useAk01All = () =>
  useQuery({
    queryKey: ["ak01"],
    queryFn: () => api.get("/ak01/asesi/all").then((res) => res.data?.data ?? res.data),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 60 * 60 * 1000, // 1 hour
  });

// Convenience hook: get the record and assesment info for a specific user id
export const useAk01ForUser = (userId) => {
  const q = useAk01All();
  const filteredData = q.data?.find(
    (item) => item?.assesment_asesi?.assesi?.user_id === Number(userId)
  );
  const assesment = filteredData?.assesment_asesi?.assesment;
  return { ...q, filteredData, assesment };
};
