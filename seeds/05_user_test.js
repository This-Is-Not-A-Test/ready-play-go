
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_test').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_test').insert([
        {
          user_id: 1,
          question_id: 1,
          pass_fail: true
        },
        {
          user_id: 1,
          question_id: 2,
          pass_fail: true
        },
        {
          user_id: 1,
          question_id: 3,
          pass_fail: true
        },
        {
          user_id: 1,
          question_id: 4,
          pass_fail: true
        },
        {
          user_id: 1,
          question_id: 5,
          pass_fail: true
        },
        {
          user_id: 1,
          question_id: 6,
          pass_fail: true
        },
        {
          user_id: 1,
          question_id: 7,
          pass_fail: true
        },
        {
          user_id: 1,
          question_id: 8,
          pass_fail: false
        },
        {
          user_id: 1,
          question_id: 9,
          pass_fail: false
        },
        {
          user_id: 1,
          question_id: 10,
          pass_fail: false
        },
        {
          user_id: 1,
          question_id: 1,
          pass_fail: true
        },
        {
          user_id: 2,
          question_id: 2,
          pass_fail: true
        },
        {
          user_id: 2,
          question_id: 3,
          pass_fail: true
        },
        {
          user_id: 2,
          question_id: 4,
          pass_fail: true
        },
        {
          user_id: 2,
          question_id: 5,
          pass_fail: true
        },
        {
          user_id: 2,
          question_id: 6,
          pass_fail: true
        },
        {
          user_id: 2,
          question_id: 7,
          pass_fail: true
        },
        {
          user_id: 2,
          question_id: 8,
          pass_fail: true
        },
        {
          user_id: 2,
          question_id: 9,
          pass_fail: true
        },
        {
          user_id: 2,
          question_id: 10,
          pass_fail: true
        },
        {
          user_id: 3,
          question_id: 1,
          pass_fail: true
        },
        {
          user_id: 3,
          question_id: 2,
          pass_fail: true
        },
        {
          user_id: 3,
          question_id: 3,
          pass_fail: true
        },
        {
          user_id: 3,
          question_id: 4,
          pass_fail: true
        },
        {
          user_id: 3,
          question_id: 5,
          pass_fail: true
        },
        {
          user_id: 3,
          question_id: 6,
          pass_fail: true
        },
        {
          user_id: 3,
          question_id: 7,
          pass_fail: true
        },
        {
          user_id: 3,
          question_id: 8,
          pass_fail: false
        },
        {
          user_id: 3,
          question_id: 9,
          pass_fail: false
        },
        {
          user_id: 3,
          question_id: 10,
          pass_fail: false
        },
        {
          user_id: 4,
          question_id: 1,
          pass_fail: true
        },
        {
          user_id: 4,
          question_id: 2,
          pass_fail: true
        },
        {
          user_id: 4,
          question_id: 3,
          pass_fail: true
        },
        {
          user_id: 4,
          question_id: 4,
          pass_fail: true
        },
        {
          user_id: 4,
          question_id: 5,
          pass_fail: true
        },
        {
          user_id: 4,
          question_id: 6,
          pass_fail: true
        },
        {
          user_id: 4,
          question_id: 7,
          pass_fail: true
        },
        {
          user_id: 4,
          question_id: 8,
          pass_fail: false
        },
        {
          user_id: 4,
          question_id: 9,
          pass_fail: false
        },
        {
          user_id: 4,
          question_id: 10,
          pass_fail: false
        },
        {
          user_id: 5,
          question_id: 1,
          pass_fail: true
        },
        {
          user_id: 5,
          question_id: 2,
          pass_fail: true
        },
        {
          user_id: 5,
          question_id: 3,
          pass_fail: true
        },
        {
          user_id: 5,
          question_id: 4,
          pass_fail: true
        },
        {
          user_id: 5,
          question_id: 5,
          pass_fail: true
        },
        {
          user_id: 5,
          question_id: 6,
          pass_fail: true
        },
        {
          user_id: 5,
          question_id: 7,
          pass_fail: true
        },
        {
          user_id: 5,
          question_id: 8,
          pass_fail: false
        },
        {
          user_id: 5,
          question_id: 9,
          pass_fail: false
        },
        {
          user_id: 5,
          question_id: 10,
          pass_fail: false
        }
      ]);
    });
};
