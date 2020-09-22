import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { RecordsResponse } from  './types';

import Filter from '../../components/Filter';

import './styles.css';

import { formatDate } from './helpers';

const BaseURL:string = 'https://game-preference-search.herokuapp.com';

const Record = () => {
  const [recordResponse, setRecordResponse] = useState<RecordsResponse>();
  const [activePage, setActivePage] = useState(0);
  
  useEffect(() => {
    const res = axios.get(`${BaseURL}/records?linesPerPage=12`)
      .then(response => setRecordResponse(response.data))    
  }, []);

  return (
    <div className="container">
      <Filter link="#" linkText="VER GRÁFICOS" />
      <table className="records" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordResponse?.content.map(record => (
            <tr key={record.id}>
              <td>{formatDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td>{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td>{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>1 2 3 4 5 6 7 8</div>
    </div>
  );
}

export default Record;