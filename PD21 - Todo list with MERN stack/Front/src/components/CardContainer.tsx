import { TaskCard } from './TaskCard';

export function CardContainer() {
    return (
        <section className="p-8 w-full h-full max-w-[800px] bg-red-500">
            <TaskCard/>
        </section>
    )
}