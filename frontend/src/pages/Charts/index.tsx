import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

import Filter from '../../components/Filter';

import { buildBarSeries, getGenreChartData, getPlatformChartData } from './helpers';
import { barOptions, pieOptions } from './chart-options';

import './styles.css';

type PieChartData = {
  labels: string[];
  series: number[];
}

type BarChartData = {
  x: string;
  y: number;
}

const initialPieDate = {
  labels: [],
  series: []
}

const baseURL = process.env.REACT_APP_API_URL;

const Charts = () => {
  const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
  const [platformData, setPlatformData] = useState<PieChartData>(initialPieDate);
  const [genreData, setGenreData] = useState<PieChartData>(initialPieDate);

  useEffect(() => {
    async function getData() {
      const recordsResponse = await axios.get(`${baseURL}/records`);
      const gamesResponse = await axios.get(`${baseURL}/games`);
  
      const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
      setBarChartData(barData);

      console.log(recordsResponse.data.content)

      const platformChartData = getPlatformChartData(recordsResponse.data.content);
      setPlatformData(platformChartData);

      const genreChartData = getGenreChartData(recordsResponse.data.content);
      setGenreData(genreChartData)
    }

    getData();
  }, []);

  return (
    <div className="page-container">
      <Filter link="/records" linkText="VER TABELA" />
      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">Jogos mais Votados</h1>
          <div className="games-container">
            <Chart 
              options={barOptions}
              type="bar"
              width="450"
              height="650"
              series={[{data: barChartData}]}
            />
          </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
            <Chart 
              options={{...pieOptions, labels: platformData?.labels}}
              type="donut"
              series={platformData?.series}
              width="300"
            />
          </div>
          <div className="genre-chart">
            <h2 className="chart-title">Gêneros</h2>
              <Chart 
                options={{...pieOptions, labels: genreData?.labels}}
                type="donut"
                series={genreData?.series}
                width="350"
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;