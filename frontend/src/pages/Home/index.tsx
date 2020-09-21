import React from 'react';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Gamer } from '../../assets/gamer.svg';

import './styles.css';

const Home = () => (
  <div className="home-container">
    <div className="text">
      <h1 className="title">Quais jogos a galera gosta mais ?</h1>
      <h3 className="subtitle">Clique no botão e saiba quais são os jogos que os gamers estão escolhendo!</h3>
      <div>
        <div className="actions">
          <button className="btn">QUERO SABER QUAIS SÃO</button>
          <div className="btn-icon">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
    <Gamer className="gamer-image" />
  </div>
);

export default Home;