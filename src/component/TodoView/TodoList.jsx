import React, {Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { todoStatus } from "../../utilities/constants";

export function TodoList ({todoList, updateStatus})  {
  return (
  <Fragment>
    {todoList && todoList.map((itm, index) => (
      <div key={index} className="todo-item">
        <div className="todo-title">
          {
            itm.status === todoStatus.ACTIVE ?
            <FontAwesomeIcon 
              icon={faSquare} 
              className="fa-icons"
              onClick={() => updateStatus(itm.title, todoStatus.COMPLETED)} />
            :
            <FontAwesomeIcon 
              icon={faSquareCheck}  
              className="fa-icons"
              color="green" />
          }
          <p>{itm.title}</p>
        </div>
        <FontAwesomeIcon 
          icon={faClose} 
          className="todo-delete-icon fa-icons" 
          color="red" 
          onClick={() => updateStatus(itm.title, todoStatus.DELETED) } />
      </div>
    ))}
  </Fragment>)
}