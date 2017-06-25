
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'TheRZA',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          score: 10000,
          is_admin: false
        },
        {
          username: 'GhostFace',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          score: 50000,
          is_admin: false
        },
        {
          username: 'TheGZA',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          score: 100000,
          is_admin: true
        },
        {
          username: 'Raekwon',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          score: 10000,
          is_admin: false
        },
        {
          username: 'UGod',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          score: 10000,
          is_admin: false
        }
      ]);
    });
};
