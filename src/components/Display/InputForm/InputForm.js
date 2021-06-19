import React,{useState} from 'react';

import styles from './InputForm.module.css';
import {Form } from 'react-bootstrap';
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
        <form onSubmit={handleSubmit} className={styles.input}>
        <Form.Control size="lg" type="text" value={value} onChange={(e)=> setValue(e.target.value)}   />
  <br />
    
        </form>
    </div>
    )
}

export default InputForm;