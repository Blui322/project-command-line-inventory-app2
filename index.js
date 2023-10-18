const {readJSONFile, writeJSONFile} = require('./src/helpers');
const exoticAnimals = readJSONFile('./data', 'animalObj.json');
const { create, index, show, destroy, update, listOfAnimals } = require('./src/exoticAnimalControl');


// creste an alias called inform to store the console.log function
// when providing user feedback in the terminal use `inform`
// when developing/debugging use `console.log`
const inform = console.log;

function run() {
    let writeToFile = false;
    let updatedAnimals = [];

const action = process.argv[2];
  const animal = process.argv[3];
    
  switch (action) {
      case 'index': 
        const animalsView = index(exoticAnimals);
        inform(animalsView);
          break;
       case 'create':
        updatedAnimals = create(exoticAnimals, animal);
         writeToFile = true;
          break;
      case 'show': 
       const completAnimalsView = show(exoticAnimals, animal);
        inform(completAnimalsView);
          break;
      case 'update': 
       updatedAnimals = update(exoticAnimals, animal, process.argv[4]);
       writeToFile = true;
          break;
      case 'destroy': 
       updatedAnimals = destroy(exoticAnimals, animal);
       writeToFile = true;
          break;

      default: 
        inform('There was an error.');
}
if (writeToFile) {
  writeJSONFile('./data', 'animalObj.json', updatedAnimals);
}
}
run();
