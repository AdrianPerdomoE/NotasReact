import React from "react";
import "../Css/Counter.css"
export function Counter({ numClicks }) {
    return (
        <div className="counter">
            {numClicks}
        </div>
    )
}