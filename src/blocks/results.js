import React from 'react';
import "../sass/results.scss"

class Results extends React.Component {
    render() {
        let allDataItems = this.props.listData

        let listItems = allDataItems.map((item, index) => {
            return (
                <li
                    id={`item-${item.id}`}
                    key={index}
                    className="tiny__item el"
                >
                    <span className="el__name">{item.name}</span>
                    <span className="el__email">{item.email}</span>
                </li>
            )
        })

        return (
            <section className="results">
                <div className="results__buttons btn">
                    <div className="btn__name"
                        onClick={this.props.sortByName}
                    >Name:</div>
                    <div className="btn__email">Email:</div>
                </div>
                <ul className="results__list item">
                    {listItems}
                </ul>
            </section >
        )
    }
}
export default Results;
