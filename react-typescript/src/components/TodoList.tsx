import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">

      </div>

      <div className="todos">
        
        </div>
    </div>
    // <div className="todos">
    //   {todos.map((todo) => (
    //     <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
    //   ))}
    // </div>
  );
};

export default TodoList;
