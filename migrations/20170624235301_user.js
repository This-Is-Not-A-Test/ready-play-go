
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username').notNull();
    table.string('password').notNull();
    table.integer('score');
    table.boolean('is_admin').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
