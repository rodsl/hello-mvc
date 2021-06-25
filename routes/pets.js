const express = require('express');
const router = express.Router();
const petController = require("../controllers/pets")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(petController.listarPets());
});
router.get('/:index', function(req, res, next) {
  const {index} = req.params
  res.send(petController.listarUmPet(index));
});

module.exports = router;
