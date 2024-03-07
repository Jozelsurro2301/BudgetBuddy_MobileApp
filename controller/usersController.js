const Profile = require('../models/users');
const { Sequelize } = require('sequelize');

//CREATE A NEW USER
const createUser = async(req, res, next) => {
    const {fname, lname, email, password} = req.body; //user input (post)

    try {
        created_at = today.toISOString();
        updated_at = today.toISOString();

        const profile = await Profile.create({
            fname,
            lname,
            email,
            password
        });

        res.status(201).json(profile);
    } catch (err) {
      next(err);
      console.log('error: ' + err.message);
    }
};


// Get all users
const getAllUsers = async (req, res, next) => {
    try {
      const users = await Profile.findAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };
  
  // Get user by ID
  const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await Profile.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };



  module.exports = {
    createUser,
    getAllUsers,
    getUserById
  };