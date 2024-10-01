import { TaskBtn } from './assets/components/TaskBtn';
import { Task } from './assets/components/Task';

function App() {
  return (
    <main className='w-[50rem] h-full p-5 flex flex-col gap-10'>
      <section className='flex justify-between'>
        <h1 className='text-3xl font-black text-gray-900'>Task List</h1>
        <TaskBtn />
      </section>

      <section className='flex flex-col gap-2'>
        {Data.map((item, index) => (
          <Task key={index} item={item} />
        ))}
      </section>
    </main>
  )
}

const Data = [
  {
    Task: "Finish todo app",
    Priority: 1, //0 = low, 1 = medium, 2 = high
    Status: 0, //0 = to do, 1 = in progress, 2 = done
  },
  {
    Task: "Another task",
    Priority: 2,
    Status: 1,
  },
  {
    Task: "One more task",
    Priority: 0,
    Status: 2,
  }
]

export default App
