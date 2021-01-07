const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
    
    const router = express.Router();

    //show me everything
    router.get('/', (req, res) => {
        collection.find()
          .toArray()
          .then((docs) => res.json(docs))
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
      });
    //show me one booking 

      router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
          .findOne({ _id: ObjectID(id) })
          .then((doc) => res.json(doc))
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
      });

      //create a new booking 
      router.post('/', (req, res) => {
        const newBooking = req.body;
        collection.insertOne(newBooking)
        .then((result) => {
        res.json(result.ops[0])
        })
        .catch ((err) => {
          console.error(err);
          res.status(500);
          res.json({status: 500, error: err });
        });  
      });

      router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection.deleteOne({_id: ObjectID(id)})
        .then(result => {
          res.json(result)
        })
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({status: 500, error: err});
        });
      });
    
      //update route
      router.put('/:id', (req, res) => {
      //get the id of the object/sighting
      const id = req.params.id;
      //get the updated sightings from the body 
      const updatedBookings = req.body;
      //update the db with the updateOne method - search via id, then set values of properties
      collection.updateOne(
        {_id: ObjectID(id)},
        {$set: updatedBookings}
      )
      //confirm the update was successful by accessing the result
      .then((result) => {
        res.json(result)
      })
      .catch((err)=>{
        console.error(err);
        res.status(500);
        res.json({status:500, error: err });
      });
      });

      return router;
};

module.exports = createRouter;
