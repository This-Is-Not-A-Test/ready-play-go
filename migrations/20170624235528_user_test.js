
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_test', function(table) {
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.integer('question_id').references('id').inTable('tests');
    table.boolean('pass_fail');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_test');
};
