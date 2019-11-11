import axios from 'axios';

export function addAddress(){
  return(dispatch)=>{
    return axios.get("https://dev-api.shipwell.com/v2/locations/addresses/validate/")
    .then((response)=>{
      dispatch(getAddress(response.geocoded_address))
    })
  }
}

export function getAddress (address){
  return{
    type:GET_ADDRESS,
    address:address
  }
}
