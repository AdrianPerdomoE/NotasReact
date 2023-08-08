import React from "react";
import '../Css/Button.css'
export function Button(props: any) {
    const isOperator = (value: string): Boolean => {
        return "+-/*".includes(value)
    }
    return (
        <div className={`btn-container ${isOperator(props.children) ? 'operator' : ''}`.trim()}
            onClick={() => props.click(props.children)}>
            {props.children}
        </ div>
    )
}