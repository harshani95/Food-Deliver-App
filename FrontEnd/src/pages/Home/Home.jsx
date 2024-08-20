import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDislay from "../../components/FoodDisplay/FoodDislay";
import Header from "../../components/Header/Header";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDislay category={category} />
    </div>
  );
};

export default Home;
