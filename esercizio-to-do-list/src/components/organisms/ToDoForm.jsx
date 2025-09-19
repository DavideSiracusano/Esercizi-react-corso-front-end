import { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function ToDoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="inserisci una toDo"
        />
        <Button type="submit" children="invia" />
      </form>
    </>
  );
}

export default ToDoForm;
