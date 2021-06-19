import React, {useState} from 'react';
import styles from './Display.module.css';
import Todo from './Todo/Todo';
import InputForm from './InputForm/InputForm';
import Tracker from './Tracker'
const Display=(props)=>{
    const [tasks, setTasks] = useState([
        { text: "Hello World", isCompleted: false },
        { text: "Type your thoughts", isCompleted: false },
        { text: "They will be stored permanently", isCompleted: false }
      ]);
      const addTask=(text)=>{
        const newTasks=[{text},...tasks];
        setTasks(newTasks);
      }
      const removeTask=(index)=>{
          const newTasks=[...tasks];
          newTasks.splice(index,1);
          setTasks(newTasks)
      }
      const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setTasks(newTasks);
      };
    return(
        <div className={styles.display}>
            
            <InputForm addTask={addTask}/>
            <Tracker  totalTasks={tasks.length}
        doneTasks={tasks.filter((task) => task.isCompleted).length}/> 
            {
                tasks.map((task,index)=>(
                    <Todo
                    key={index}
                    index={index}
                    task={task}
                    removeTask={removeTask}
                    toggleTask={toggleTask}
                    />
                ))
            }
            
        </div>
    );
}
export default Display;