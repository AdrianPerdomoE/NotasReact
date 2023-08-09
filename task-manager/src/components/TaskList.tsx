import { TaskInput } from "./TaskInput"
import "../Css/TaskList.css"
import React, { useState } from "react"
import { Task } from "./Task";

export function TaskList(): JSX.Element {
    const [tasks, setTasks] = useState(new Array<{ text: string, completed: boolean }>);
    const add = (task: { text: string, completed: boolean }): void => {
        setTasks([task, ...tasks]);
    }

    const erase = (id: number): void => {
        const filteredTasks = tasks.filter((val, ind) => { return ind !== id });
        setTasks(filteredTasks);
    }

    const completeTask = (id: number): void => {
        const newTasks = tasks.map((val, ind) => {
            if (id === ind) {
                val.completed = !val.completed
            }
            return val
        })
        setTasks(newTasks);
    }
    return (<>

        <div className="task-list-container">
            <TaskInput
                add={add}></TaskInput>
            {tasks.map((task: { text: string, completed: boolean }, index: number) => {
                return (<Task
                    key={index}
                    text={task.text}
                    completed={task.completed}
                    id={index}
                    takeOut={erase}
                    complete={completeTask}
                />)
            })}
        </div>
    </>)
}