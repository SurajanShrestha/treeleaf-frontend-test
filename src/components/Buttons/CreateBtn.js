import React from 'react';

function CreateBtn(props) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onClick();
    };
    return (<button className="custom-primary-btn" type="submit" onClick={handleSubmit}><i className="fas fa-user-plus"></i> Add Profile</button>);
}

export default CreateBtn;
