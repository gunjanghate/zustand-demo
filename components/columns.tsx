import Column from './column'
import NewTodoDialog from './next-todo-dialog'

export default function Columns() {
  return (
    <section className='mt-10 flex gap-6 lg:gap-12'>
      <NewTodoDialog/>
      <Column title='Todo' status='TODO' />
      <Column title='In Progress' status='IN_PROGRESS' />
      <Column title='Done' status='DONE' />
    </section>
  )
}
