const initialState = {
    id: undefined,
    first: '',
    last: '',
    phone: undefined,
    relation: ''
}

const SET_PRIMARY_INFO = 'SET_PRIMARY_INFO'

export const setPrimaryInfo = (first, last, phone, relation) => {
    console.log(initialState)
    return {
        type: SET_PRIMARY_INFO,
        payload: {first, last, phone, relation}
    }
}

export default function primaryInfo(state = initialState, action){
    switch(action.type){
        case SET_PRIMARY_INFO:
            return{...state, ...action.payload};
        default:
            return state;
    }        
}