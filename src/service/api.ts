import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = "http://localhost:8080";

export const findAllFoods = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(`${API_URL}/api/foods`);
  return response;
};

export const createFood = async (data: FoodData): AxiosPromise<any> => {
  const response = axios.post(`${API_URL}/api/foods`, data);
  return response;
};

export const updateFood = async (data: FoodData): AxiosPromise<any> => {
  const response = axios.put(`${API_URL}/api/foods/${data.id}`, data);
  return response;
};

export const deleteFood = async (id: number): AxiosPromise<any> => {
  const response = axios.delete(`${API_URL}/api/foods/${id}`);
  return response;
};
