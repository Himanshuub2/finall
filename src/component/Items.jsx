const Items = ({ item }) => {
  return (
    <div style={{ display: "inline-block", flexDirection: "row" }}>
      <div
        style={{
          border: "2px solid black",
          width: "200px",
          height: "auto"
        }}
      >
      <img
          src={item.thumbnail}
          style={{ width: "200px", height: "150px" }}
          alt="imageee"
        ></img>
        {item.title}
        <br />
        {item.price}
        <br />
        <button >Add to Cart</button>
      </div>
    </div>
  );
};

export default Items;
