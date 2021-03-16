import React from 'react';

class Pagination extends React.Component {
    render() {
        let allPages = this.props.allPagesQty
        let currentPage = this.props.currentPage

        let pages = allPages.map((page, index) => {
            return (
                <li key={index} id={index} style={{ cursor: "pointer" }} onClick={this.props.clicky}>
                    {index + 1}
                </li>
            )
        })

        return (
            <ul>
                {pages}
            </ul>
        )
    }
}

export default Pagination