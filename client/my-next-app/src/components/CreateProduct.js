import { useState } from "react";
import { createProduct, updateProduct } from "../../utils/api";

export default function CreateUpdateProduct({
  toEditItem,
  handleCloseClickCallback,
}) {
  const [name, setName] = useState(toEditItem ? toEditItem.name : "");
  const [price, setPrice] = useState(toEditItem ? toEditItem.price : "");
  const [quantity, setQuantity] = useState(toEditItem ? toEditItem.quantity : "");

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    const productData = { name, price, quantity };

    try {
      if (toEditItem) {
        await updateProduct(toEditItem.id, productData);
      } else {
        await createProduct(productData);
      }
      handleCloseClickCallback();
    } catch (error) {
      console.error("Failed to save product", error);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">{toEditItem ? "Edit Product" : "Create Product"}</h1>
      <form onSubmit={handleSaveProduct} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
          <input
            type="text"
            id="price"
            className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
          <input
            type="number"
            id="quantity"
            className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </div>
        <div className="flex justify-end gap-x-6">
          <button
            type="button"
            onClick={handleCloseClickCallback}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Close
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
