import React,{useState} from 'react';
import {connect} from 'react-redux';
import './table.css';
import {Container,Row,Col,Table as BsTable} from 'react-bootstrap';
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
            <tr className="light-shadow" key={item.id} id={item.id}>
                <td className="font-xsmall">{item.name}</td>
                <td className="font-xsmall">{item.email}</td>
                <td className="font-xsmall">{item.phone}</td>
                <td className="font-xsmall">{item.dob}</td>
                <td className="font-xsmall">{item.city}</td>
                <td className="font-xsmall">{item.district}</td>
                <td className="font-xsmall">{item.province}</td>
                <td className="font-xsmall">{item.country}</td>
                <td><button className="custom-primary-btn mb-2" onClick={()=>{
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
                }}><i className="fas fa-user-edit"></i> Edit</button>&emsp;<DeleteBtn handleDelete={()=>props.deleteProfileProp(item.id)}/></td>
            </tr>
        );
    });
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="table mt-0">
                        <BsTable responsive hover className="mt-0">
                            <thead>
                                <tr className="light-shadow">
                                    <th className="font-medium dark-font-color">Name&emsp;<SortBtn handleSort={()=>props.sortProfileProp()}/></th>
                                    <th className="font-medium dark-font-color">Email</th>
                                    <th className="font-medium dark-font-color">Phone</th>
                                    <th className="font-medium dark-font-color">Date of Birth</th>
                                    <th className="font-medium dark-font-color">City</th>
                                    <th className="font-medium dark-font-color">District</th>
                                    <th className="font-medium dark-font-color">Province</th>
                                    <th className="font-medium dark-font-color">Country</th>
                                    <th className="font-medium dark-font-color">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listTableData}
                            </tbody>
                        </BsTable>
                        <EditFormContainer show={showModal} handleCloseModal={setShowModal} editId={editProfileId} editName={editProfileName} editEmail={editProfileEmail} editPhone={editProfilePhone} editDob={editProfileDob} editCity={editProfileCity} editDistrict={editProfileDistrict} editProvince={editProfileProvince} editCountry={editProfileCountry} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
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