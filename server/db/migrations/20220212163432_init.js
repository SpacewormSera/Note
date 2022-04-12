const NOTE = 'note'

exports.up = function (knex) {
  return knex.schema.createTable(NOTE, table => {
    table.increments('id')
    table.string('data').notNullable()
    table.timestamps(true, true)
    table.string('uuid').notNullable().unique('uuid')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable(NOTE)
};
