const movie = {
    name: "Hallowen",
    duration: 112, 
    description: "lorem ipsum dolore etc etc",
    ratin: 4.5, 
    genre: ["horror", "old", "terror"],
    casting: {
        director: {
            directorName: "Jhon Carpenter",
            age: 31, 
        },
        actors: {
            names: ["Actor 1","Actor 2","Actor 3","Actor 4",],
        }
    }
}
/*
console.log(movie.genre);

movie.genre.unshift("trash");

console.log(movie.genre);

console.log(movie.name);

const {name, duration, casting: {director: {directorName}} } = movie;

console.log(directorName);
*/

const todos = [
    {
        id: 1, 
        string: "Take the trash",
        isComplete: false,
    },
    {
        id: 2, 
        string: "Feed the dogos",
        isComplete: false,
    },
    {
        id: 3, 
        string: "Take a shower",
        isComplete: true,
    },
    
];

console.log(todos[1].string);

const todosJSON = JSON.stringify(todos);

console.log(todosJSON);