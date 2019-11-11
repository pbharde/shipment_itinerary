import { combineReducers } from 'redux';
import newAddressReducers from './newAddressReducers'

export default combineReducers({
  newAddress:newAddressReducers
})
