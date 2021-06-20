import React from 'react';
import styles from'./Tracker.module.css';

const Tracker=(props)=>(
    <div className={styles.tracker}>

            <div>Total= {props.totalTasks}</div>
            <div>Completed= {props.doneTasks}</div>
            <div>Remaining= {props.totalTasks-props.doneTasks}</div>

            
            
            
    </div>

)
export default Tracker;