"use client";

import { useState } from "react";
import CreateUpdateProduct from "../../components/CreateProduct";
import ProductList from "../../components/ProductList";

export default function Products() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [toEditItem, setToEditItem] = useState(null);

  const handleButtonClick = () => {
    setShowCreateForm(!showCreateForm);
    setToEditItem(null);
  };

  const handleEditCallback = (item) => {
    setToEditItem(item);
    setShowCreateForm(true);
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={handleButtonClick}>Add Product</button>
      {showCreateForm ? (
        <CreateUpdateProduct
          toEditItem={toEditItem}
          handleCloseClickCallback={() => setShowCreateForm(false)}
        />
      ) : (
        <ProductList handleEditCallback={handleEditCallback} />
      )}
    </div>
  );
}
