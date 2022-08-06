import React, { Component } from "react";
import Done from "../Assets/done.png";
import Button from "./Button";
export default class Todo extends Component {
    render() {
        return (
            <div>
                <h1 className={this.props.todo.done ? "todo" : "todo-item"}>
                    Todo {this.props.todo.id}
                </h1>
                <p>{this.props.todo.text}</p>
                <img
                    src={Done}
                    alt="done"
                    onClick={() => this.props.handleDone(this.props.todo.id)}
                />
                <Button
                    textButton="X"
                    onClick={() => this.props.deleteTodo(this.props.todo.id)}
                />
            </div>
        );
    }
}
