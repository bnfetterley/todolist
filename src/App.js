import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  state = {
    text: '',
    items: [],
  };

  handleItemSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.text],
      text: '',
    });
    console.log('submitted', this.state.items);
  };

  handleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: [event.target.value],
    });
  };

  render() {
    console.log(this.state.text);
    return (
      <div>
        <TodoList
          handleOnChange={this.handleOnChange}
          handleItemSubmit={this.handleItemSubmit}
          text={this.props.text}
        ></TodoList>
      </div>
    );
  }
}

export default App;
