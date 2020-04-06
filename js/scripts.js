// location book business logic

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

LocationBook.prototype.deletePlace = function() {
  for (var i=0; i < this.contacts.length; i++) {
    if (this.places[i].id == id) {
      delete this.places[i];
      
    }
  }
  
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
  $("#output").after('<div class="head" id="' + placeId + '">' + '<button id= "btn' + placeId + '" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +'<h2>' + placeName + '</h2> ' + '<ul class="hidden"> <li> Landmarks: ' +  placeLandmarks + "</li>" + "<li> Season Visted: " + placeTime + "</li>" + "<li> Notes on Visit: " + placeNotes + '</li> </ul>  </div>');

}

// UI logic
$(document).ready(function() {
  var myPlaces = new LocationBook();
  $("#placeForm").submit(function(event){
    event.preventDefault();
    var name = $("#place").val();
    var landmark = $("#landmarks").val();
    var timeOfYear = $("#timeOfYear").val();
    var notes = $("#notes").val();

    var newPlace = new Place(name, landmark.split(","), timeOfYear, notes);
  
    myPlaces.addLocation(newPlace);

    output(newPlace);
    
    console.log(myPlaces.places);
    $("#btn" + newPlace.id).on('click', function() {
      $("#" + newPlace.id).hide();
      deletePlace(newPlace.id);
    });
    $("#" + newPlace.id).on('click', function() {
      $(this).children("ul").toggleClass("hidden");

     
    });
 
  });

});


//form ids: place, landmarks, timeOfYear, notes

