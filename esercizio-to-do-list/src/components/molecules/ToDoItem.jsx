import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";

function ToDoItem({ completed, onToggle, text, deleteTodo, id }) {
  return (
    <li className="todo-item" key={id}>
      <h3 className={completed ? "completed" : ""}>{text}</h3>
      <Checkbox checked={completed} onChange={onToggle} />
      <Button onClick={deleteTodo}>Elimina</Button>
    </li>
  );
}

export default ToDoItem;
