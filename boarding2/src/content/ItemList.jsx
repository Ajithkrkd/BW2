import React from "react";

function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <>
      <ul className="list-none overflow-y-scroll min-h-[300px] max-h-[300px] w-60 space-y-4">


        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between px-4 py-2 bg-white shadow-md rounded-lg"
          >
            <div className="flex items-center">
              <input
                className="form-checkbox h-5 w-5 cursor-pointer"
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                className={`cursor-pointer ml-2 ${
                  item.checked ? "text-blue-600" : ""
                }`}
              >
                {item.name}
              </label>
            </div>
            <i
              className="bx bx-trash text-xl cursor-pointer text-red-500"
              onClick={() => handleDelete(item.id)}
            ></i>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
