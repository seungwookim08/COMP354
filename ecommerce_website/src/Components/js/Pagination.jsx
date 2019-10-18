//retrieved from Youtube tutorial on pagination by Traversy Media
//https://www.youtube.com/watch?v=IYCa1F-OWmk&t=603s
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Button from '@material-ui/core/Button';
import "../css/Pagination.css";



// take in some variables
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    //this will give us the correct number of page numbers
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <BottomNavigation>
            <div className="pagination">
                <nav>
                    <ul>
                        {pageNumbers.map(number => (
                            <li key={number}>
                                <Button variant="outlined" onClick={() => paginate(number)} href='!#'>
                                    {number}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </BottomNavigation>
    );
};

export default Pagination;