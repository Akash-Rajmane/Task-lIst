import React,{useContext, useState} from 'react';
import "./task.css"
import { TodoContext,todoContext } from '../../context/Todo';

const Task = () => {
    const {todos,setTodos} = useContext(TodoContext) as todoContext;
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const descriptionChangeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value);
    }
    
    const formSubmitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        if(title.length<3 && description===""){
            alert("Please enter the task with 3 or more characters OR task should have a description")
            return;
        }

        setTodos([...todos, {id:new Date().getTime(), title, description}])
        setTitle("");
        setDescription("");
    } 

  return (
    <form className={"formContainer"} onSubmit={formSubmitHandler}  autoComplete="off">
        <label htmlFor="task" id="label1">Task <span className={"mandate"}>*</span></label>
        <input type="text" value={title} id="task" onChange={titleChangeHandler} required/>
        <label htmlFor="description" id="label2">Description</label>
        <textarea  id="description"  rows={5} onChange={descriptionChangeHandler} value={description}></textarea>
        <button className={"btn"} type="submit">Add Task</button>
    </form>
  )
}

export default Task;