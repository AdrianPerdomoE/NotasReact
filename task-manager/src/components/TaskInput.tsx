import { useState } from "react";
import "../Css/TaskInput.css"
export function TaskInput({ add }: { add: Function }) {
    const [currentText, setText] = useState('')
    const manageEvent = (e: Event) => {
        e.preventDefault()
        if (!currentText) { return }
        const task = {
            text: currentText,
            completed: false
        };
        add(task);
    }
    return (
        <form className="task-form"
            onChange={(e: any) => {
                setText(e.target.value)
            }}>
            <input type="text" className="task-input" placeholder="Write a task" name="text" id="text" />
            <button className="task-btn" onClick={(e: any) => manageEvent(e)}>
                Add task
            </button>
        </form>
    )
}