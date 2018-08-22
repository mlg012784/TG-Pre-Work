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





