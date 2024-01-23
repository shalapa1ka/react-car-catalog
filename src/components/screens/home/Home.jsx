import { useState } from "react";
import CarCreateForm from "./car-create-form/CarCreateForm";
import CarItem from "./car-item/CarItem";
import { cars as carsData } from "./car.data";

const Home = () => {
  const [cars, setCars] = useState(carsData);
  return (
    <div>
      <h1>Home</h1>
      <CarCreateForm setCars={setCars} />
      <div>
        {cars.length
          ? cars.map((car) => <CarItem key={car.id} car={car} />)
          : "No cars"}
      </div>
    </div>
  );
};

export default Home;
