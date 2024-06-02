const API_URL = 'http://localhost:8080';

export async function getProducts() {
    const res = await fetch(`${API_URL}/v1/product`);
    if (!res.ok) {
        throw new Error('Failed to fetch items');
    }
    return await res.json();
}

export async function getProduct(id) {
    const res = await fetch(`${API_URL}/v1/product/id?id=${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch item');
    }
    return await res.json();
}

export async function createProduct(data) {
    const res = await fetch(`${API_URL}/v1/product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error('Failed to create item');
    }
    return await res.json();
}

export async function updateProduct(id, data) {
    const res = await fetch(`${API_URL}/v1/product/update?id=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error('Failed to update item');
    }
    return await res.json();
}

export async function deleteProduct(id) {
    const res = await fetch(`${API_URL}/v1/product/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) {
        throw new Error('Failed to delete item');
    }
}
