import { getTodos, close, deleteTodo } from './db.js'

export async function list() {
  try {
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function delTodo(id) {
  console.log('command')
  try {
    deleteTodo(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
