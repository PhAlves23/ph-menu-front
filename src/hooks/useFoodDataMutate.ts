import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFood } from "../service/api";

export function useFoodDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: createFood,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["food-data"]);
    },
  });

  return mutate;
}
