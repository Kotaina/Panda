import React from 'react';
import "../sass/search.scss"


class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <input
                    className="search__input"
                    onChange={this.props.inputHandler}
                />
                <button onClick={this.props.onBtnCancelClick}>Reset</button>
            </div>
        )
    }
}

export default Search