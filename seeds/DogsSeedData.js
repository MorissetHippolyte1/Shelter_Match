const { Dogs } = require('../models');

const dogsdata =
console.log(dogsdata);
[
    {
      "name": "Tator",
      "age": 2,
      "size": "Large",
      "breed":"German Shepard",
      "sex": "male"
    },
    {
        "name": "Buttons",
        "age": 5,
        "size": "small",
        "breed":"Chihuahua",
        "sex": "Male"
    },
    {
        "name": "Henry",
        "age": 7,
        "size": "Large",
        "breed":"Golden Retriever",
        "sex": "Male"
    },
    {
        "name": "Diesel",
        "age": 9,
        "size": "Large",
        "breed":"Boxer Mix",
        "sex": "Male"
    },
    {
        "name": "Honey",
        "age": 1,
        "size": "Medium",
        "breed":"Beagle",
        "sex": "Female"
    },
    {
        "name": "Biscuit",
        "age": 12,
        "size": "Small",
        "breed":"Toy Poodle",
        "sex": "Female"
    },
    {
        "name": "Indigo",
        "age": 4,
        "size": "Large",
        "breed":"PitBull mix",
        "sex": "Male"
    },
    {
        "name": "Sebastian",
        "age": 6,
        "size": "Medium",
        "breed":"Basset Hound",
        "sex": "Male"
    },
    {
        "name": "Coco",
        "age": 8,
        "size": "small",
        "breed":"Pug",
        "sex": "Female"
    },
    {
        "name": "Taco",
        "age": 2,
        "size": "Medium",
        "breed":"Labrador Retriever",
        "sex": "Male"
    },
    {
        "name": "Zola",
        "age": 10,
        "size": "Medium",
        "breed":"Mini Doodle",
        "sex": "Female"
    },
    {
        "name": "Sage",
        "age": 4,
        "size": "Large",
        "breed":"Husky",
        "sex": "Male"
    }
  ]
  
const seedDogs = () => Dogs.bulkCreate(dogsdata);

module.exports = seedDogs;
