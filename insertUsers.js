// insertUsers.js

const knexConfig = require("./knexfile");
const environment = process.env.NODE_ENV || "development";
const knex = require("knex")(knexConfig[environment]);

async function insertUsers() {
  try {
    await knex('users').insert([
      { username: 'winnie', password: 'thepooh', profile_image: null },
      { username: 'luke', password: 'admin', profile_image: '/images/uploads/watson-0840.jpeg' }
    ]);
    console.log('Users inserted successfully!');
  } catch (err) {
    console.error('Error inserting users:', err);
  } finally {
    knex.destroy(); // closes the database connection
  }
}

insertUsers();