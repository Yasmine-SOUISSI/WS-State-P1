import React, { Component } from "react";
import Card from "./Card";

class CardListClass extends Component {
    state = {
        data: [
            {
                id: 1,
                firstName: "John",
                lastName: "Doe",
            },
            {
                id: 2,
                firstName: "Jane",
                lastName: "Doe",
            },
            {
                id: 3,
                firstName: "Jack",
                lastName: "Doe",
            },
        ],
    };
    handleName = (firstName, lastName) => {
        alert(`Hello ${firstName} ${lastName}. How are you?`);
    };
    componentDidMount() {
        console.log("ComponentDidMount");
    }
    componentDidUpdate() {
        console.log("ComponentDidUpdate");
    }
    componentWillUnmount() {
        console.log("ComponentWillUnmount");
    }

    render() {
        // Hello John Doe How are you?
        return (
            <div>
                {/* If show is true SHOW card list 
                without else 
                 */}
                {this.props.show &&
                    this.state.data.map((item, key) => (
                        <Card
                            fathiza={item}
                            key={key}
                            handleName={this.handleName}
                        />
                    ))}
            </div>
        );
    }
}
export default CardListClass;
