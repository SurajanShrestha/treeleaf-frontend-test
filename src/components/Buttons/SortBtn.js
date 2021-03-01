import React from 'react';

function SortBtn(props) {
    return (<button className="sort-btn" type="button" onClick={props.handleSort}><i className="fas fa-sort-alpha-down"></i></button>);
}

export default SortBtn;
