import Items from "./Items";

const Cart = ({product}) => {


  // console.log(product);
  return (<>
    <div style = {{fontSize:"60px", border:"5px solid black"}}>
        Cart 
    </div>
  
    <div style = {{display:"flex",flexDirection:"row"}}> 
    <div style = {{width:"50vw",height:"100vh"}}>
      <img src = {product.images[0]} height="500px"></img>
      <h1>{product.title}</h1>
    </div>

    <div style = {{width:"100vw",height:"100vh",textAlign:"left"}}>
      <h1 style = {{fontSize:"50px"}}>{product.title}</h1>
      <h1 style = {{fontSize:"30px"}}>{product.brand}</h1>
      <h1 style = {{fontSize:"20px"}}>{product.category}</h1>
      <h5 >{product.description}</h5>
      {
        product.images.map(item=>(
         
          <img src = {item} width= "100px" style = {{margin:"0px 10px",border:"2px solid black"}}></img>
        ))
      }

    </div>   
  </div>
  </>
  );
 
};



export default Cart;
