import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: 'all',
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
    console.log(todo, this.state.todos);
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateTodoToShow = (string) => {
    this.setState({
      todoToShow: string,
    });
  };

  handleDeleteTodo = (id) => {
    console.log(
      'function called',
      id,
      this.state.todos.filter((todo) => todo.id !== id)
    );

    let newtodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({
      todos: newtodos,
    });

    console.log(this.state.todos);
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todoToShow === 'active') {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div className="todoListMain">
        <TodoForm onSubmit={this.addTodo} />

        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            id={todo.id}
            text={todo.text}
            onDelete={() => this.handleDeleteTodo(todo.id)}
          />
        ))}

        <div>
          <button onClick={() => this.updateTodoToShow('all')}>all</button>
          <button onClick={() => this.updateTodoToShow('active')}>
            active
          </button>
          <button onClick={() => this.updateTodoToShow('complete')}>
            complete
          </button>
        </div>
      </div>
    );
  }
}
