import React from 'react';
import "../sass/pagination.scss"


class Pagination extends React.Component {
    render() {
        let allPages = this.props.allPagesQty

        let pages = allPages.map((page, index) => {
            return (
                <li
                    className="pagination__item"
                    key={index}
                    id={index}
                    style={{ cursor: "pointer" }}
                    onClick={this.props.clicky}>
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
}

export default Pagination