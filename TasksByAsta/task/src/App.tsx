import { useEffect, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import ContentCount from "./components/ContentCount";
import SumComponent from "./components/SumComponent";

export interface InfoProps {
  flavor: string;
  key: string;
  price: number;
  color: string;
  fontColor: string;
  count: number;
}

const infoArray: InfoProps[] = [
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
    fontColor: "#000000",
    count: 0
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
  const [info, setInfo] = useState<InfoProps[]>(infoArray)
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  const calculateSubtotal = () => {
    setSubtotal(info.map((item: InfoProps) => item.price * item.count).reduce((a: number, b: number) => a + b, 0))
  }

  const calculateTotal = () => {
    setTotal(subtotal - (subtotal * (discount / 100)));
  }

  useEffect(() => {
    calculateSubtotal();
    calculateTotal();
  }, [info, subtotal, discount])

  return (
      <main className="w-screen h-screen flex flex-col justify-center items-center gap-4 bg-slate-700">
        <input type="number" min={0} max={100} onChange={(e) => setDiscount(Number(e.target.value))} placeholder="Discount" className="border-2 rounded-xl border-slate-950 px-2 py-1"/>
        <section className="w-1/3 h-1/3 grid grid-rows-3 grid-cols-3 p-1 bg-slate-950">
          {
            infoArray.map((item) => (
              <ButtonComponent
                key={item.key}
                flavor={item.flavor}
                color={item.color}
                textColor={item.fontColor}
                click={() => setInfo(info.map((i: InfoProps) => i.key === item.key ? { ...i, count: i.count + 1 } : i))}
              />
            ))
          }
          
          <ContentCount info={info}/>

          <SumComponent total={total} subtotal={subtotal} discount={discount}/>
        </section>
      </main>
  )
}

export default App;
