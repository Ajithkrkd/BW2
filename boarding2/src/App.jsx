import { useState } from "react";
import "./App.css";
import Content from "./content/Content";
import Header from "./header/Header";
import "./index.css";
import Footer from "./footer/Footer";
import AddItem from "./content/AddItem";
import SearchItems from "./content/SearchItems";
function App() {
const [items, setItems] = useState(JSON.parse(localStorage.getItem("shopingList")) || []);
const [search,setSearch]= useState('');


  const setItemsToLocal = (items) =>{
    localStorage.setItem("shopingList", items);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    setItemsToLocal(JSON.stringify(listItems))
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    setItemsToLocal(JSON.stringify(listItems))
  };

  return (
    <>
      <Header />
    <div className="flex flex-col justify-center items-center overflow-y-auto max-h-[calc(100vh-64px)]">
    <h1 className="text-2xl font-semibold mb-4">Grocery items</h1>
      <AddItem items={items} setItems={setItems} setItemsToLocal={setItemsToLocal}/>
      <SearchItems search={search} setSearch={setSearch}/>
      <Content
        setItemsToLocal={setItemsToLocal}
        items={items.filter((item)=>((item.name).toLowerCase().includes(search.toLowerCase())))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        setItems={setItems}
      />
      <Footer length={items.length}/>
      </div>
    </>
  );
}

export default App;
