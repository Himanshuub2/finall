import Items from "./Items";
// import Cart from "./Cart";
import { useState } from "react";

const Home = ({ product }) => {
 
  

  return (
    <div>
      {/* Home */}

      {product.map((item) => (
        <Items item={item} />
      ))}
    </div>
  );
};

export default Home;
