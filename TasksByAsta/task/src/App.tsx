import { useState } from "react";
import ButtonComponent from "./contexts/ButtonComponent";

const info = [
  {
    flavor: "Chocolate",
    key: "chocolate",
    price: 5,
    color: "#9e6f68",
    fontColor: "#ffffff",
    count: 0
  },
  {
    flavor: "Vanilla",
    key: "vanilla",
    price: 4,
    color: "#f0f0f0",
    fontColor: "#000000"
  },
  {
    flavor: "Strawberry",
    key: "strawberry",
    price: 2,
    color: "#ed7496",
    fontColor: "#ffffff",
    count: 0
  },
  {
    flavor: "Mint",
    key: "mint",
    price: 4,
    color: "#68cc9d",
    fontColor: "#ffffff",
    count: 0
  },
  {
    flavor: "Cotton Candy",
    key: "cotton_candy",
    price: 6,
    color: "#ce33cb",
    fontColor: "#ffffff",
    count: 0
  },
  {
    flavor: "Cherry",
    key: "cherry",
    price: 5,
    color: "#b1160a",
    fontColor: "#ffffff",
    count: 0
  }
]

function App() {
  const [count, setCount] = useState(info);

  return (
      <main className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <section className="w-1/3 h-1/3 grid grid-rows-3 grid-cols-3 p-1 bg-slate-950">
          {
            info.map((item) => (
              <ButtonComponent
                key={item.key}
                flavor={item.flavor}
                color={item.color}
                textColor={item.fontColor}
              />
            ))
          }
          
        </section>
      </main>
  )
}

export default App;
