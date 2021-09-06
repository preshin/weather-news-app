import { Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { weatherGet } from "../services/api.config";

export default function WeatherCard() {
  const { Title } = Typography;

  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (position) => {
    const response = await weatherGet("onecall", {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
    setWeatherData(response?.data ?? null);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position) {
        fetchWeather(position);
      }
    });
  }, []);

  return (
    <Row
      justify="center"
      className="border-radius-15 p-20 border-solid-1-lightgrey h-175"
    >
      <Col xs={12} className="div-center">
        {weatherData?.current.weather && (
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
              alt={weatherData.current.weather[0].description}
            />
            <p>{weatherData.current.weather[0].description}</p>
          </div>
        )}
        {!weatherData?.current.weather && <div>--</div>}
      </Col>
      <Col xs={12} className="text-center div-center">
        {weatherData && (
          <div>
            {weatherData && <p>{weatherData?.timezone ?? "--"}</p>}

            <Title level={3}>
              {Math.round(weatherData.current.temp)}
              <sup>&deg;C</sup>
            </Title>
          </div>
        )}
        {!weatherData && <div>--</div>}
      </Col>
    </Row>
  );
}
