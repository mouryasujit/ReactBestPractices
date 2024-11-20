import { useState, useCallback } from "react";
import { AddTodo, UpdateTodo } from "../features/TodoSlice";
import { useDispatch } from "react-redux";
import ListTodo from "./ListTodo";

const InputForm = () => {
  const [Input, setInput] = useState("");
  const [Update, setUpdate] = useState(0);
  const [idx, setIdx] = useState();
  const dispatch = useDispatch();
  const handleAddTodo = (value) => {
    if (value?.trim()) {
      dispatch(AddTodo(value));
      setInput("");
    }
  };
  const handleUpdateTodo = useCallback((idx, text) => {
    setInput(text);
    setUpdate(1);
    setIdx(idx);
  }, []);

  const HandleUpdate = (value) => {
    if (value?.trim()) {
      dispatch(UpdateTodo({ idx: idx, text: value }));
      setUpdate(0);
      setInput("");
    }
  };

  const handleSubmit = (e, type) => {
    e.preventDefault(); 
    const value = e.target.inputField.value;
    if (type === 1) {
      HandleUpdate(value);
    } else {
      handleAddTodo(value);
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, Update === 1 ? 1 : 0)}>
        <input
          type="text"
          placeholder="Enter the todo"
          name="inputField"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{Update === 0 ? "Add Todo" : "Update"}</button>
      </form>
      <ListTodo handleUpdateTodo={handleUpdateTodo} />
    </>
  );
};

export default InputForm;
