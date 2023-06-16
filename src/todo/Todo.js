import axios from "axios";
import React, { lazy, Suspense, useEffect, useState } from "react";

const TodoItem = lazy(() => import("./TodoItem"));

function Todo() {
  const [list, setList] = useState();
  const [check, setCheck] = useState(false);
  const [currentTodo, setCurrentTodo] = useState("");
  const reqUrl = "https://www.pre-onboarding-selection-task.shop/todos";
  const token = localStorage.token;

  const getTodos = async () => {
    try {
      const { data } = await axios({
        url: reqUrl,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
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
        url: reqUrl,
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
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
        url: `${reqUrl}/${id}`,
        method: "put",
        headers: {
          Authorization: `Bearer ${token}`,
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
        url: `${reqUrl}/${id}`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
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

  if (!localStorage.token) {
    <div></div>;
  } else {
    return (
      <div className="w-[100%] py-8 flex flex-col justify-center items-center">
        <div className="text-3xl font-semibold p-3">TODO List</div>
        <form className="p-5 w-[80vw] md:w-[50vw] flex justify-center">
          <input
            placeholder="할 일을 추가해보세요 :)"
            value={currentTodo || ""}
            onChange={(event) => setCurrentTodo(event.target.value)}
            data-testid="new-todo-input"
            className="bg-gray-200 w-[70%] px-3 py-2 mx-1 rounded-lg"
          />
          <button
            onClick={createTodos}
            data-testid="new-todo-add-button"
            className="bg-sky-200 hover:bg-sky-300 px-3 py-2 mx-1 rounded-lg"
          >
            추가
          </button>
        </form>
        <div>
          {list &&
            list.map((item) => (
              <div key={item.id} className="">
                <Suspense fallback={<div></div>}>
                  <TodoItem
                    item={item}
                    updateTodos={updateTodos}
                    deleteTodos={deleteTodos}
                  />
                </Suspense>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default React.memo(Todo);
