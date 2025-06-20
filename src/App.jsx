import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ViewItems from "./components/ViewItems";
import AddItem from "./components/AddItem";
import ItemModal from "./components/ItemModal";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("view");
  const [items, setItems] = useState([]);
  const [modalItem, setModalItem] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Add item handler
  const handleAddItem = (item) => {
    setItems((prev) => [...prev, { ...item, id: Date.now() }]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
    setPage("view");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 font-sans">
      <Navbar page={page} setPage={setPage} />
      {showSuccess && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-8 py-3 rounded-lg shadow-lg font-semibold z-50">
          Item successfully added
        </div>
      )}
      {page === "view" && (
        <ViewItems items={items} setModalItem={setModalItem} />
      )}
      {page === "add" && <AddItem onAdd={handleAddItem} />}
      {modalItem && (
        <ItemModal item={modalItem} onClose={() => setModalItem(null)} />
      )}
    </div>
  );
}
