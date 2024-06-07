import React, { useRef, useState } from "react";

function AddItem({items,setItems, setItemsToLocal}) {
  const [newItem, setNewItem] = useState('');

  const inputRef = useRef(null);

  const addItemToList =(newItem)=>{
    if(newItem){
        const id = items.length ? items[items.length - 1].id + 1 : 0;
        const newItemToAdd = {
            id : id,
            checked:false,
            name: newItem
        }
        const listItems = [...items, newItemToAdd];
        setItems(listItems);
        setItemsToLocal(JSON.stringify(listItems))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newItem === "") {
        console.log('no new  item')
        return;
    }
    addItemToList(newItem);
    console.log(newItem);
    setNewItem('')
    inputRef.current.focus();
  }
  return (
    <div className="my-4">
      <input
      ref={inputRef}
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        className="border border-gray-300 p-2 outline-none"
        placeholder="Item Name"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default AddItem;
