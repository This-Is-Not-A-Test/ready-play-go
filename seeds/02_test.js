
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        {
          question: 'Maria went to the bookstore and bought 3 books about _____________.  The first book cost her $8.25.  The second book cost her $6.40.  The total she spent is: ',
          answer: ['$14.65', '$14.80', '$14.80', '$14.00']
        },
        {
          question: 'Tyrell hopped on his skateboard to get chips from the store that was 2.5 miles away.  When he got back home, he had traveled how many miles total?',
          answer: ['5',' 2.5', '10', '5.5']
        },
        {
          question: 'Which number is greater than 8579 but less than 8595? ',
          answer: ['8588', '8599', '8559', '8569']
        },
        {
          question: 'What is the value of "x" in the equation:   22-x=17 ? ',
          answer: ['5', '3', '6', '10']
        },
        {
          question: 'What fraction is equal to 1/2 ? ',
          answer: ['5/10', '2/3', '4/6', '3/10']
        },
        {
          question: 'You and your friend have been collecting quarters from different states.  You have 3 from New York, 5 from California, 6 from Colorado, and 2 from Texas.  How much money do you have all together? ',
          answer: ['$4.00', '$3.50', '$4.25', '$3.75']
        },
        {
          question: 'You are trying to plan a playground.  You can make your playground 10 units long and 5 units wide.  What will the area of the play ground be? ',
          answer: ['50 sq. units', '25 sq. units', '55 sq. units', '100 sq. units']
        },
        {
          question: 'Railroad tracks are a good example of: ',
          answer: ['parallel lines', 'perpendicular lines', 'right angles', 'rectangles']
        },
        {
          question: 'The next likely number in the sequence ( 2, 10, 50, ____ ) is: ',
          answer: ['250', '100', '150', '1000']
        },
        {
          question: 'A six-sided shape is a:',
          answer: ['hexagon', 'cylinder', 'rectangle', 'decagon']
        }
      ]);
    });
};
