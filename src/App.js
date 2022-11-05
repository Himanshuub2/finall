//api link : https://dummyjson.com/products
import { useState, useEffect } from "react";
import "./styles.css";
import Home from "./component/Home";

export default function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const data = async () => {
    const result = await fetch("https://dummyjson.com/products");
    const newresult = await result.json();
    const final = newresult.products;
    setProduct(final);
  };

  useEffect(() => {
    data();
  }, []);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (e.target.value !== "") {
      setProduct(
        product.filter((item) => item.title.toLowerCase().includes(searchValue))
      );
    } else {
      data();
    }
  };

  return (
    <div className="App">
      <input placeholder="search products.." onChange={handleChange}></input>
      {/* <button>Search</button> */}
      <br />
      <br />
      <Home product={product} />
    </div>
  );
}
