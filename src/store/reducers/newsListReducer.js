import { UPDATE_NEWS_LIST } from "../types";

const INITIAL_STATE = {
  newsList: [],
};

const newsListReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_NEWS_LIST:
      return { ...state, newsList: payload };

    default:
      return state;
  }
};

export default newsListReducer;
