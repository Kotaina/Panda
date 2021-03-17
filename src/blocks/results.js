import React from 'react';
import Radium from 'radium';
import "../sass/results.scss"


const Results = props => {
    let allDataItems = props.listData

    let listItems = allDataItems.map((item, index) => {

        let r = Math.random() * 700
        let g = Math.random() * 270
        let b = Math.random() * 85 * 13

        const hoverStyle = {
            ":hover": {
                backgroundColor: `rgb(${r},${g},${b})`
            },
            ":active": {
                backgroundColor: `rgb(${r},${g},${b})`
            }
        }

        return (
            <li
                id={`item-${item.id}`}
                key={index}
                style={
                    // { backgroundColor: `rgb(${r},${g},${b})` }
                    // { backgroundColor: `rgb(${Math.random() * 700},${Math.random() * 380},${Math.random() * 200})`  }
                    hoverStyle
                }
                className="tiny__item el"
            >
                <span className="el__name">{item.name}</span>
                <span className="el__email">{item.email}</span>
            </li >
        )
    })

    return (
        <section className="results">
            <div className="results__buttons btn">
                <div className="btn__name"
                    onClick={props.sortByName}
                >Name:</div>
                <div className="btn__email">Email:</div>
            </div>
            <ul className="results__list item">
                {listItems}
            </ul>
        </section >
    )

}

export default Radium(Results)
