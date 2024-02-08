const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');


const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update)

router.post('/airports', AirportController.create);
router.get('/airport/:id', AirportController.get);
router.get('/airports', AirportController.getAll);

router.post(
    '/flights', 
    FlightController.create
);
router.get('/flights', FlightController.getAll);

module.exports = router;