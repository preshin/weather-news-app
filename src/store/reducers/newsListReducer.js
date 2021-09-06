import { UPDATE_NEWS_LIST, UPDATE_SEARCH_TEXT_AND_LANG } from "../types";

const INITIAL_STATE = {
  newsList: [],
  pageNo: 1,
  searchText: "",
  selectedLang: "English",
};

const newsListReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_NEWS_LIST:
      return { ...state, ...payload };

    case UPDATE_SEARCH_TEXT_AND_LANG:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default newsListReducer;
