const express = require('express');
const router = express.Router();
const db = require('../models');


//crud 
router.get('/', (req, res) => {
    db.Crud.find()
        .then((crud) => res.json(crud))
        .catch((err) => res.send(err));
});

// crud home route
router.post('/', (req, res) => {
    db.Crud.create(req.body)
        .then(res.redirect('/home'))
        .catch((err) => res.send(err))
});

// crud show
router.get('/:id', (req, res) => {
    let id = req.params.id;
    db.Crud.findById(id)
        .then((crud) => res.json(crud))
        .catch((err) => res.send(err))
});

// update crud
router.put('/:id', (req, res) => {
    db.Crud.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((crud) => res.json(crud))
        .catch((err) => res.send(err))
});

//delete crud

router.delete('/:id', (req, res) => {
    db.Crud.remove({ _id: req.params.id })
        .then(res.send("removed"))
        .catch((err) => res.send(err))
});


module.exports = router; 
