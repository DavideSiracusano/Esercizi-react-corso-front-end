import ToDoItem from "../molecules/ToDoItem";
import FilterGroup from "../molecules/FilterGroup";

function ToDoList({ todos, toggleTodo, deleteTodo, filter, setFilter }) {
  return (
    <div className="todo-list-container">
      <FilterGroup currentFilter={filter} setFilter={setFilter} />

      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            completed={todo.completed}
            onToggle={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
