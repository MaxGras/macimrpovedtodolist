import React from 'react';
import Aside from './Aside.js';
import WorkPlace from './WorkPlace.js';
import './styles/Content.scss';
export default function Content( props ) {
  return (
    
    <div className='contentLayout'>
      <Aside activeElem={props.activeElem} onActiveElem = {props.onActiveElem} searchValues={props.searchValues} />
      <WorkPlace activeElem={props.activeElem} onActiveElem = {props.onActiveElem}  />
      </div>
    
  );
}
    



