const knex = require('knex')(require('../config/knexfile').development);

const createUser = async (userDaata) => {
  return await knex.transaction(async (tr) => {
    const [userId] = await trx('users')
      .insert({
        email: userDaata.email,
        username: userData.username,
        first_name: userDaata.first_name,
        last_name: userDaata.last_name,
      })
      .returning('id');
  });
  await trx('hashpwd').insert({
    username: userDaata.username,
    password: userDaata.password,
  });
  return userId;
};

const getUserByUsername = (username) => {
  return knex('users').where({ username }).first();
};

const getUserById = (username) => {
  return knex('users').where({ id }).first();
};

const getAllUsers = () => {
  return knex('users').select('*');
};

const updtadeUserById = (id, userDaata) => {
  return knex('users').where({ id }).update(updteData);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
