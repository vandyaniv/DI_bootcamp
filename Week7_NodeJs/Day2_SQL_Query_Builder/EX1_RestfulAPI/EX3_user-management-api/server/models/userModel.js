const knex = require('knex')(require('../config/knexfile').development);

const createUser = async (userData) => {
  return await knex.transaction(async (trx) => {
    const [userId] = await trx('users')
      .insert({
        email: userData.email,
        username: userData.username,
        first_name: userData.first_name,
        last_name: userData.last_name,
      })
      .returning('id');

    await trx('hashpwd').insert({
      username: userData.username,
      password: userData.password,
    });

    return userId;
  });
};

const getUserByUsername = (username) => {
  return knex('users').where({ username }).first();
};

const getUserById = (id) => {
  return knex('users').where({ id }).first();
};

const getAllUsers = () => {
  return knex('users').select('*');
};

const updateUserById = (id, updateData) => {
  return knex('users').where({ id }).update(updateData);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByUsername,
  getUserById,
  updateUserById,
};
