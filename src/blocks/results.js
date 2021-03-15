import React from 'react';

class Results extends React.Component {
    render() {
        let allDataItems = this.props.listData
        let maxPageQty = 50
        let pages = allDataItems.length / maxPageQty;
        console.log(pages)

        let pagination = this.props.allPagesFck.map((item, index) => {
            return (
                <li
                    key={index}             >
                    {item}
                </li>
            )
        })

        let listItems = allDataItems.map((item, index) => {
            return (
                <li
                    id={item.id}
                    key={index}
                    className="result__item"
                >
                    {item.name}
                    {item.email}
                    {item.body}
                </li>
            )
        })

        return (
            <section>
                <h2 className="results">Results</h2>
                <button onClick={this.props.clicky}
                >Click</button>
                {listItems}
                <div>
                    <ul>
                        {pagination}
                    </ul>
                </div>

            </section>
        )
    }
}
export default Results;
