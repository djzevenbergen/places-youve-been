function LocationBook() {
  this.places = [];
  this.currentId = 0;
}

LocationBook.prototype.addLocation = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

LocationBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business for places

function Place(name, landmarks, timeOfYear, notes) {
  this.name = name;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;

}

// UI logic



//form ids: place, landmarks, timeOfYear, notes

