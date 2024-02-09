import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import axios from "axios";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts,setGotoProducts]=useState(false)

const router=useRouter()

  async function createProduct(ev: { preventDefault: () => void; }) {
    ev.preventDefault();
    const data = { title, description, price };
    try {
        await axios.post('/api/products', data);
        setGotoProducts(true)

        if(goToProducts){
          router.push('/products')
        }

    } catch (error) {
        // Handle errors here, for example:
        console.error('Error creating product:', error);
        // Optionally, you can show an error message to the user
    }
}
  return (
    <Layout>
        <form onSubmit={createProduct}>
        <h1>New Product</h1>

      <label>Product Name</label>
      <input
        type="text"
        placeholder="product name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />

      <label>Description</label>
      <textarea
        placeholder="description"  
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      >

      </textarea>

      <label>Price(in USD)</label>
      <input 
      type="number"
       placeholder="price"
       value={price}
       onChange={(ev) => setPrice(ev.target.value)}/>

      <button className="btn-primary">Save</button>
        </form>
  
    </Layout>
  );
}
