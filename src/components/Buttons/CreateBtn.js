import React from 'react';

function CreateBtn(props) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onClick();
    };
    return (<button className="create-btn" type="submit" onClick={handleSubmit}><i class="fas fa-user-plus"></i> Add Profile</button>);
}

export default CreateBtn;
