import React, { useState } from "react";

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
  
  const onDelete = (index) => {
    console.log("delete", index);
    const newArray = allTodo?.filter((todo,ind) => ind !== index);
    console.log(newArray);
    setallTodo(newArray);
  };
  return (
    <>
      {" "}
      <div
        style={{
          background: "grey",
          textAlign: "center",
          padding: "20px",
          margin: "10px",
        }}
      >
        <form onSubmit={handleNewTodo}>
          <div>
            <label style={{ color: "white" }}>Todo Name : </label>

            <input
              name="newTodoName"
              onChange={handleOnChange}
              value={newTodo?.newTodoName}
            />
          </div>
          <div>
            <label style={{ color: "white" }}>Description : </label>
            <input
              name="newTodoDescription"
              onChange={handleOnChange}
              value={newTodo?.newTodoDescription}
            />
          </div>

          <button
            style={{
              marginTop: "10px",
              padding: "5px",
              border: "1px solid black",
              borderRadius: "25px",
            }}
            type="submit"
          >
            {" "}
            Create
          </button>
        </form>
      </div>
      {allTodo?.length > 0 ? (
        //   <TodoList allTodo={allTodo} setallTodo={setallTodo} /> :
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "grey",
            padding: "10px",
          }}
        >
          <div>
            <table>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Todo Name</th>
                  <th>Description</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allTodo?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.newTodoName}</td>
                    <td>{item?.newTodoDescription}</td>
                    <td>
                      {
                        <button
                          onClick={() => {
                            onDelete(index);
                          }}
                        >
                          Delete
                        </button>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}> No Todo Available </div>
      )}
    </>
  );
};

export default SearchBar;
