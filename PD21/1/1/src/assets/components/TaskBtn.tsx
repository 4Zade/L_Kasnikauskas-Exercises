import { Icon } from '@iconify/react'

export function TaskBtn() {
    return (
        <button className='bg-purple-600 hover:bg-purple-500 rounded-2xl text-white font-bold py-2 px-4 flex items-center justify-center gap-2'>
            <Icon icon="tabler:plus" />
            Add Task
        </button>
    )
}