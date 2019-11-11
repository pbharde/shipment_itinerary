import React from 'react';
import { newAddress } from '../actions/newAddressAction';
import { connect } from 'react-redux';


class Addresses extends React.Component {
  componentWillMount(){
    this.props.addresses;
  }
  render(){
    return(
      <div>
      {

      }
      </div>
    )
  }
}




export default (Addresses);
