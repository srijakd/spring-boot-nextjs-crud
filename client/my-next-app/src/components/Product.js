import { deleteProduct } from "../../utils/api";

export default function Product({ item, handleEditCallback, fetchProducts }) {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete?")) {
            try {
                await deleteProduct(item.id);
                fetchProducts();
                alert("Deleted successfully");
            } catch (error) {
                console.error("Failed to delete product", error);
            }
        }
    };

    return (
        <tr className="bg-gray-100 hover:bg-gray-200">
            <td className="py-2 px-4 border-b">{item.name}</td>
            <td className="py-2 px-4 border-b">${item.price}</td>
            <td className="py-2 px-4 border-b">{item.quantity}</td>
            <td className="py-2 px-4 border-b">
                <button
                    onClick={() => handleEditCallback(item)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
