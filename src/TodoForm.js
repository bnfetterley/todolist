import React, { Component } from 'react';
import shortid from 'shortid';

export default class TodoForm extends Component {
  state = {
    text: '',
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('submit hit');

    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });

    this.setState({
      text: '',
    });
  };

  render() {
    console.log(this.state.text);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            value={this.state.text}
            placeholder="enter task"
            onChange={(event) => this.handleOnChange(event)}
          />
          <button onClick={this.handleSubmit} type="submit">
            add
          </button>
        </form>
      </div>
    );
  }
}
