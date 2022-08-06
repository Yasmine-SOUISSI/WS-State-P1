import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export default class TodoList extends Component {
    state = {
        todos: [
            { id: 1, text: "Learn React", done: false },
            { id: 2, text: "Learn Vue", done: false },
        ],
    };
    handleDone = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) =>
                // if (todo.id === id) {
                //     return {
                //         ...todo,
                //         done: !todo.done,
                //     };
                // } else return todo;
                todo.id === id ? { ...todo, done: !todo.done } : todo
            ),
        });
    };
    addTodo = (todo) => {
        const newTodo = {
            id: this.state.todos.length + 1,
            text: todo,
            done: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    };
    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id),
        });
    };
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                {this.state.todos.map((todo, key) => (
                    <Todo
                        key={key}
                        todo={todo}
                        handleDone={this.handleDone}
                        deleteTodo={this.deleteTodo}
                    />
                ))}
                <AddTodo addTodo={this.addTodo} />
            </div>
        );
    }
}
