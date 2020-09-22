import React from 'react';
import Filter from '../../components/Filter';

import './styles.css';

const Record = () => {
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
          <tr>
            <td>20/08/2020 13:45</td>
            <td>João da Silva</td>
            <td>23</td>
            <td>Playstation</td>
            <td>Ação - Aventura</td>
            <td>The Last of Us</td>
          </tr>
          <tr>
            <td>20/08/2020 13:45</td>
            <td>João da Silva</td>
            <td>23</td>
            <td>Playstation</td>
            <td>Ação - Aventura</td>
            <td>The Last of Us</td>
          </tr>
          <tr>
            <td>20/08/2020 13:45</td>
            <td>João da Silva</td>
            <td>23</td>
            <td>Playstation</td>
            <td>Ação - Aventura</td>
            <td>The Last of Us</td>
          </tr>
          <tr>
            <td>20/08/2020 13:45</td>
            <td>João da Silva</td>
            <td>23</td>
            <td>Playstation</td>
            <td>Ação - Aventura</td>
            <td>The Last of Us</td>
          </tr>
          <tr>
            <td>20/08/2020 13:45</td>
            <td>João da Silva</td>
            <td>23</td>
            <td>Playstation</td>
            <td>Ação - Aventura</td>
            <td>The Last of Us</td>
          </tr>
        </tbody>
      </table>
      <div>1 2 3 4 5 6 7 8</div>
    </div>
  );
}

export default Record;