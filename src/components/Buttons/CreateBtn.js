import React from 'react';

function CreateBtn(props) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onClick();
    };
    return (<button type="submit" onClick={handleSubmit}>Create Profile</button>);
}

export default CreateBtn;
