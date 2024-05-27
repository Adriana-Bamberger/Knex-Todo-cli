import { getTodos, close, deleteTodo, updateTask, searchTasks } from './db.js'

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
    await deleteTodo(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function upTask(id, task) {
  try {
    await updateTask(id, task)
    await list()
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function search(search) {
  try {
    const res = await searchTasks(search)
    await printTodos(res)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
