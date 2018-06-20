const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocationsArray = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return startLocationsArray;

};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocationsArray = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return endLocationsArray;

};

Traveller.prototype.getModesOfTransport = function () {
  const modesOfTransportArray = this.journeys.map((journey) => {
    return journey.transport;
  })

  return modesOfTransportArray;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const filteredJourneys = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return filteredJourneys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
