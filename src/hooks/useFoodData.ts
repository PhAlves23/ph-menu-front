import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";
import { findAllFoods } from "../service/api";

export function useFoodData() {
  const query = useQuery({
    queryFn: findAllFoods,
    queryKey: ["food-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
