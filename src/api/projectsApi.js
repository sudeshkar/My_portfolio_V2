import axiosClient from "./axiosClient";

export const getProjects = () => {
  return axiosClient.get();
};
