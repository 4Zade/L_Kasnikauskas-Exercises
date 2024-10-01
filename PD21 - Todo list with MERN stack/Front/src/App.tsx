import { Navbar } from './components/Navbar';
import { CardContainer } from './components/CardContainer';

function App() {
  return (
    <main className="w-screen h-screen bg-slate-200 flex flex-col items-center">
      <Navbar/>
      <CardContainer/>
    </main>
  )
}

export default App
