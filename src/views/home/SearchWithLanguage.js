import React, { useEffect, useState } from "react";
import { Row, Col, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { clearNewsList, fetchNews } from "../../store/actions/newsListAction";

export default function SearchWithLanguage() {
  const { Option } = Select;

  const languageOptions = {
    English: "en",
    French: "fr",
    Hindi: "hi",
    Malayalam: "ml",
  };

  const [selectedLang, setSelectedLang] = useState("English");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const getNews = async () => {
    if (searchText.length > 0) {
      dispatch(fetchNews({ searchText, lang: languageOptions[selectedLang] }));
    } else {
      dispatch(clearNewsList());
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      getNews();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchText, selectedLang]);

  console.log("selectedLang", selectedLang);
  return (
    <Row gutter={16}>
      <Col xs={16}>
        <Input
          placeholder="Search news"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </Col>
      <Col xs={8}>
        <Select
          showSearch
          value={selectedLang}
          className="width-full"
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
