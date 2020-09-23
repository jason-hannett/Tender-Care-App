const initialState = {
    id: undefined,
    date: undefined,
    post: '',
    image: ''
}

const SET_POST_INFO = 'SET_POST_INFO'

export const setPostInfo = (date, post, image) => {
    return {
        type: SET_POST_INFO,
        payload: {date, post, image}
    }
}

export default function postInfo(state = initialState, action){
    switch(action.type){
        case SET_POST_INFO:
            return{...state, ...action.payload};
        default:
            return state;
    }        
}