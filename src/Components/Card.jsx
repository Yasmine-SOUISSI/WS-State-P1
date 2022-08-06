import React from "react";
import Button from "./Button";

export default function Card({
    fathiza: { id, firstName, lastName },
    handleName,
}) {
    return (
        <div>
            <h1>Card</h1>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <Button
                textButton="Handle Name"
                onClick={() => handleName(firstName, lastName)}
                disabled={false}
                className="btn btn-primary"
                type="button"
            />
        </div>
    );
}
