const express = require('express');
const router = express.Router();
const todo = require("../models/todo");

const {User} = require("../models/user");


  router.route('/create')
    .post(async (req, res) => {

      const newTodo = new todo(req.body);
      try {
        const savedTodo = await newTodo.save();
  
  
        res.status(200).json(savedTodo);
      } catch (err) {
        res.status(500).json(err);
      }
    });




    router.route('/lists/:userId')
    .get(async (req, res) => {
      try {  
const currentUser = await User.findById(req.params.userId);

        const userTodo = await todo.find({ userId: currentUser._id})
        res.status(200).json(userTodo);
  
       
      } catch (err) {
        res.status(500).json(err);
      }

    });

    router.route('/find/:id')
    .get(async (req, res) => {
      try {  

      
     
        const findTodo = await todo.findById(req.params.id)
        res.status(200).json(findTodo);
  
       
      } catch (err) {
        res.status(500).json(err);
      }

    });



    router.route('/update/:id')
    .put(async (req, res) => {

      const result = await todo.findByIdAndUpdate(req.params.id,
        {
          $set: req.body,
        },
        { new: true })


      res.json(result);

  
    });



    router.route('/delete/:id')
    .delete(async (req, res) => {

      const result = await todo.findByIdAndDelete(req.params.id)
      res.json(result);

  
    });
  
  module.exports = router;