
import { macDB } from './macDB.js';
import Header from './Components/Header.js';
import Content from './Components/Content.js';
import { useReducer, useState } from 'react';
import { TasksContext, TasksDispatchContext } from './StateContext.js';



function App() {
  const [tasks, dispatch] = useReducer(taskReducer, macDB);
  const [activeElem, setActiveElem] = useState(tasks[0].id);
  const [searchValues, setSerchValues] = useState("")
  console.log(activeElem);

  function handlerActiveElem(childId) {
    setActiveElem(childId);
  }

  function handlerSerchElem(childValue){
    setSerchValues(childValue);
  }


  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <div style={{ height: '100vh' }}>
          <Header activeElem={activeElem} onActiveElem={handlerActiveElem} onSearch = {handlerSerchElem} searchValues = {searchValues} />
          <Content activeElem={activeElem} onActiveElem={handlerActiveElem} searchValues = {searchValues} />
        </div>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>

  );
}




function taskReducer(tasks, action) {

  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        head: 'Нова замітка',
        decrp: '',
        isDone: false,
        creationDate: new Date()
      }]
    }
    case 'delete': {
      return tasks.filter(t => t.id !== action.id);
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    default: {
      throw Error('Unknow action - ' + action.type)
    }

  }


}
export default App;
