"use client";
import { useEffect, useState } from "react";
import CreateUpdateProduct from "../components/CreateProduct";
import ProductList from "../components/ProductList";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [toEditItem, setToEditItem] = useState(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
    setToEditItem(null);
  };

  useEffect(() => {
    if (toEditItem) {
      setShowForm(true);
    }
  }, [toEditItem]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
      <div>
        {!showForm && (
          <button
            onClick={handleButtonClick}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Product
          </button>
        )}
        <br></br>
        <br></br>
      </div>
      {showForm ? (
        <CreateUpdateProduct
          toEditItem={toEditItem}
          handleCloseClickCallback={() => setShowForm(false)}
        />
      ) : (
        <ProductList handleEditCallback={setToEditItem} />
      )}
    </div>
  );
}
