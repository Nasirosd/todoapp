"use client";
import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

const AllTodos = () => {
  const getTodos = useSelector((state) => state.todo.todoArray);

  return (
    <div>
      <div className="max-w-xl">
        {getTodos.length > 0 ? (
          getTodos.map((item) => (
            <p className="w-full bg-gray-950 py-2 px-2 text-gray-200 flex items-center justify-between rounded-md mb-2">
              {item.text}

              <span className="text-xl">
                <AiTwotoneDelete />
              </span>
            </p>
          ))
        ) : (
          <p>No todos available</p>
        )}
      </div>
    </div>
  );
};

export default AllTodos;
