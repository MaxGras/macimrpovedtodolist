import './styles/Aside.scss'
import Card from './Card';
import { TasksContext } from '../StateContext.js';
import { useContext } from 'react';
export default function Aside(props){

    const tasks = useContext(TasksContext);
    // const taskList = tasks.map(todo=>{
    //     return <Card key={todo.id} task={todo} activeElem ={props.activeElem} onActiveElem = {props.onActiveElem} />
    // });
    let taskList = [];
    const filtredList = tasks.filter((task)=>task.decrp.toLowerCase().includes(props.searchValues.toLowerCase().trim()))
    if(props.searchValues === ''){
        taskList = tasks.map(todo=>{
            return <Card key={todo.id} task={todo} activeElem ={props.activeElem} onActiveElem = {props.onActiveElem} />
        });
    }
    else{
        taskList = filtredList.map(todo=>{
            return <Card key={todo.id} task={todo} activeElem ={props.activeElem} onActiveElem = {props.onActiveElem} />
        });
        
    }

    

    return (
    <aside className='asideLayout' >
        
        
        <ul>{taskList.length === 0 ? <p>No such task</p> : taskList }</ul>
        

    </aside>
    );
}