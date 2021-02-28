import React from 'react'

function EditBtn(props) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onClick();
    };
    return (<button type="submit" onClick={handleSubmit}>Edit</button>)
}

export default EditBtn;
