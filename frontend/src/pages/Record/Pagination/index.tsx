import React from 'react';

import './styles.css';

type Props = {
  totalPages?: number;
  goToPage: Function;
  activePage: number;
}

const Pagination = ({totalPages = 0, goToPage, activePage}: Props) => {
  const pages = Array.from(Array(totalPages).keys());

  return (
    <div className="pagination-container">
      {pages.map(page => (
        <button 
          key={page}
          className={`pagination-item ${activePage === page ? 'active' : 'inactive'}`} 
          onClick={() => goToPage(page)}
          >
          {page + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;