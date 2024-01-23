import CarItem from "./car-item/CarItem";
import { cars } from "./car.data";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        {cars.length
          ? cars.map((car) => <CarItem key={car.id} car={car} />)
          : "No cars"}
      </div>
    </div>
  );
};

export default Home;
