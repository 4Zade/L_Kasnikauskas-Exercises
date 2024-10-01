import { useState } from 'react';
import { Icon } from '@iconify/react'

interface TaskProps {
    item: {
        Task: string
        Priority: number
        Status: number
    }
}

export function Task({item}: TaskProps) {
    const [edit, setEdit] = useState(false);

    function editTask() {
        console.log('editing task');
        setEdit(!edit);
        console.log(edit);
    }

    return (
        <main className='w-full bg-slate-300 rounded-2xl shadow'>
            <section className="w-full bg-white rounded-2xl grid grid-cols-6 cursor-default select-none">
                <section className="flex flex-col items-start justify-center py-4 px-6 col-span-2">
                    <h1 className="text-sm text-gray-400">Task</h1>
                    { edit ? <input type='text' className='font-bold text-gray-800 focus:outline-none' value={item.Task}></input>
                    : <p className="font-bold text-gray-800">{item.Task}</p> }
                    
                </section>

                <section className="flex flex-col items-start justify-center">
                    <h1 className="text-sm text-gray-400">Priority</h1>
                    <p className="font-bold" style={{color: item.Priority === 0 ? "green" : item.Priority === 1 ? "orange" : "red"}}>
                        {item.Priority === 0 ? "Low" : item.Priority === 1 ? "Medium" : "High"}
                    </p>
                </section>

                <section className="grid place-items-center">
                    <div className="bg-gray-200 w-min whitespace-nowrap text-sm py-1 px-3 rounded-md">
                        {item.Status === 0 ? "To Do" : item.Status === 1 ? "In Progress" : "Done"}
                    </div>
                </section>

                <section className="grid place-items-center">
                    <div className="w-7 h-7 rounded-full bg-gray-300 p-0 m-0 relative grid place-items-center overflow-hidden">
                        <div className='w-[22px] h-[22px] rounded-full bg-white z-10'></div>
                        <div className='h-full absolute top-0 right-0 bg-purple-400' style={{ width: item.Status === 1 ? '50%' : item.Status === 2 ? '100%' : '0%' }}></div>
                
                    </div>
                </section>

                <section className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 hover:bg-gray-100 rounded-md grid place-items-center group cursor-pointer" onClick={editTask}>
                        { edit ?
                        <Icon icon="tabler:x" className='text-gray-800 w-6 h-6 group-hover:text-purple-400'/>
                        : <Icon icon="tabler:edit" className='text-gray-800 w-6 h-6 group-hover:text-purple-400'/> }
                    </div>

                    <div className='w-8 h-8 hover:bg-gray-100 rounded-md grid place-items-center group cursor-pointer'>
                        <Icon icon="tabler:trash" className='text-red-400 w-6 h-6 group-hover:text-red-500'/>
                    </div>
                </section>
            </section>
        </main>
    )
}