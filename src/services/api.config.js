import apisauce from "apisauce";

const apiConfig = () => {
  const api = apisauce.create({
    baseURL: "https://gnews.io/api/v4",
    timeout: 30000,
  });

  return api;
};

export const get = async (path, params) => {
  return await apiConfig().get(path, {
    token: "ec1b0c274932995af0fdf9389f010e14",
    ...params,
  });
};
