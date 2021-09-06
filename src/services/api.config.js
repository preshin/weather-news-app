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
    token: "285759596c84a019e71fd4406839e437",
    ...params,
  });
};

const weatherApiConfig = () => {
  const api = apisauce.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    timeout: 30000,
  });

  return api;
};

export const weatherGet = async (path, params) => {
  return await weatherApiConfig().get(path, {
    appid: "0683e1527cd70462a822c9b6a67558b1",
    units: "metric",
    ...params,
  });
};
