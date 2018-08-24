//JS 1
console.log("Pepperoni");
console.log("The Last of Us")

//JS 2                         
console.log("JavaScript");
console.log(33.7);
console.log(true)
console.log(null)

//JS 3
console.log(34 + 3.5);
console.log(2018 - 1969);
console.log(65 / 240)
console.log(0.2708 * 100)

//JS 4
console.log("Teaching the world how to code".length);

//JS 5
console.log('Codecademy'.toUpperCase()); 
console.log('    Remove whitespace   '.trim());

//JS 6
console.log(Math.random() * 100)
console.log(Math.floor(Math.random() * 100))
console.log(Math.ceil(43.8))
console.log(Number.isInteger(2017))

//JS 7
//Opening line
console.log('It was love at first sight.');

/*console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');*/

// JS 8
const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);

//JS 9
let changeMe = true;
changeMe = false;
console.log(changeMe);

//JS 10
let notDefined; 
console.log(notDefined);
let valueless;
console.log(valueless);

//JS 11
molecule += 16;
particle *= 6.02;
assay++ ;

//JS 12
let favoriteAnimal = 'Dog';
console.log("My favorite animal: " + favoriteAnimal);

//JS 13
let myName = 'Mark';
let myCity = 'Kansas City';
console.log(`my name is ${myName}. my favorite city is ${myCity}`)
 
//JS 14
// kelvin temp
const kelvin = 293;
//celsius equal to 273 < kelvin
const celsius = kelvin - 273;
//equation to calc fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// round fahrenheit;
fahrenheit = Math.floor(fahrenheit);
// printing conversion
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//JS 15
// integer used to calc dog yaers
const myAge = 34;
// variable for first two dog years
let earlyYears = 2;
// equation for calc early years
earlyYears *= 10.5; 
// myAge-2 acc for first two yaers
let laterYears = myAge - 2;
// laterYears*4 
laterYears *= 4;
//eq to convert human to dog years
let myAgeInDogYears = earlyYears + laterYears;
//name string to lowercase
const myName = 'Mark'.toLowerCase();
// printing sentence using converted data
console.log(`My name is ${myName}. I am ${myAgeInDogYears} old in dog years.`)

//JS 16
let isSoccerFan = false;
if (isSoccerFan === true ) {
  console.log('Goal!')
} else {
  console.log('No goal!')
}

//JS 17
let wordCount = 45;
let favoritePhrase = 'g';

//JS 18
if (!favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
}

//JS 19
let hungerLevel = 10;
if (hungerLevel > 7){
  console.log('Time to eat')
} else {
  console.log('We can eat later!')
}

//JS 20
let moonPhase = 'full';
if (moonPhase === 'full'){
  console.log('Howl!')
} else {
  console.log('I swear I am not a werewolf.')
}

//JS 21
let moonPhase = 'solar eclipse';
if (moonPhase === 'full') {
  console.log('Howl!')
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.')
} else if (moonPhase === 'mostly new'){
  console.log('Back on two feet.')	
}else {
  console.log('Invalid moon phase.')
}

//JS 22
let moonPhase = 'full';
let isFoggyNight = false;
if (moonPhase === 'full' || isFoggyNight === true) {
  console.log('Howl!')
}

//JS 23
let moonPhase = 'full';
switch (moonPhase){
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier.');
    break;
  case 'mostly new': 
    console.log('Back on two feet.');
    break;
  default:
    console.log('Invalid moon phase.')
    break;
}

//JS 24
let isLocked = false;
isLocked?
  console.log('You will need a key to open the door.'):
  console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect? console.log('Correct!')
:console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!'? console.log('I love that!')
:console.log("I don't love that!");

//JS 25
const takeOrder = () =>{
    console.log('Order: pizza')
}
takeOrder();

//JS 26
const takeOrder = (topping) => {
    console.log(`Order: pizza topped with ${topping}`);
};
takeOrder('topping');

//JS 27
const takeOrder = (topping, crustType) => {
    console.log(`Order: ${crustType} crust pizza topped with ${topping}`);
};
takeOrder('pepperoni', 'thin');
takeOrder('bacon', 'pan');
takeOrder('pineapple', 'hand-tossed')

//JS 28
let orderCount = 0;
const getSubTotal = (itemCount) =>{
  return itemCount * 7.5;
}
console.log(getSubTotal(orderCount));

//JS 29

const getSubTotal = (itemCount) => {
    return itemCount * 7.5;
}
const getTax = (itemCount) => {
  return getSubTotal(itemCount) * .06
}
const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
}
console.log(getSubTotal(orderCount));
console.log(getTotal(orderCount))

//JS 30
function isGreaterThan(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return true;
    } else {
      return false;
    }
}
console.log(isGreaterThan(450, 100));

//JS 31
const isGreaterThan = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
      return true;
    } else {
      return false;
    }
};
console.log(isGreaterThan(450, 100));

//JS 32
const volumeOfSphere = diameter => 
  (1/6) * Math.PI * diameter * diameter * diameter;

