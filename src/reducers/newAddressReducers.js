import { GET_ADDRESSES, NEW_ADDRESS } from '../actions/types';

const initialState = {
  addresses:[],
  address:{}
}

export default function(state=initialState,action){
  switch(action.type){
    case GET_ADDRESSES:
    return{
      ...state,
      addresses:action.payload
    }
    case NEW_ADDRESS:
    return{
      ...state,
      address:action.payload
    }
    default:
    return {...state};
  }
}
