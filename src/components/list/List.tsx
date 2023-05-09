import React,{useContext} from 'react';
import "./list.css";
import { TodoContext}  from '../../context/Todo';
import {todoContext} from "../../context/Todo"


const List = () => {  
    const {todos, setTodos} = useContext(TodoContext) as todoContext;
    const delHandler = (id:number) => {
        const newTodos = todos.filter((el:any) => el.id !== id);
        setTodos(newTodos);
    }

  return (
  <section className='listContainer'>
    <ul className='list'>
        {
            todos?.map((item:any) => {
                return (
                    <li key={item.id} className={"listItem"} >
                        <span className={"del"} onClick={()=>delHandler(item.id)}>❌</span>
                        <dl>
                            <dt>{item.title}</dt>
                            {item?.description && <dd>{item.description}</dd>}
                        </dl>
                        
                    </li>
                )
            })
        }
    </ul>
</section>
  )
}

export default List;