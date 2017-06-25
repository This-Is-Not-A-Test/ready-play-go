exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function() {
      return knex('users').del();
    }).then(function() {
      return knex('user_test').del();
    }).then(function() {
    });
  };
