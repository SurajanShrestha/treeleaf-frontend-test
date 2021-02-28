import React,{useState} from 'react';
import {connect} from 'react-redux';
import './table.css';
import {Button} from 'react-bootstrap';
import {deleteProfile,sortProfile} from '../../actions/action';
import DeleteBtn from '../Buttons/DeleteBtn';
import SortBtn from '../Buttons/SortBtn';
import {EditFormContainer} from '../Modals/EditForm';

function Table(props) {
    //Setting local state that determines whether to show Modal or not
    const [showModal,setShowModal]=useState(false);

    const [editProfileId,setEditProfileId]=useState("");
    const [editProfileName,setEditProfileName]=useState("");
    const [editProfileEmail,setEditProfileEmail]=useState("");
    const [editProfilePhone,setEditProfilePhone]=useState("");
    const [editProfileDob,setEditProfileDob]=useState("");
    const [editProfileCity,setEditProfileCity]=useState("");
    const [editProfileDistrict,setEditProfileDistrict]=useState("");
    const [editProfileProvince,setEditProfileProvince]=useState("");
    const [editProfileCountry,setEditProfileCountry]=useState("");

    const listTableData=props.profilesProp.map((item)=>{
        return(
            <tr key={item.id} id={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.dob}</td>
                <td>{item.city}</td>
                <td>{item.district}</td>
                <td>{item.province}</td>
                <td>{item.country}</td>
                <td><Button onClick={()=>{
                    setShowModal(true);
                    setEditProfileId(item.id);
                    setEditProfileName(item.name);
                    setEditProfileEmail(item.email);
                    setEditProfilePhone(item.phone);
                    setEditProfileDob(item.dob);
                    setEditProfileCity(item.city);
                    setEditProfileDistrict(item.district);
                    setEditProfileProvince(item.province);
                    setEditProfileCountry(item.country);
                }}>Edit</Button>&emsp;<DeleteBtn handleDelete={()=>props.deleteProfileProp(item.id)}/></td>
                {console.log(showModal)}
            </tr>
        );
    });
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name&emsp;<SortBtn handleSort={()=>props.sortProfileProp()}/></th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Birth(YYYY-MM-DD)</th>
                        <th>City</th>
                        <th>District</th>
                        <th>Province</th>
                        <th>Country</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listTableData}
                </tbody>
            </table>
            <EditFormContainer show={showModal} handleCloseModal={setShowModal} editId={editProfileId} editName={editProfileName} editEmail={editProfileEmail} editPhone={editProfilePhone} editDob={editProfileDob} editCity={editProfileCity} editDistrict={editProfileDistrict} editProvince={editProfileProvince} editCountry={editProfileCountry} />
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        profilesProp: state.profiles
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteProfileProp: (id)=>{
            dispatch(deleteProfile(id));
        },
        sortProfileProp: ()=>{
            dispatch(sortProfile());
        }
    }
};

export const TableContainer=connect(mapStateToProps,mapDispatchToProps)(Table);