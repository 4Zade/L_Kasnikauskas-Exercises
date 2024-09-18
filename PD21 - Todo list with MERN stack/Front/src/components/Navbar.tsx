import { Icon } from "@iconify/react"

export function Navbar() {
    return (
        <nav className="w-full h-20 max-w-[800px] px-8 py-4 flex items-center justify-between">
            <h1 className="text-slate-800 font-black text-3xl spacing tracking-wide select-none cursor-default">Task List</h1>

            <button className="text-slate-100 hover:text-white bg-purple-400 hover:bg-purple-500 px-4 py-3 rounded-2xl font-bold flex items-center gap-1 scale-100 active:scale-95 transition-[background-color,transform] select-none">
                <Icon icon="tabler:plus" className="w-5 h-5"/>
                <span>Add Task</span>
            </button>
        </nav>
    )
}