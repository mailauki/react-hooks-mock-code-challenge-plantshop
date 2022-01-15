import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {
  const {name, image, price, id} = plant

  const [isInStock, setInStock] = useState(true)
  
  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => onDeletePlant(plant))
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick} style={{marginLeft: "10px"}}>Delete</button>
    </li>
  );
}

export default PlantCard;
