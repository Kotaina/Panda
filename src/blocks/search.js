import React from 'react';
import "../sass/search.scss"


const Search = props => {
    return (
        <div className="search">
            <input
                className="search__input"
                onChange={props.inputHandler}
            />
            <button onClick={props.onBtnCancelClick}>Reset</button>
        </div>
    )

}

export default Search