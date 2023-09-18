const express = require('express');

const router = express.Router();

const todo = require("../models/todo");



const createTodo =  async (req, res) => {

    const newTodo = new todo(req.body);
    try {
      const savedTodo = await newTodo.save();


      res.status(200).json(savedTodo);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  router.route('/')
    .post(createTodo);
  
  
  module.exports = router;