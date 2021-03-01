import {useState,useEffect,useRef} from 'react';
import {connect} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {createProfile} from '../../actions/action';
import CreateBtn from '../Buttons/CreateBtn';
import './form.css';

function Form(props){
    /*We used useRef to access DOM nodes anywhere inside this Functional Component.*/
    const nameRef=useRef();
    const emailRef=useRef();
    const phoneRef=useRef();
    const dobRef=useRef();
    const cityRef=useRef();
    const districtRef=useRef();
    const provinceRef=useRef();
    const countryRef=useRef();
    const formRef=useRef();

    /*Using a local state to store the Countries Data from the Api.*/
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
        if(item.name==="Nepal"){
            return (<option key={item.alpha2Code} value={item.name} selected>{item.name}</option>);    
        }else{
            return (<option key={item.alpha2Code} value={item.name}>{item.name}</option>);
        }
    })

    const clearFields=()=>{
        /*We could've used formRef.current.reset(); which would have reset the entire form but
        the countries options would also get reset and the default value would be Afghanistan
        not Nepal. Hence, I chose to manually clear each field.*/

        //formRef.current.reset();
        nameRef.current.value="";
        emailRef.current.value="";
        phoneRef.current.value="";
        dobRef.current.value="";
        cityRef.current.value="";
        districtRef.current.value="";
        provinceRef.current.value="Province 1";
        countryRef.current.value="Nepal";
    };

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

    const create=()=>{
        var id=Date.now();
        if(isValidated()){
            props.createProfileProp(id,nameRef.current.value,emailRef.current.value,phoneRef.current.value,dobRef.current.value,cityRef.current.value,districtRef.current.value,provinceRef.current.value,countryRef.current.value);
            clearFields();
        }else{

        }
    };
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="form shadow p-4 mb-5">
                        <h4 className="font-medium mb-3 dark-font-color"><i className="fas fa-user"></i> Create Profile</h4>
                        <form ref={formRef} className="p-3">
                            <Row>
                                <Col lg={4} className="mb-3">
                                    <label className="form-label font-small">Name.</label>
                                    <input className="form-field p-2" type="text" name="name" placeholder="Enter your name" ref={nameRef} />
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <label className="form-label font-small">Email.</label>
                                    <input className="form-field p-2" type="email" name="email" placeholder="Enter your email" ref={emailRef} />
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <label className="form-label font-small">Phone.</label>
                                    <input className="form-field p-2" type="tel" name="phone" placeholder="Enter your phone" ref={phoneRef} />
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <label className="form-label font-small">Date of Birth.</label>
                                    <input className="form-field p-2" type="date" name="dob" ref={dobRef} />
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <label className="form-label font-small">City.</label>
                                    <input className="form-field p-2" type="text" name="city" placeholder="Enter your city" ref={cityRef} />
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <label className="form-label font-small">District.</label>
                                    <input className="form-field p-2" type="text" name="district" placeholder="Enter your district" ref={districtRef} />
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <label className="form-label font-small">Province.</label>
                                    <select className="form-field p-2" name="province" ref={provinceRef}>
                                        <option value="Province 1">Province 1</option>
                                        <option value="Province 2">Province 2</option>
                                        <option value="Province 3">Province 3</option>
                                        <option value="Province 4">Province 4</option>
                                        <option value="Province 5">Province 5</option>
                                        <option value="Province 6">Province 6</option>
                                        <option value="Province 7">Province 7</option>
                                    </select>
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <label className="form-label font-small">Country.</label>
                                    <select className="form-field p-2" name="country" ref={countryRef} style={{width: '100%'}}>
                                        {(fetchError)?(<option value="">Error Loading Countries</option>):listCountriesData}
                                    </select>
                                </Col>
                            </Row>
                            <div className="text-center my-3">
                                <CreateBtn onClick={create} />
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps=(state)=>{
    return{
        profilesProp: state.profiles
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        createProfileProp: (id,name,email,phone,dob,city,district,province,country)=>{
            dispatch(createProfile(id,name,email,phone,dob,city,district,province,country));
        }
    };
}

export const FormContainer=connect(mapStateToProps,mapDispatchToProps)(Form);