/*Ejercicio: 
El tipo "Person" está perdido. Por favor definilo y usalo en el array de personas y en la funcion logPerson para poder arreglar todos los problemas de TS.*/

interface NormalUser {
	name: string;
	age: number;
	occupation: string;
}

interface Admin {
	name: string;
	age: number;
	role: string;
}

type Person = NormalUser | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver',
    },
];

function logPerson2(person: Person) {
    console.log(` - ${person.name}, ${person.age}`);
}

console.log('Persons:');
persons.forEach(logPerson2);