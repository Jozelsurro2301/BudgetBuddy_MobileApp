const { DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig');

const sequelize = dbConfig.connect();

const Goal = sequelize.define(
    'Goal',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount_goal: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0
        },
        goal_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updated_at: {
          type: DataTypes.STRING,
          allowNull: false
        }
    }, 
        {
            tableName: 'Goal',
            timestamps: false
        }
)


module.exports = Goal;
