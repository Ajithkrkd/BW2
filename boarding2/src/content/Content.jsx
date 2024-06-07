import React from "react";
import ItemList from "./ItemList";
const Content = ({ items, handleCheck, handleDelete}) => {
  return (
    
     <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>No items </p>
      )}
     </>

  );
};


export default Content;
