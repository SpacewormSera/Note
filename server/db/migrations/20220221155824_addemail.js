const USERS = 'users'

exports.up = function (knex) {
    return knex.schema.alterTable(USERS, table => {
        table.string('email')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable(USERS)
};
