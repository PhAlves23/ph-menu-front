import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFood } from "../service/api";

export function useFoodDataDelete() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteFood,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["food-data"]);
    },
  });

  return mutate;
}
