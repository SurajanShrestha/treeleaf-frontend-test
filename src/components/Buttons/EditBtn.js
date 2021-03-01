import React from 'react'

function EditBtn(props) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onClick();
    };
    return (<button className="custom-secondary-btn" type="submit" onClick={handleSubmit}><i className="fas fa-user-check"></i> Edit Profile</button>)
}

export default EditBtn;
