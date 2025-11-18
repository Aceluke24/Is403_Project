const knex = require('./db'); // make sure this points to your Knex instance

async function insertUsers() {
  try {
    await knex('users').insert([
      { id: 2, first_name: 'winnie', last_name: 'the pooh', profile_image: null },
      { id: 1, first_name: 'luke', last_name: 'admin', profile_image: '/images/uploads/watson-0840.jpeg' }
    ]);
    console.log('Users inserted successfully!');
  } catch (err) {
    console.error('Error inserting users:', err);
  } finally {
    knex.destroy(); // closes the database connection
  }
}

insertUsers();