import { get } from "../../services/api.config";
import { UPDATE_NEWS_LIST } from "../types";

export const fetchNews = ({ searchText, lang }) => {
  return async (dispatch) => {
    const response = await get("search", {
      q: searchText,
      lang,
    });

    dispatch({
      type: UPDATE_NEWS_LIST,
      payload: response?.data?.articles ?? [],
    });
  };
};

export const clearNewsList = () => {
  return (dispatch) => {
    dispatch({ type: UPDATE_NEWS_LIST, payload: [] });
  };
};
