import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFood } from "../service/api";

export function useFoodDataUpdate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: updateFood,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["food-data"]);
    },
  });

  return mutate;
}
