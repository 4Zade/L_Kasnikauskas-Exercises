import { Icon } from "@iconify/react"
import { useState } from "react"

export function TaskCard() {
    let x = 'Low';
    let y = "In progress";
    function checkPriority(priority: string) {
        if(priority.toLowerCase() === "low") {
            return "text-green-400"
        } else if(priority.toLowerCase() === "medium") {
            return "text-yellow-400"
        } else if(priority.toLowerCase() === "high") {
            return "text-red-400"
        }
    }

    function checkStatus(status: string) {
        if(status.toLowerCase() === "to do") {
            return "w-none"
        } else if(status.toLowerCase() === "in progress") {
            return "w-1/2"
        } else if(status.toLowerCase() === "done") {
            return "w-full"
        }
    }

    return (
            <div className="w-full h-24 bg-slate-100 rounded-2xl flex shadow overflow-hidden relative">
                <section className="w-1/3 h-full px-4 flex flex-col justify-center items-start">
                    <h1 className="text-slate-400 font-bold text-sm">Task</h1>
                    <p className="text-slate-600 w-full text-base font-semibold text-clip line-clamp-2">Task description goes here if it fits ofc oh and when it fits it fits so whatever</p>
                </section>

                <section className="w-1/6 h-full px-4 flex flex-col justify-center items-center">
                    <h1 className="text-slate-400 font-bold text-sm">Priority</h1>
                    <p className={`text-slate-600 text-base font-semibold ${checkPriority(x)}`}>{x}</p>
                </section>

                <section className="w-1/6 h-full px-4 flex flex-col justify-center items-center">
                    <div className="px-3 py-1 rounded-lg bg-slate-200 text-slate-600 text-sm font-semibold whitespace-nowrap cursor-pointer hover:bg-slate-300 transition-colors">{y}</div>
                </section>

                <section className="w-1/6 h-full px-4 flex flex-col justify-center items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative grid place-items-center">
                        <div className="w-6 h-6 rounded-full bg-slate-100 z-10"></div>
                        <div className={`bg-purple-400 absolute top-0 right-0 h-full ${checkStatus(y)}`}></div>
                    </div>
                </section>

                <section className="w-1/6 h-full px-4 flex gap-2 justify-center items-center">
                    <div className="w-8 h-8 rounded-lg hover:bg-slate-200 transition-colors group grid place-items-center cursor-pointer">
                        <Icon icon="tabler:edit" className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors"/>
                    </div>

                    <div className="w-8 h-8 rounded-lg hover:bg-slate-200 transition-colors group grid place-items-center cursor-pointer">
                        <Icon icon="tabler:trash" className="w-6 h-6 text-red-400 group-hover:text-red-500 transition-colors"/>
                    </div>
                </section>
            </div>
    )
}