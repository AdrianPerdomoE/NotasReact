import "../Css/Task.css"
import { IoCloseSharp } from "react-icons/io5";

export function Task({ id, text, completed, complete, takeOut }: { text: string, completed: boolean, id: number, takeOut: Function, complete: Function }) {
    return (
        <div className={"task-container" + (completed ? " done" : "")}
        >
            <div className="task-text"
                onClick={() => complete(id)}>
                {text}
            </div>
            <div className="icon-container"
                onClick={() => takeOut(id)}>
                <IoCloseSharp className="task-icon"></IoCloseSharp>
            </div>
        </div>

    )
}