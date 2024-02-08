
function validateCreateRequest(req, res, next) {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price ||
    !req.body.totalSeats
  ) {
    
    return res.status(400).json({
        success: false,
        message: 'Something went wrong',
        data: {},
        error: 'Missing Properties'
    });
  }

  next();
}

module.exports = {
  validateCreateRequest,
};
