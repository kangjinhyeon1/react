import React, { Component } from 'react';
import PhoneForm from './Components/PhoneForm';

class App extends Component {

  id = 0;

  state = {
    infromation: [],
  }
  handleCreate = (data) =>{
    const {infromation} = this.state;
    this.setState({
      infromation: infromation.concat({
          ...data
      })
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        {JSON.stringify(this.state.infromation)}
      </div>
    );
  }
}

export default App;