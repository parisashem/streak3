import MongoClient from 'mongodb';

const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
         
// Database Name
const dbName = 'streak';

window.addEventListener('load', function () {

    document.getElementById("createaccount").addEventListener("click", function(){
    
        let user = document.getElementById("user"); 
        let password = document.getElementById("password"); 
         
        // Use connect method to connect to the server
        MongoClient.connect(url, function(err, client) {
          console.log("Connected successfully to server");
         
          const db = client.db(dbName);
         
          insertUser(db, user.value, password.value, function() {
              client.close();
          });
        });
    });
    
    const insertUser = function(db, username, password, callback) {
        // Get the documents collection
        const collection = db.collection('users');
        // Insert some documents
        collection.insertOne(
          {username : username, password : password},
         function(err, result) {
          console.log("Inserted 1 user into the collection");
          callback(result);
        });
    }
});