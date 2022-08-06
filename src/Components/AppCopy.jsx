import React from "react";
import Button from "./Button";
import CardList from "./CardList";

export default function AppCopy() {
    return (
        <div>
            <Button
                className="Button"
                type="submit"
                textButton="Hello"
                onClick={() => alert("Hello!")}
                disabled={false}
            />
            <Button textButton="Button 2" />
            <Button />
            <CardList />
        </div>
    );
}
