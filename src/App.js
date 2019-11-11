import React from 'react';
import './App.css';
import AddAddress from './components/AddAddress';
import Addresses from './components/Addresses';
import { Provider } from 'react-redux';
import store from './store'


class App extends React.Component {
  render(){
    console.log(store);
    console.log(this.props);
    return (
      <Provider store={store}>
      <div>
          <AddAddress />
          <Addresses />
      </div>
      </Provider>
    );
  }
}

export default App;
