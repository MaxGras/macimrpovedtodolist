import {  useContext } from 'react';
import './styles/Header.scss';
import {  TasksDispatchContext } from '../StateContext.js';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
export default function Header(props) {
    const dispatch = useContext(TasksDispatchContext);
  
    
    return (
        <header className='headerLayout'>
            <TextField 
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: '#1976d2' }} />
                  </InputAdornment>
                ),
              }}

            label="Search Bar" size='small'  variant="outlined"
            value={props.searchValues} onChange={e=> props.onSearch(e.target.value)}></TextField>
            <div className='ContolPanelButtons'>
                <Button variant='contained'
                    className='AddButton'
                    onClick={()=> {
                        dispatch({
                            
                            type: 'added',
                            id: uuidv4(),
                           

                        })
                    }}

                >Add</Button>
             
             <Button variant='contained' onClick={()=>{
                    dispatch({
                        type: 'delete',
                        id:props.activeElem
                    })
                }}>Delete</Button>
            </div>
        </header>
    );


   

}