import React,{useState,useEffect,useRef} from 'react';
import {connect} from 'react-redux';
import {Container,Row,Col,Modal,Button} from 'react-bootstrap';
import {editProfile} from '../../actions/action';
import EditBtn from '../Buttons/EditBtn';

function EditForm(props) {
    const nameRef=useRef();
    const emailRef=useRef();
    const phoneRef=useRef();
    const dobRef=useRef();
    const cityRef=useRef();
    const districtRef=useRef();
    const provinceRef=useRef();
    const countryRef=useRef();
    const formRef=useRef();

    const [countriesData,setCountriesData]=useState([]);
    const [fetchError,setFetchError]=useState(null);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(
            (result)=>{
                setCountriesData(result);
            },
            (error)=>{
                console.log(error);
                //Doing some Error Handling cuz "We're not Savages, are we?" :)
                setFetchError(error);
            }
        )
    },[])

    const listCountriesData=countriesData.map((item)=>{
        return (<option key={item.alpha2Code} value={item.name}>{item.name}</option>);
    })

    const isValidated=()=>{
        if(nameRef.current.value){
            if(emailRef.current.value){
                /*Regex that allows only emails in the format: name@example.com
                Non-matches include: name@, name@example, name@.com, etc.*/
                var mailFormat=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                if(emailRef.current.value.match(mailFormat)){
                    if(phoneRef.current.value){
                        /*Regex that allows only numbers and must be at least 7 digits long.*/
                        var phoneFormat=/^[0-9]{7,}$/;
                        if(phoneRef.current.value.match(phoneFormat)){
                            return true;
                        }else{
                            alert('Incorrect Phone Number Format. Phone number must be only numbers and have at least 7 digits');
                            return false;
                        }
                    }else{
                        alert('Phone Field cannot be Empty');
                        return false;
                    }
                }else{
                    alert('Incorrect Email Format. Format should be: name@example.com')
                    return false;
                }
            }else{
                alert('Email Field cannot be Empty');
                return false;
            }
        }else{
            alert('Name Field cannot be Empty');
            return false;
        }
    };

    const edit=()=>{
        if(isValidated()){
            props.editProfileProp(props.editId,nameRef.current.value,emailRef.current.value,phoneRef.current.value,dobRef.current.value,cityRef.current.value,districtRef.current.value,provinceRef.current.value,countryRef.current.value);
            props.handleCloseModal(false);
        }else{

        }
    };

    return (
        <div className="editForm">
            <Modal
                show={props.show}
                onHide={()=>props.handleCloseModal(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {console.log(props)}
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="editForm">
                                    <form ref={formRef}>
                                        <Row>
                                            <Col lg={6} className="mb-3">
                                                <input type="text" name="name" placeholder="Enter your name" defaultValue={props.editName} ref={nameRef} />
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <input type="email" name="email" placeholder="Enter your email" defaultValue={props.editEmail} ref={emailRef} />
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <input type="tel" name="phone" placeholder="Enter your phone" defaultValue={props.editPhone} ref={phoneRef} />
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <input type="date" name="dob" defaultValue={props.editDob} ref={dobRef} />
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <input type="text" name="city" placeholder="Enter your city" defaultValue={props.editCity} ref={cityRef} />
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <input type="text" name="district" placeholder="Enter your district" defaultValue={props.editDistrict} ref={districtRef} />
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <select name="province" defaultValue={props.editProvince} ref={provinceRef}>
                                                    <option value="Province 1">Province 1</option>
                                                    <option value="Province 2">Province 2</option>
                                                    <option value="Province 3">Province 3</option>
                                                    <option value="Province 4">Province 4</option>
                                                    <option value="Province 5">Province 5</option>
                                                    <option value="Province 6">Province 6</option>
                                                    <option value="Province 7">Province 7</option>
                                                </select>
                                            </Col>
                                            <Col lg={6} className="mb-3">
                                                <select name="country" defaultValue={props.editCountry} ref={countryRef}>
                                                    {(fetchError)?(<option value="">Error Loading Countries</option>):listCountriesData}
                                                </select>
                                            </Col>
                                        </Row>
                                        {console.log(props.profilesProp)}
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>props.handleCloseModal(false)}>
                        Close
                    </Button>
                    <EditBtn onClick={edit} />
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        profilesProp: state.profiles
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        editProfileProp: (id,name,email,phone,dob,city,district,province,country)=>{
            dispatch(editProfile(id,name,email,phone,dob,city,district,province,country));
        }
    };
}

export const EditFormContainer=connect(mapStateToProps,mapDispatchToProps)(EditForm);
