import "./App.css";

import chicken from "./assets/Chicken.png";
import fish from "./assets/Fish.png";
import kraken from "./assets/Kraken.png";
import mega from "./assets/Mega.png";
import pigs from "./assets/Pigs.png";
import shark from "./assets/Shark.png";
import snake from "./assets/Snake.png";
import trophyFish from "./assets/TrophyFish.png";

import { Card } from "./Components/Cards/Cards";

function App() {
  return (
    <>
      <div className="header">
        <h2>Sea of Thieves Cooking Timer</h2>
      </div>
      <main className="container">
        <Card
          title={"Fish 🐟"}
          image={fish}
          alt={"Fish Image"}
          minute={0}
          seconds={45}
        />

        <Card
          title={"Trophy Fish 🐠 🏆"}
          image={trophyFish}
          alt={"Trophy Fish Image"}
          minute={1}
          seconds={35}
        />

        <Card
          title={"Shark 🦈"}
          image={shark}
          alt={"Shark Image"}
          minute={1}
          seconds={5}
        />

        <Card
          title={"Megalodon 🦈²"}
          image={mega}
          alt={"Megalodon Image"}
          minute={2}
          seconds={0}
        />

        <Card
          title={"Kraken 🦑"}
          image={kraken}
          alt={"Kraken Image"}
          minute={2}
          seconds={0}
        />

        <Card
          title={"Snake 🐍"}
          image={snake}
          alt={"Snake Image"}
          minute={1}
          seconds={5}
        />

        <Card
          title={"Pork 🐖"}
          image={pigs}
          alt={"Pigs Image"}
          minute={1}
          seconds={5}
        />
      </main>
    </>
  );
}

export default App;
