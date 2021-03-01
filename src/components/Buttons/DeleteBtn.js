import React from 'react';

function DeleteBtn(props) {
    return (<button className="custom-danger-btn" type="button" onClick={props.handleDelete}><i className="far fa-trash-alt"></i> Delete</button>);
}

export default DeleteBtn;
