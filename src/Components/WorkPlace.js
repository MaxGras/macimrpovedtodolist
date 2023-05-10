
import "./styles/WorkPlace.scss";
import { TasksContext,TasksDispatchContext } from "../StateContext.js";
import { useContext, useState } from "react";
export default function WorkPlace(props){
   
    let dispatch = useContext(TasksDispatchContext);
    let tasks = useContext(TasksContext);

    const[newValue, setNewValue] = useState(tasks.find(obj=>obj.id === props.activeElem));
    if(newValue.id !==props.activeElem){
        setNewValue(tasks.find(obj=>obj.id === props.activeElem));
    }

    function handleHeadChange(e){
        setNewValue({
            ...newValue,
            head: e.target.value
        });
        dispatch({
            type:'changed',
            task:{
                ...tasks,
                ...newValue,
                head: e.target.value,
            }
        });
    }
    function handleTimeChange(e){
        setNewValue({
            ...newValue,
            creationDate: new Date(e.target.value)
        });
        dispatch({
            type:'changed',
            task:{
                ...tasks,
                ...newValue,
                creationDate: new Date(e.target.value)
            }
        });
    }

    function handleDescrpChange(e){
        setNewValue({
            ...newValue,
            decrp: e.target.value
        });
        dispatch({
            type:'changed',
            task:{
                ...tasks,
                ...newValue,
                decrp: e.target.value,
            }
        });
    }

    function dateLocaleChanger(date,gmt){ // because datetime-local has no timezones
        const newCurrentDate = new Date(date);
        newCurrentDate.setHours(newCurrentDate.getHours()+gmt);
        return newCurrentDate.toISOString().slice(0, 16);
    }

    return (
        <div className="WorkPlaceLayout">
            <input type="datetime-local"  value={dateLocaleChanger(newValue.creationDate,3)} onChange={e=>handleTimeChange(e)}/>
            <input type="text" maxLength={60} value={newValue.head} onChange={e=>handleHeadChange(e)}/>
            <textarea placeholder="Що ви сьогодні цікавого зробили?" value={newValue.decrp} onChange={e=>handleDescrpChange(e)} />
           


        </div>
        

    );
}