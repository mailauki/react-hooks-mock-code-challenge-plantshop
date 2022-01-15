import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants/")
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleDeletePlant(deletedPlant) {
    const updatedPlants = plants.filter(plant => plant.id !== deletedPlant.id)
    setPlants(updatedPlants)
  }

  const plantsToDisplay = plants.filter(plant => {
    if(plant.name.toLowerCase().includes(search.toLowerCase())) 
    return plant
  })

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearchChange={search => setSearch(search)} />
      <PlantList plants={plantsToDisplay} onDeletePlant={handleDeletePlant} />
    </main>
  );
}

export default PlantPage;
