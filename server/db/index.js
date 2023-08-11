"use strict";

const { db, Sequelize } = require("./db");

// Require your models and make your associations

const WizardingSchool = db.define("WizardingSchool", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
  }, 
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

const Students = db.define("Students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      Email: {
        message: 'Valid Email',
      },
    },
  },
  imageURL: {
    type: Sequelize.STRING,
  },
  magicalAbilityScore: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: {
        args: [0.0, 10.0],
        message: 'Magical Ability Score has to be between 0.0 & 10.0',
      },
    },
  },
});

Students.hasOne(WizardingSchool);
WizardingSchool.hasMany(Students);

module.exports = {
  db,
  WizardingSchool,
  Students,
};
