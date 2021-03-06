import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { RecordsResponse } from  './types';

import Filter from '../../components/Filter';
import Pagination from './Pagination';

import './styles.css';

import { formatDate } from './helpers';

const baseURL = process.env.REACT_APP_API_URL;

const Record = () => {
  const [recordResponse, setRecordResponse] = useState<RecordsResponse>();
  const [activePage, setActivePage] = useState(0);
  
  useEffect(() => {
    axios.get(`${baseURL}/records?linesPerPage=12&page=${activePage}`)
      .then(response => setRecordResponse(response.data));   
  }, [activePage]);

  function handlePageChange(page: number) {
    setActivePage(page);
  }

  return (
    <div className="container">
      <Filter link="/charts" linkText="VER GRÁFICOS" />
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
      <Pagination 
        activePage={activePage}
        totalPages={recordResponse?.totalPages}
        goToPage={handlePageChange}/>
    </div>
  );
}

export default Record;