import {CREATE_PROFILE,DELETE_PROFILE,EDIT_PROFILE,SORT_PROFILE} from '../actions/action-types/actionTypes';

const defaultState={
    profiles: []
};

export function reducer(state=defaultState,action){
    switch(action.type){
        case CREATE_PROFILE:
            console.log('Profile Created');
            /*In Redux, we do not Mutate State. So, I am using the Javascript Spread Operator :)*/
            console.log(state.profiles[0]);
            return {...state,profiles: state.profiles.concat({id: action.id,name: action.name,email: action.email,phone: action.phone,dob: action.dob,city: action.city,district: action.district,province: action.province,country: action.country})}
        case DELETE_PROFILE:
            console.log('Profile Deleted');
            var filteredProfiles=state.profiles.filter((item)=>{return item.id!==action.id});
            return {...state,profiles: filteredProfiles};
        case EDIT_PROFILE:
            console.log('Profile Edited');
            console.log(action.id);
            var nonEditedProfiles=state.profiles.filter((item)=>{return item.id!==action.id});
            var editedProfile={id: action.id,name: action.name,email: action.email,phone: action.phone,dob: action.dob,city: action.city,district: action.district,province: action.province,country: action.country};
            return {...state,profiles: nonEditedProfiles.concat(editedProfile)};
        case SORT_PROFILE:
            console.log('Profile Sorted');
            var sortedProfiles=state.profiles;
            sortedProfiles.sort((a,b)=>a['name'].localeCompare(b['name']));
            /*We could've done this: "return {...state,profiles: sortedProfiles};" But, redux doesn't consider a sorted
            array to be a change in state thus never rerendering the elements that are using that state.*/
            return {...state,profiles: [].concat(sortedProfiles)};
        default:
            return state;
    }
}