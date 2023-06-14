import React, { useEffect } from "react";

export default function Todo() {
  useEffect(() => {
    if (!localStorage.token) {
      navigator("/signin");
    }
  }, []);

  return <div>Todo</div>;
}
