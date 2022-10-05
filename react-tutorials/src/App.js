import React, { Component } from 'react';
import PhoneForm from './Components/PhoneForm';
import PhoneInfoList from './Components/PhoneInfoList';

class App extends Component {

  id = 3;

  state = {
    infromation: [
      {
        id: 0,
        name: '홍길동',
        Phone: '010-0000-00001'
      },
      {
        id: 1,
        name: '강진현',
        Phone: '010-0000-00002'
      },
      {
        id: 2,
        name: 'jin',
        Phone: '010-0000-00003'
      },
    ],
    keyword:'',
  }

  handleChange = (e) =>{
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) =>{
    const {infromation} = this.state;
    this.setState({
      infromation: infromation.concat({
          ...data,
          id: this.id++,
      })
    })
  }

  handleRemove = (id) =>{
    const {infromation} = this.state;
    this.setState({
      infromation: infromation.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {infromation} = this.state;
    this.setState({
      infromation: infromation.map(
        info => {
          if (info.id === id){
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList 
          data={this.state.infromation.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;