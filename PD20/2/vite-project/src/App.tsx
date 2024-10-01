import { Card } from './assets/components/Card.tsx';
import data from './assets/items.json';

function App() {
  return (
    <>
      <main className='flex items-center justify-center gap-1'>
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            images={item.images}
            brand={item.brand}
            sticker={item.sticker}
            price={item.price}
            internetOnly={item.internetOnly}
          />
        ))}
      </main>
    </>
  )
}

export default App
