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

