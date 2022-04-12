const USERS = 'users'

exports.up = function (knex) {
    return knex.schema.createTable(USERS, table => {
        table.increments('id')
        table.string('user_name')
        table.string('password')
        table.timestamps(true, true)
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable(USERS)
};
