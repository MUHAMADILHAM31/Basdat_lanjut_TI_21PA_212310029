/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('rentalfilm');

//  db.custumer.find().limit(2).skip(2)

// db.country.createIndex({"country" : 1})

// db.film.createIndex({"LanguageID" : 2}, {sparse : true})

// db.city.createIndex({"last_update" : 1}, {expireAfterSeconds :
    // 60})
// db.custumer.createIndex({"AddressId" : 1}, {v : 1  })

// db.custumer.createIndex({Email : "text"}, {default_language:
    // "english"})
// // db.custumer.createIndex({Firs_tName : "text"}, {language_override:
// "spanish"})

// db.customers.aggregate([ {$group: { _id: null,age:
    // { $sum: '$age' } } }]);

    // db.customers.aggregate([ {$group: { _id: null, age:
        // { $avg: '$age' } } }]); 
    // db.customers.aggregate([ {$group: { _id: null,age:
            // { $min: '$age' } } }]);
//  db.customers.aggregate([ {$group: { _id: null, age:
//  { $max:'age' }} }]);

db.actor({_id : 1}, {$push : {results: 100}})
