/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable('todos', (table) => {
    // table.increments('id')
    // table.string('task')
    table.boolean('is_done')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable('todos', (table) => {
    table.dropColumn('is_done')
  })
}
