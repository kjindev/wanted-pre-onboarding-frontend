import React, { useEffect, useRef, useState } from "react";

export default function TodoItem({ item, updateTodos, deleteTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef();
  const checkRef = useRef();

  useEffect(() => {
    if (item.isCompleted) {
      checkRef.current.checked = true;
    } else if (!item.isCompleted) {
      checkRef.current.checked = false;
    }
  }, [item.isCompleted]);

  if (isEditing) {
    return (
      <li>
        <label>
          <input type="checkbox" ref={checkRef} />
          <input
            ref={editRef}
            placeholder={item.todo}
            data-testid="modify-input"
          />
        </label>
        <button
          onClick={() => {
            updateTodos(item.id, editRef.current?.value, item.isCompleted);
            setIsEditing(false);
          }}
          className="p-2"
          data-testid="submit-button"
        >
          제출
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="p-2"
          data-testid="cancel-button"
        >
          취소
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            ref={checkRef}
            onClick={() => updateTodos(item.id, item.todo, !item.isCompleted)}
          />
          <span className="w-[300px]">{item.todo}</span>
        </label>
        <button
          onClick={() => setIsEditing(true)}
          className="p-2"
          data-testid="modify-button"
        >
          수정
        </button>
        <button
          onClick={() => deleteTodos(item.id)}
          className="p-2"
          data-testid="delete-button"
        >
          삭제
        </button>
      </li>
    );
  }
}
