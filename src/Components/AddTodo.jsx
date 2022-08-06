import React, { Component } from "react";
import Button from "./Button";

export default class AddTodo extends Component {
    state = {
        todo: "",
    };
    handleChange = (event) => {
        this.setState({
            todo: event.target.value,
        });
    };

    render() {
        console.log(this.state.todo);
        return (
            <div>
                <input
                    type="text"
                    placeholder="Add Todo"
                    onChange={this.handleChange}
                />
                <Button
                    textButton="Add todo"
                    onClick={() => this.props.addTodo(this.state.todo)}
                />
            </div>
        );
    }
}
