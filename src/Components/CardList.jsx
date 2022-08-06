import React from "react";
import Card from "./Card";

export default function CardList() {
    const data = [
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
    ];
    const handleName = (firstName, lastName) => {
        alert(`Hello ${firstName} ${lastName}. How are you?`);
    };
    // Hello John Doe How are you?
    return (
        <div>
            {data.map((item, key) => (
                <Card fathiza={item} key={key} handleName={handleName} />
            ))}
        </div>
    );
}
