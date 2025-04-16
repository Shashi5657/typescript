import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);


  
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };



  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setIsEdit(false);
  };
  return (
    <form className="single__todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {isEdit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e: React.FormEvent) => setEditTodo(e.target.value)}
          className="single__todo--text"
        />
      ) : todo.isDone ? (
        <s className="single__todo--text">{todo.todo}</s>
      ) : (
        <span className="single__todo--text">{todo.todo}</span>
      )}

      <div>
        <span className="icons">
          <FaEdit
            onClick={() => {
              if (!isEdit && !todo.isDone) setIsEdit(!isEdit);
            }}
          />
        </span>
        <span className="icons">
          <MdDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icons">
          <IoCheckmarkDoneCircle onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
