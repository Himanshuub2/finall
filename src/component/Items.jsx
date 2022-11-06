import {useDispatch,useSelector} from "react-redux"
import {handleClick} from "../redux/slice.js";
import {Button} from "@mui/material"



const Items = ({ item }) => {


  const dispatch = useDispatch();
  
  return (

    <div style={{ display: "inline-block", flexDirection: "row" ,margin:"20px 50px 8px 2px",}}>
      <div
        style={{
          border: "2px solid black",
          width: "200px",
          height: "auto",
          padding:"0px 0px 15px 0px"
        }}
      >
      <img
          src={item.thumbnail}
          style={{ width: "200px", height: "150px" }}
          alt="imageee"
        ></img>
        <label style = {{fontWeight:"lighter"}}>
        {item.title}
        </label>
        <br />
        <label style = {{fontWeight:"bolder"}}>
        {item.price}₹
        </label> 
        <br />
        <Button variant ="contained" size="small" style={{background:"black"}} onClick = {()=>dispatch(handleClick({payload:{data1:item,data2:false}}))}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default Items;
