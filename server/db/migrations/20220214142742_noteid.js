const NOTE = 'note'

exports.up = function (knex) {
    return knex.schema.alterTable(NOTE, table => {
        table.string('uuid').notNullable()
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable(NOTE)
};
