import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { newAddress } from '../actions/newAddressAction';


class AddAddress extends React.Component {
  constructor(props){
    super(props);
    this.state={
      sAddress:'',
      sName:''
    }
  }

   handleSAddress = (e) => {
     e.preventDefault();
    console.log(e.target.value);
    this.setState({
      sAddress:e.target.value
    },
    ()=>console.log(this.state.sAddress)
  )
}

  handleSName = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      sName:e.target.value
    },
    ()=>console.log(this.state.sName)
  )
  }

  handleAdd = (e) => {
    e.preventDefault();
    const address = {
      sName:this.state.sName,
      sAddress:this.state.sAddress
    }
    this.props.newAddress(address)
  }


  render(){
    console.log(this.props.address);
    let address = this.state.sAddress;
    console.log(address);
    return (
      <div className="form">
          <label htmlFor="sName">Stop Name:</label>
          <input type="sName" id="sName" placeholder="Enter Stop Name" name="sName" onChange={this.handleSName}/>
          <label htmlFor="sAddress">Stop Address:</label>
          <input type="sAddress" id="sAddress" placeholder="Enter Stop Address" name="sAddress" onChange={this.handleSAddress}/>
          <button onClick={this.handleAdd} type="submit">ADD</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  newAddress:state.newAddress.address
})

export default connect(mapStateToProps,{ newAddress })(AddAddress);
