
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tests', function(table) {
    table.increments();
    table.text('question');
    table.string('answer');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tests');
};
