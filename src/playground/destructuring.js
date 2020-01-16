// OBJECT DESTRUCTURING

// const person = {    
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name : firstname = 'Anonymous', age} = person;
// console.log(`${firstname} is ${age}`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name : publisherName = 'self-published'} = book.publisher;
console.log(publisherName); // default, self-published


// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, , state = 'New York'] = address;
console.log(`You are in  ${state}`)