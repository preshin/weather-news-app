import React from "react";
import SearchWithLanguage from "./SearchWithLanguage";
import { Row, Col } from "antd";
import NewsList from "./NewsList";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../store/actions/newsListAction";
import WeatherCard from "../../components/WeatherCard";

function Home() {
  const dispatch = useDispatch();
  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // call api at end of the scroll
      dispatch(fetchNews(true));
    }
  };
  return (
    <>
      <Row justify="center" className="p-0 text-center h-215">
        <Col xs={24} sm={12} className="p-20">
          <WeatherCard />
        </Col>
      </Row>
      <Row justify="center" className="p-0 h-60">
        <Col xs={24} sm={16}>
          <SearchWithLanguage />
        </Col>
      </Row>

      <Row
        gutter={[16, 16]}
        className="overflow-scroll news-list-container"
        onScroll={handleScroll}
      >
        <Col xs={24}>
          <NewsList />
        </Col>
      </Row>
    </>
  );
}

export default Home;
