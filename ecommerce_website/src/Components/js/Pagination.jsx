//retrieved from Youtube tutorial on pagination by Traversy Media
//https://www.youtube.com/watch?v=IYCa1F-OWmk&t=603s

import React from 'react';
// take in some variables
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  //this will give us the correct number of page numbers
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;