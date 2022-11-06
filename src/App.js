//api link : https://dummyjson.com/products
import { useState, useEffect } from "react";
import "./styles.css";
import Home from "./component/Home";
import Cart from "./component/Cart";
import {TextField} from "@mui/material"
// import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {handleHome} from "./redux/slice.js"

import {useDispatch, useSelector} from "react-redux"

export default function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const {item,flag} = useSelector(state=>state.product);


  const dispatch = useDispatch();


  // console.log(product);
  
  useEffect(() => {

    const data = async () => {
      const result = await fetch("https://dummyjson.com/products");
      const newresult = await result.json();
      const final = newresult.products;
      setProduct(final);
      
    };
    data();
  }, [flag]);



  const handleChange = (e) => {
    e.preventDefault()
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
      
      
      <nav
      style ={{borderBottom:"2px solid black",height:"50px",lineHeight:"50px",marginBottom:"20px",background:"black",}}
      >
        <h2 style={{
          color:"white",
          textDecoration:"underline",
          cursor:"pointer",

        }} 
      
        onClick = {()=>dispatch(handleHome({payload:true}))}
        >Home</h2>
        
      </nav>
      {
        flag ?
        

      <>
      <TextField variant="outlined" placeholder="Search Products..." onChange={handleChange}></TextField>
      <br />
      <br />
      
     <Home  product={product} />
      
      </>
        :
          <Cart product ={item} />
      
      }
      
    </div>
  );
}
