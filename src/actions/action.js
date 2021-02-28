import {CREATE_PROFILE,DELETE_PROFILE,EDIT_PROFILE,SORT_PROFILE} from "./action-types/actionTypes";

export function createProfile(id,name,email,phone,dob,city,district,province,country){
    return{
        type: CREATE_PROFILE,
        id: id,
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        city: city,
        district: district,
        province: province,
        country: country
    };
}

export function deleteProfile(id){
    return{
        type: DELETE_PROFILE,
        id: id
    };
}

export function editProfile(id,name,email,phone,dob,city,district,province,country){
    return{
        type: EDIT_PROFILE,
        id: id,
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        city: city,
        district: district,
        province: province,
        country: country
    };
}

export function sortProfile(){
    return{
        type: SORT_PROFILE
    };
}