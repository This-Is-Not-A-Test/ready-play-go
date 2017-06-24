
exports.up = function(knex, Promise) {
  knex.schema.createTable('students', (table)=>{
    table.incrament();
    table.string("name");
    table.integer('tickets');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('students');
};
