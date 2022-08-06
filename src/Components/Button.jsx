import React from "react";

export default function Button({
    onClick,
    className,
    type,
    disabled,
    textButton,
}) {
    return (
        <button
            onClick={onClick}
            className={className}
            type={type}
            disabled={disabled}
        >
            {textButton}
        </button>
    );
}
Button.defaultProps = {
    className: "",
    type: "button",
    disabled: false,
    textButton: "Default Button",
    onClick: () => {},
};
