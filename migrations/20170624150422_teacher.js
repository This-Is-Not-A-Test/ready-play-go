
exports.up = function(knex, Promise) {
  knex.schema.createTable('teachers',(table)=>{
    table.incrament();
    table.string('name');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('teachers');
};
