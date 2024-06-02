import { useState, useEffect } from "react";
import { getProducts } from "../../utils/api";
import Product from "./Product";

export default function ProductList({ handleEditCallback }) {
    const [items, setItems] = useState([]);

    async function fetchProducts() {
        try {
            const products = await getProducts();
            setItems(products);
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <Product
                            key={item.id}
                            item={item}
                            handleEditCallback={handleEditCallback}
                            fetchProducts={fetchProducts}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
