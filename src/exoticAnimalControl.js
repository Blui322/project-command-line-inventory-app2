const { nanoid } = require("nanoid");
const {faker} = require("@faker-js/faker");



function create (exoticAnimals, animalName){
    const fakePrice = faker.commerce.price();
    const fakerFacts = faker.lorem.sentences(4);
    const fakeImg = faker.image.animals()
    const animal = { name: animalName,
    id: nanoid(4),
    price: fakePrice,
    facts: fakerFacts,
    img: fakeImg
    };
    exoticAnimals.push(animal);
    return exoticAnimals;
}
function index (exoticAnimals){
    return exoticAnimals.map((animal) => animal.id + ' ' +  animal.name + ' $' + animal.price).join('\n');
}

function show (exoticAnimals, animalId){
    const animal = exoticAnimals.find((animal) => animal.id === animalId);
    return animal.id + '. ' + animal.name + '. ' + animal.price  + '. ' + animal.inStock + '. ' + animal.facts + '. ' + animal.img;
}

const inform = console.log;

function destroy(exoticAnimals, animalId){
    const index = exoticAnimals.findIndex((animal) => animal.id === animalId);
    if( index > -1){
        exoticAnimals.splice(index, 1);
        inform('Animal successfully removed from collection');
        return exoticAnimals;
    } else {
        inform('Animal not found. No action take');
        return exoticAnimals;
    }
}

function update(exoticAnimals, animalId, updatedAnimal){
    const index = animals.findIndex((animal) => animal.id === animalId);
    if (index > -1){
        exoticAnimals[index].id = animalId;
        exoticAnimals[index].name = updatedAnimal;
        exoticAnimals[index].price;
        inform("Animal successfully updated");
        return exoticAnimals;
    } else {
        inform("Animal not found. no action taken");
        return exoticAnimals;
    }
}

  


 module.exports = {
    create, 
    index, 
    show, 
    destroy, 
    update, 
    
    
};
