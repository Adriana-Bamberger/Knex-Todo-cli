import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

export function deleteTodo(id) {
  console.log('db', id)
  return db('todos').where({ id }).del()
}

export function updateTask(id, task) {
  return db('todos').where({ id }).update({ task })
}
