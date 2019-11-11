import { NEW_ADDRESS,GET_ADDRESSES } from './types';


export const newAddress = address => dispatch => {
  console.log('getAddress = '+address);
  const url = "https://dev-api.shipwell.com/v2/locations/addresses/validate/";
    return fetch(url,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(
          {
            "formatted_address": address.sAddress
          }
        )
      })
    .then(res=>res.json())
    .then((data)=>{
      console.log(data.geocoded_address)
      dispatch({
        type:NEW_ADDRESS,
        payload:data.geocoded_address
      })
    })

}


export const getAddresses = (addresses) => dispatch => {
    console.log("getAddresses");
      return(
        type:'GET_ADDRESSES',
        payload:addresses
      )

}
