import { useContext } from "react";
import "./styles/Card.scss";
import { TasksContext, TasksDispatchContext } from "../StateContext";


export default function Card({task, activeElem ,onActiveElem }){
    const tasks = useContext(TasksContext);
    const dispatch = useContext(TasksDispatchContext);
   let styleIsActive = {};
   let checked = {};
    if(activeElem === task.id){
        styleIsActive = {backgroundColor: "#d3d3d3"};
    }

    if(task.isDone){
      checked = "checked"
    };
    

    return (
        <li className="CardLayout" style={styleIsActive} onClick={()=>onActiveElem(task.id)}>
     
            <h5 className={checked} onDoubleClick={()=>{
                 dispatch({
                    type:'changed',
                    task:{
                        ...tasks,
                        ...task,
                        isDone: !task.isDone
                    }
                })
            }}>{task.head}</h5>
            <p>{dateFormating(task)}</p>
            <p>{task.decrp}</p>
        
        </li>


    );
}


function dateFormating(task){
    const currentDate = new Date();

    
    let dateValue =  currentDate-task.creationDate;
 
    let result = task.creationDate.getMinutes();
    console.log(dateValue);
    if(dateValue >= 24 * 60 * 60 * 1000||dateValue < -(24 * 60 * 60 * 1000)){
      
        return task.creationDate.getDate() + '/'+ (task.creationDate.getMonth() + 1)+ '/'+ task.creationDate.getFullYear();
    }
    else{
        if(task.creationDate.getMinutes() < 10){
        result = '0' + result;    
        }
        
        return 'today at ' + task.creationDate.getHours() + ':'+ result;
    }

}