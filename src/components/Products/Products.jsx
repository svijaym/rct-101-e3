import React from "react";
import Product from "./Product/Product";
import axios from "axios";

axios.get('/users')
  .then(res => {
    console.log(res.data);
  });
const Products = () => {
  const [products,setProducts] = useState();
  useEffect(() => {
    const fproduct = axios.get('http://localhost:8080/products')
    .then(res => {
      setProducts(res.data);
    });
    fproduct();
  }, [])
  
  return <div>
    products:{" "}
    <div>
    {/* {products.map((e)) => */}
    </div>
    <Product/></div>;
};

export default Products;
