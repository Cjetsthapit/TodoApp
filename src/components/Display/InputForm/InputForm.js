import React,{useState} from 'react';

import styles from './InputForm.module.css';

const InputForm=({addTask})=>{
    const [value, setValue]=useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    
    return(
    <div className={styles.inputform}>
        <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e)=> setValue(e.target.value)} />
        </form>
    </div>
    )
}

export default InputForm;