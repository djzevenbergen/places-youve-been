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

function output(place) {
  var placeName = place.name;
  var placeLandmarks = place.landmarks;
  var placeTime = place.timeOfYear;
  var placeNotes = place.notes;
  var placeId = place.id;
  $("#output").after('<div class="head" id="' + placeId + '"><h2>' + placeName + "</h2> " + '<ul class="hidden"> <li>' + placeLandmarks + "</li>" + "<li>" + placeTime + "</li>" + "<li>" + placeNotes + "</li> </ul> </div>");

}

function toggleOnOff(id) {
 
}

// UI logic
$(document).ready(function() {
  var myPlaces = new LocationBook();
  $("#placeForm").submit(function(event){
    event.preventDefault();
    var name = $("#place").val();
    var landmark = $("#landmarks").val().split(",");
    var timeOfYear = $("#timeOfYear").val();
    var notes = $("#notes").val();

    var newPlace = new Place(name, landmark, timeOfYear, notes);
  
    myPlaces.addLocation(newPlace);

    output(newPlace);
    
    console.log(myPlaces.places);

    $("#" + newPlace.id).on('click', function() {
      $(this).children("ul").toggleClass("hidden");

     
    });
 
  });




});


//form ids: place, landmarks, timeOfYear, notes

