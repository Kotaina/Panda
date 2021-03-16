import React from 'react';

class Results extends React.Component {
    render() {
        let allDataItems = this.props.listData
        let maxPageQty = 50
        let pages = allDataItems.length / maxPageQty;

        let listItems = allDataItems.map((item, index) => {
            return (
                <li
                    id={item.id}
                    key={index}
                    className="result__item"
                >
                    {item.name}
                    {/* {item.email}
                    {item.body} */}
                </li>
            )
        })

        return (
            <section>
                <h2 className="results">Results</h2>
                <button
                >Click</button>
                <ol>

                    {listItems}
                </ol>
            </section>
        )
    }
}
export default Results;
