import React from 'react';
import "../sass/pagination.scss"

const Pagination = props => {
    let allPages = props.allPagesQty

    let pages = allPages.map((page, index) => {
        return (
            <li
                className="pagination__item"
                key={index}
                id={index}
                style={{ cursor: "pointer" }}
                onClick={props.clicky}>
                {index + 1}
            </li>
        )
    })

    return (
        <ul className="pagination">
            {pages}
        </ul>
    )

}

export default Pagination