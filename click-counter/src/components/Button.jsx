import React from "react";
import "../Css/Button.css"
export function Button({ texto, isClickButton, onClickFunction }) {
    return (
        <button className={isClickButton ? "btn-click" : "btn-reset"}
            onClick={onClickFunction}
        >
            {texto}
        </button>
    )
}