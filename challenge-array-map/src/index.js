/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
//ANSWER MY
let result = nums.map(n => n**2)
console.log(result)
//ANSWER COURSE
const squares = nums.map(function(num) {
    return num * num
})
console.log(squares)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
//ANSWER MY
let name = names.map(firstLetter => firstLetter.slice(0,1).toUpperCase() + firstLetter.slice(1, firstLetter.length))
console.log(name)
//ANSWER COURSE
const capitalized = names.map((namee) => {
    return namee[0].toUpperCase() + namee.slice(1)
})
console.log(capitalized)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
//ANSWER MY
let pokemons = pokemon.map(pokemon => `<p>${pokemon}<p/>`)
console.log(pokemons)
//ANSWER COURSE
const paragraphs = pokemon.map(mon => `<p>${mon}<p/>`)
console.log(paragraphs)