import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import {
  clearNewsList,
  fetchNews,
  languageOptions,
  updateSearchTextAndLang,
} from "../../store/actions/newsListAction";

export default function SearchWithLanguage() {
  const { Option } = Select;

  const [selectedLang, setSelectedLang] = useState("English");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const getNews = async () => {
    dispatch(updateSearchTextAndLang({ searchText, selectedLang }));
    dispatch(clearNewsList());

    if (searchText.length > 0) {
      dispatch(fetchNews());
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      getNews();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchText, selectedLang]);

  return (
    <Row gutter={16}>
      <Col xs={16}>
        <Input
          size="large"
          placeholder="Search news"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="border-radius-15"
        />
      </Col>
      <Col xs={8}>
        <Select
          size="large"
          showSearch
          value={selectedLang}
          className="width-full border-radius-15"
          onChange={setSelectedLang}
        >
          {Object.keys(languageOptions).map((key) => (
            <Option value={key} key={key}>
              {key}
            </Option>
          ))}
        </Select>
      </Col>
    </Row>
  );
}
