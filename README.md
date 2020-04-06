# Places You've Been Site

## copyright 2020 DJ Zevenbergen and Ethan Firpo

## Description

This website allows a user to input places they've been with various data about the location, landmarks, time of year, notes, and other things. Designed to practice using objects, constructors, and prototypes in JavaScript.

## Setup

Clone this repository.

Open index.html in the web browser of your choice.

## Specs
### Behavior: Program will create an object based upon user input of a place they've been.
#### Sample Input: Egypt
#### Expected Output: Egypt as a clickable list item.

### Behavior: Program will store location as a property of inputted place object.
#### Sample Input: Egypt
#### Expected Output: Egypt["Egypt", , , ]

### Behavior: Program will store landmarks entered as a property of inputted place object.
#### Sample Input: Great Pyramids, Nile River
#### Expected Output: Egypt["Egypt", ["Great Pyramids", "Nile River"], , ]

### Behavior: Program will store time-of-year entered as a property of inputted place object.
#### Sample Input: Spring
#### Expected Output: Egypt["Egypt", ["Great Pyramids", "Nile River"], "Spring", ,]

### Behavior: Program will store any notes inputted as a property of inputted place object.
#### Sample Input: The pyramids were lovely but the Nile was flooded.
#### Expected Output: Egypt["Egypt", ["Great Pyramids", "Nile River"], "Spring", "The pyramids were lovely but the Nile was flooded."]

### Behavior: Program will display collected data to user upon click.
#### Sample Input: *click*
#### Expected Output: Egypt: 
                      Location: Egypt
                      Landmarks: Great Pyramids, Nile River
                      Time of visit: Spring
                      Notes: The pyramids were lovely but the Nile was flooded.

## Legal

This site copyright (c) 2020 DJ Zevenbergen and Ethan Firpo.