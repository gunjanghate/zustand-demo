import React from 'react'
import { cn } from '@/lib/utils'
import { useTaskStore } from '@/lib/store'
export default function Task({
  id,
  title,
  description,
  status
}: {
  id:string,
  title: string
  description?: string
  status: string
}) {
    const removeTask = useTaskStore(state=>state.removeTask);
    const dragTask = useTaskStore(state=>state.dragTask);
  return (
    <div
      className={cn(
        'flex cursor-move items-start justify-between rounded-lg bg-white px-3 py-2 text-gray-900',
        {
          'border-2 border-sky-500': status === 'TODO',
          'border-2 border-amber-500': status === 'IN_PROGRESS',
          'border-2 border-emerald-500': status === 'DONE'
        }
      )}
      draggable
      onDrag={()=>{dragTask(id)}}
    >
      <div>
        <h3 className='font-medium text-gray-700'>{title}</h3>
        <p className='text-sm font-light text-gray-500'>{description}</p>
      </div>

      <button
      onClick={()=>{
        removeTask(id);
      }} className='cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-5 w-5 text-gray-500 hover:text-rose-400'
        >
          <path
            fillRule='evenodd'
            d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
            clipRule='evenodd'
          />
        </svg>
        
      </button>
    </div>
  )
}