//JS 33
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('Error!');
    }
  }
  const getComputerChoice = () =>{
    randNum = Math.floor(Math.random() * 3);
    switch (randNum){
      case 0:
        return 'rock';
      case 1: 
        return 'paper';
      case 2: 
        return 'scissors';
    }
  }
  const determineWinner = (getUserChoice, getComputerChoice) => {
    if (getUserChoice === getComputerChoice) {
      return 'Tie game'  }
    if ((getUserChoice === 'rock' && getComputerChoice === 'paper')|| (getUserChoice === 'paper' &&
       getComputerChoice === 'scissors') || (getUserChoice === 'scissors' && getComputerChoice === 'rock')){
      return 'The computer won!';
    }else if (getUserChoice === 'bomb'){
     return 'You Won!' 
    } else{
      return 'You won!'
    }
  }
   const playGame = () => {
     const userChoice = getUserChoice('bomb');
     const computerChoice = getComputerChoice();
     console.log(`You threw: ${userChoice}`);
     console.log(`The computer threw: ${computerChoice}`);
     console.log(determineWinner(userChoice, computerChoice));
};
  
playGame();

//JS 34
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log("You've got the perfect amount of sleep.");
  }
  
  else if (actualSleepHours >
    idealSleepHours){
    console.log("You've got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than needed.");
  } else if (actualSleepHours < idealSleepHours){
    console.log("You need " + (idealSleepHours - actualSleepHours) + " more hours of rest.");
  } else{
    console.log("Error!")
  }
};

calculateSleepDebt();

//JS 35
const satellite = 'The Moon'
const galaxy = 'The Milky Way'
let stars = 'North Star'

const myNightSky = () => {
  return 'Night Sky: ' + satellite +', ' + stars +', ' + galaxy;
}

console.log(myNightSky())

//JS 36
const satellite = 'The Moon'
const galaxy = 'The Milky Way'
let stars = 'North Star'

const myNightSky = () => {
  return 'Night Sky: ' + satellite +', ' + stars +', ' + galaxy;
}

console.log(myNightSky())

//JS 37
let stars = 'North Star'

const myNightSky = () => {
  stars = 'Sirius'
  return 'Night Sky: ' + satellite +', ' + stars +', ' + galaxy;
}

console.log(myNightSky())
console.log(stars)

//JS 38
const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves);
    
};
visibleLightWaves();
console.log(lightWaves)

//JS 39
const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic'
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights'
      console.log(lightWaves)
    }
    console.log(lightWaves);
};
visibleLightWaves();


//JS 40
const starCount = () => {
    let i = 5;
    console.log(i)
    for (let i = 0; i < 12; i++) {
      console.log(i)
    }
};
  
starCount();
console.log(i)

//JS 41
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // The scope of `days` is too tight 
  const getTrainingDays = event => {
      let days;
    if (event === 'Marathon') {
       days = 50;
    } else if (event === 'Triathlon') {
       days = 100;
    } else if (event === 'Pentathlon') {
       days = 200;
    }
  
    return days;
  };
  // The scope of `name` is too tight 
  const name = 'Nala';
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  const event = getRandEvent();
  const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
logEvent(name, event);
logTime(name, days);

//JS 42
let newYearsResolutions = ['leap', 'jump', 'hop'];
console.log(newYearsResolutions);

//JS 43
let newYearsResolutions = ['leap', 'jump', 'hop'];
let listItem = newYearsResolutions[0]
console.log(listItem);
console.log(newYearsResolutions[2])
console.log(newYearsResolutions[3])

//JS 44
newYearsResolutions[1] = 'Learn a new language'

//JS 45
console.log(newYearsResolutions.length);

//JS 46 
newYearsResolutions.push('run','walk');
console.log(newYearsResolutions);
newYearsResolutions.pop();
console.log(newYearsResolutions);

//JS 47
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));

//JS 48
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('BBQ Sauce');
console.log(condiments);

condiments = ['BBQ Sauce'];
console.log(condiments);

utensils.pop();
console.log(utensils);
utensils = ['Slicing Knife', 'Basting Brush']

//JS 49
let vacationSpots = ['Alaska', 'Germany', 'Japan'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//JS 50
for (let vacationSpotIndex = 0; vacationSpotIndex<vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
};

//JS 51
for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--);

//JS 52
let myPlaces  = ['Alaska', 'Germany', 'Japan'];
let friendPlaces = ['Fiji', 'Quebec', 'Italy'];
for ​(let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) { 
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log('Match: ' + friendPlaces[friendPlacesIndex]);
    }
  }
}

