import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [list, setList] = useState();
  const [check, setCheck] = useState(false);
  const [currentTodo, setCurrentTodo] = useState("");

  const getTodos = async () => {
    try {
      const { data } = await axios({
        url: "https://www.pre-onboarding-selection-task.shop/todos",
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setList(data);
    } catch (err) {
      console.log(err);
    }
  };

  const createTodos = async (event) => {
    event.preventDefault();
    setCurrentTodo("");
    try {
      await axios({
        url: "https://www.pre-onboarding-selection-task.shop/todos",
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
        data: {
          todo: currentTodo,
        },
      });
      setCheck(!check);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodos = async (id, todo, completed) => {
    try {
      await axios({
        url: `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
        method: "put",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
        data: {
          todo: todo,
          isCompleted: completed,
        },
      });
      setCheck(!check);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodos = async (id) => {
    try {
      await axios({
        url: `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setCheck(!check);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, [check]);

  return (
    <div className="w-[100%] pt-10 flex flex-col justify-center items-center">
      <div className="text-3xl p-3">Todo List</div>
      <form className="p-5">
        <input
          placeholder="내용을 입력하세요"
          value={currentTodo || ""}
          onChange={(event) => setCurrentTodo(event.target.value)}
          data-testid="new-todo-input"
        />
        <button onClick={createTodos} data-testid="new-todo-add-button">
          추가
        </button>
      </form>
      {list &&
        list.map((item) => (
          <div className="p-3" key={item.id}>
            <TodoItem
              item={item}
              updateTodos={updateTodos}
              deleteTodos={deleteTodos}
            />
          </div>
        ))}
    </div>
  );
}
