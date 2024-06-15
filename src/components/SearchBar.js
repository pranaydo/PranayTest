import React, { useState } from "react";
import TodoList from "./TodoList";

const SearchBar = () => {
  const [newTodo, setNewTodo] = useState({});
  const [allTodo, setallTodo] = useState([]);

  const handleNewTodo = (event) => {
    event.preventDefault();
    // const newTodoName = formData.get("newTodo")

    const updatedAllTodo = [...allTodo];
    updatedAllTodo.push(newTodo);
    setallTodo(updatedAllTodo);

    setNewTodo({
      newTodoName: "",
      newTodoDescription: "",
    });
  };
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewTodo((values) => ({ ...values, [name]: value }));
  };
  console.log("allTOdo", allTodo);

  return (
<>    <div style={{background:'grey' , textAlign:'center' , padding:'20px', margin:'10px'}}>
      <form onSubmit={handleNewTodo}>
        <div>
        <label style={{color:'white'}}>Todo Name : </label>

        <input
          name="newTodoName"
          onChange={handleOnChange}
          value={newTodo?.newTodoName}
        />
        </div>
        <div>
        <label style={{color:'white'}}>Description : </label>
        <input
          name="newTodoDescription"
          onChange={handleOnChange}
          value={newTodo?.newTodoDescription}
        />
        </div>

        <button style={{marginTop:'10px', padding:"5px", border:'1px solid black', borderRadius:'25px'}} type="submit"> Create</button>
      </form>
    </div>
      <TodoList allTodo={allTodo} />
</>
  );
};

export default SearchBar;
