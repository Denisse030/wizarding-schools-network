"use strict";
const router = require("express").Router();

// require your database and place your routes here
const {WizardingSchool, Students} = require("../db");

//Wizarding School
router.get('/WizardingSchool', async (req, res, next) => {
    try {
      res.send(await WizardingSchool.findAll());
    } catch (error) {
      next(error);
    }
  });
 
router.get('/WizardingSchool/:id', async (req, res, next) => {
    try {
      res.send(await WizardingSchool.findByPk(req.params.id));
    } catch (error) {
      next(error);
    }
  });

// POST
router.post('/WizardingSchool', async (req, res, next) => {
    try {
      res.status(201).send(await WizardingSchool.create(req.body));
    } catch (error) {
      next(error);
    }
  });
  
// PUT
router.put('/WizardingSchool/:id', async (req, res, next) => {
    try {
      const WizardingSchool = await WizardingSchool.findByPk(req.params.id);
      res.send(await WizardingSchool.update(req.body));
    } catch (error) {
      next(error);
    }
  });
  
// DELETE
router.delete('/WizardingSchool/:id', async (req, res, next) => {
    try {
      const WizardingSchool = await WizardingSchool.findByPk(req.params.id);
      await WizardingSchool.destroy();
      res.send(WizardingSchool);
    } catch (error) {
      next(error);
    }
  });


//Students
router.get('/Students', async (req, res, next) => {
    try {
      res.send(await Students.findAll());
    } catch (error) {
      next(error);
    }
  });
 
router.get('/Students/:id', async (req, res, next) => {
    try {
      res.send(await Students.findByPk(req.params.id));
    } catch (error) {
      next(error);
    }
  });

// POST
router.post('/Students', async (req, res, next) => {
    try {
      res.status(201).send(await Students.create(req.body));
    } catch (error) {
      next(error);
    }
  });
  
// PUT
router.put('/Students/:id', async (req, res, next) => {
    try {
      const Students = await Students.findByPk(req.params.id);
      res.send(await Students.update(req.body));
    } catch (error) {
      next(error);
    }
  });
  
// DELETE
router.delete('/Students/:id', async (req, res, next) => {
    try {
      const Students = await Students.findByPk(req.params.id);
      await Students.destroy();
      res.send(Students);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