//JS 53
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Club';
while (currentCard !== 'Spade'){
   console.log(currentCard);
   currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log('Found a Spade')

//JS 54
fruits.forEach(fruit =>console.log('I want to eat ' + fruit)) 

//JS 55
let secretMessage = animals.map(animals => animals[0])

let smallNumbers = bigNumbers.map(function(number){
  return number / 100;
});

//JS 56
let smallNumbers = randomNumbers.filter(num => num < 250);
let longFavoriteWords = favoriteWords.filter(word => word.length > 7);


//JS 57
console.log(words.some(function(word) {
  return word.length < 6;
}));
let interestingWords = words.filter(word => word.length > 5);
console.log(interestingWords.every(word =>  word.length > 5 ));

//JS 58
cities.forEach(city => console.log('Have you visited ' + city + '?'));
let longCities = cities.filter(city => city.length > 7);
let smallerNums = nums.map(num => num - 5);
nums.every(num => num < 0);

//JS 59

let person = {
  name:'Mark',
  age: 34
};

//JS 60
console.log(person.name)
console.log(person.age)

//JS 61
console.log(person['name'])
console.log(person['age'])

//JS 62
let person = {
  name: 'Mark',
  age: 35,
  weekendAlarm: 'Alarm set to 8AM',
  weekAlarm: 'Alarm set to 7AM'
};
console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}
console.log(person[alarm]);

//JS 63
person.hobbies = ['Video-games', 'Listenig to music'];
console.log(person.hobbies);

//JS 64
person.hobbies = ['Video-games', 'Listening to music'];
person.hobbies = ['Video-games'];
console.log(person.hobbies);

//JS 65
sayHello: () => {
  return 'Hello, there!';
}
console.log(person.sayHello());

//JS 66
let person = {
  name: 'Mark',
  age: 35,
  weekendAlarm: 'Alarm set to 8AM',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() {
    return 'Hello, there!';
  },
  sayGoodbye() {
    return 'Goodbye!';
  }
};

//JS 67
let person = {
  name: 'Mark',
  age: 35,
  weekendAlarm: 'Alarm set to 8AM',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  sayGoodbye() {
    return 'Goodbye!';
  }
};

//JS 68
let friend = {
  name: 'Tony'
};

friend.sayHello = person.sayHello;

//JS 69
let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(newAge) {
    if (typeof newAge === 'number') {
        this._age = newAge;
      console.log(`${newAge} is valid input.`);
    } else {
      return('Invalid input')
    }
  }
};

 //JS 70
 person.age = 39; 

 //JS 71
 let person = {
  _name: 'Lu Xun',
  _age: 137,
  
get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }
};

console.log(person.age)

//JS 72
class Surgeon{
  constructor(name, department){
    this.name = name;
    this.department = department;
  }
}

//JS 73
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular')
const surgeonDurant = new Surgeon('Durant', 'Orthopedics')

//JS 74
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//JS 75
console.log(surgeonCurry.name )
surgeonCurry.takeVacationDays(3)
console.log(surgeonCurry.remainingVacationDays)

//JS 76
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name(){
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
}

//JS 77
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

//JS 78
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

//JS 79
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

//JS 80
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

//JS 81
let esFivePercentageSupport = 95.47;
let esSixTemplateLiterals = 87.61;

//JS 82
var carbonara = "You can make carbonara with " + pasta + ', ' + meat + ', ' + " and a sauce made with " + sauce + ".";

//JS 83
let Airplane = {};
Airplane.myAirplane = "StarJet"
module.exports = Airplane;

//JS 84
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

//JS 85
let Airplane = {};
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

//JS 86
let Airplane = {};

Airplane.availableAirplanes = [
{  
  name: 'AeroJet',
  fuelCapacity: 800
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500
 }
];

export default Airplane;

//JS 87
import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

//JS 88
let flightRequirements = {
  requiredStaff: 4,
};

let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
},                          
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants']
}];

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export { availableAirplanes, flightRequirements, meetsStaffRequirements};

//JS 89
import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

//JS 90
export let availableAirplanes = [
  {name: 'AeroJet',
   fuelCapacity: 800,
   availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
   maxSpeed: 1200,
   minSpeed: 300
  }, 
  {name: 'SkyJet',
   fuelCapacity: 500,
   availableStaff: ['pilots', 'flightAttendants'],
   maxSpeed: 800,
   minSpeed: 200
  }
  ];
  
  export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
  };
  
  export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
      return true;
    } else {
      return false;
    }
  };
  
  export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
      return true;
      } else {
      return false;
    }
  };
  
//JS 91
import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();

//JS 92
export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };

//JS 93
import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

//JS 94
export let availableAirplanes = [
];
export let flightRequirements = {
};
export function meetsStaffRequirements(availableStaff, requiredStaff) {
};
export default meetsSpeedRangeRequirements;

//JS 95
import { availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

//JS 96
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint'
 
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}

xhr.open('GET', url);
xhr.send();

//JS 97
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

//JS 98
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

const topicQuery = topicField.value;
const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

//JS 99
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

xhr.open('POST', url);
xhr.send(data);
 
//JS 100
fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});

//JS 101
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';


const getSuggestions = () => {
const wordQuery = inputField.value;
const endpoint = `${url}${queryParams}${wordQuery}`;

fetch(endpoint).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message)
}).then(jsonResponse => {renderResponse(jsonResponse)});}