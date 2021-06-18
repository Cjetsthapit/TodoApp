import React from 'react';
import styles from './Todo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo=({task,removeTask, index,toggleTask})=>(
    <div className={styles.todo} style={{textDecoration: task.isCompleted ? "line-through" : "",
        color:task.isCompleted ? "red" : ""
    }}>
         
        
        <div>
            <input
            className={styles.tick}
            type="checkbox"
            checked={task.isCompleted}
            value={task.isCompleted}
            onChange={() => toggleTask(index)}
        />
        {task.text}
            

        </div>
        <button onClick={()=>removeTask(index)}><FontAwesomeIcon icon={faTrash} /></button>
        
    </div>
)
export default Todo;