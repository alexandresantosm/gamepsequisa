import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  link: string;
  linkText: string;
}

const Filter = ({link, linkText}: Props) => (
  <div className="filter-container">
    <div className="records-actions">
        
    </div>
    <div className="btn-action">
      <Link to={link}>
        <button className="action">{linkText}</button>
      </Link>
    </div>
  </div>
);

export default Filter;