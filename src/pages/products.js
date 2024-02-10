import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import axios from 'axios';

export default function Products() {
    // State to hold the list of products
    const [products, setProducts] = useState([]);

    // useEffect hook to fetch products when the component mounts
    useEffect(() => {
        async function fetchProducts() {
            try {
                // Fetch products from the API endpoint
                const response = await axios.get('/api/products');
                // Update the state with the fetched products
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        // Call the fetchProducts function
        fetchProducts();

        // Clean-up function (if needed)
        return () => {
            // Any clean-up code if required
        };
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <Layout>
            <div className="p-4"> {/* Padding added to the container */}
                {/* Link to add new products */}
                <Link href="/products/new" className='btn-add'> {/* Added button style */}
                    <span className='text-white'>
                        Add new products
                    </span>
                </Link>
                {/* Table to display the list of products */}
                <table className="table"> {/* Added table styling */}
                    <thead>
                        <tr>
                            <th className="table-header">Product name</th> {/* Added padding and borders */}
                            <th className="table-header">Actions</th> {/* Added actions column */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping through the products array to render each product */}
                        {products.map(product => (
                            <tr key={product._id}>
                                <td className="table-cell">
                                    {product.title}
                                </td> {/* Display product title */}
                                <td className="table-cell">
                                    {/* Edit button with Link */}
                                    <Link href={`/products/edit/${product._id}`}>
                                        <button className="btn-edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-1 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                            </svg>
                                            Edit
                                        </button>
                                    </Link>
                                    <button className="btn-delete"> {/* Added button style */}
                                        Delete
                                    </button>
                                </td> {/* Buttons for actions */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
