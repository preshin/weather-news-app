import { get } from "../../services/api.config";
import { UPDATE_NEWS_LIST, UPDATE_SEARCH_TEXT_AND_LANG } from "../types";

export const languageOptions = {
  English: "en",
  French: "fr",
  Hindi: "hi",
  Malayalam: "ml",
};

export const fetchNews = (onScroll = false) => {
  return async (dispatch, getState) => {
    const { newsList, pageNo, searchText, selectedLang } = getState().newsData;

    const response = await get("search", {
      q: searchText,
      lang: languageOptions[selectedLang],
      page: pageNo,
    });
    dispatch({
      type: UPDATE_NEWS_LIST,
      payload: {
        newsList: [...newsList, ...(response?.data?.articles ?? [])],
        pageNo: onScroll ? pageNo + 1 : pageNo,
      },
    });
  };
};

export const clearNewsList = () => {
  return (dispatch) => {
    dispatch({ type: UPDATE_NEWS_LIST, payload: { newsList: [], pageNo: 1 } });
  };
};

export const updateSearchTextAndLang = ({ searchText, selectedLang }) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SEARCH_TEXT_AND_LANG,
      payload: { searchText, selectedLang },
    });
  };
};
