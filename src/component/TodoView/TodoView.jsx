import React, {useState, useEffect, Fragment} from "react";
import { TodoList } from "./TodoList";
import { todoStatus, todoFilter } from "../../utilities/constants";
import { TodoFilter } from "./TodoFilter";

export function TodoView ()  {
  const [allTodo, setAllTodo] = useState([])
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("")
  const [selectedFilter, setSelectedFilter] = useState(todoFilter[0]);

  const submitTodo = (e) => {
    e.preventDefault()
    if(todo) {
      let todoObj = {
        title: todo,
        status: todoStatus.ACTIVE
      }
      setAllTodo([...todoList, todoObj])
      setTodoList([...todoList, todoObj])
      setTodo("")
    }
  }

  useEffect(() => {
    if(selectedFilter === todoFilter[0] ) {
      setTodoList([...allTodo])  
    } else {
      const updatedTodos = allTodo.filter(itm => itm.status === selectedFilter)
      setTodoList([...updatedTodos])   
    } 
  }, [selectedFilter, allTodo])

  const updateStatus = (title, status) => {
    if(status === todoStatus.COMPLETED) {
      const objIndex = allTodo.findIndex((obj => obj.title === title ));
      allTodo[objIndex].status = todoStatus.COMPLETED;
      const updatedTodos = allTodo.filter(itm => itm.status === selectedFilter)
      setTodoList([...updatedTodos])
      setAllTodo([...allTodo])
    } else {
      const remainingTodos = allTodo.filter(itm => itm.title !== title)
      const updatedTodos = remainingTodos.filter(itm => itm.status === selectedFilter)
      setTodoList([...updatedTodos])
      setAllTodo([...remainingTodos])
    }
  }

  const applyFilter = (selectedFilter) => {
    setSelectedFilter(selectedFilter)
  }

  return (
  <Fragment>
    <h2 className="align-center">My List</h2>
    <form className="todo-card" onSubmit={submitTodo}>
      <input 
        type="text" 
        className="todo-form-input"
        onChange={(e) => setTodo(e.target.value)} 
        value={todo} />
      <TodoList 
        todoList={todoList} 
        updateStatus={updateStatus} />
      {allTodo.length > 0 && 
        <TodoFilter 
          selectedFilter={selectedFilter}
          applyFilter={applyFilter} />
      }
    </form>
  </Fragment>)
}