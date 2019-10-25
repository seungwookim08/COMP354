import React, { useState } from 'react';
import Item from './Item';
import "../../css/Items.css";
import Pagination from "./Pagination";

const ItemList = (props) => {
    //lets use some hooks so we can use State without writing a class
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20); //20 items per page as per the requirements

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = props.items.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div>
            <div className='item-list'>
                {currentItems.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={props.items.length}
                paginate={paginate}
            />
        </div>
    );
};

export default ItemList;