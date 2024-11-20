/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { RemoveTodo } from "../features/TodoSlice";
import React from "react";

const ListTodo = ({ handleUpdateTodo }) => {
  const ListofTodo = useSelector((state) => state.todos);
  const diapatch = useDispatch();
  console.log(ListofTodo);
  const handleRemove = (id) => {
    diapatch(RemoveTodo(id));
  };
  return (
    <>
      <h1>Todo list hai yeh </h1>
      {ListofTodo.map((Todo, idx) => (
        <li key={Todo.id}>
          <h3>{Todo.text}</h3>
          <button onClick={() => handleUpdateTodo(idx, Todo.text)}>Edit</button>
          <button onClick={() => handleRemove(Todo.id)}>Remove</button>
        </li>
      ))}
    </>
  );
};
export default React.memo(ListTodo);
