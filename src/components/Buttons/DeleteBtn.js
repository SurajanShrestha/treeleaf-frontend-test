import React from 'react';

function DeleteBtn(props) {
    return (<button type="button" onClick={props.handleDelete}>Delete</button>);
}

export default DeleteBtn;
