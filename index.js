//Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});

// // Your web app's Firebase configuration
// var firebaseConfig = {
// apiKey: "AIzaSyAJd02D_vzcvGoK6_dWcAfLJhjPlpykVw8",
// authDomain: "streak-cd4d1.firebaseapp.com",
// databaseURL: "https://streak-cd4d1-default-rtdb.firebaseio.com",
// projectId: "streak-cd4d1",
// storageBucket: "streak-cd4d1.appspot.com",
// messagingSenderId: "16910682487",
// appId: "1:16910682487:web:77cc3af93fe99f175e7972"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


//Initialize socket.io
let io = require('socket.io').listen(server);

//Listen for individual clients/users to connect
io.sockets.on('connection', function(socket) {
    console.log("We have a new client: " + socket.id);

    //Listen for a message named 'msg' from this client
    socket.on('msg', function(data) {
        //Data can be numbers, strings, objects
        console.log("Received a 'msg' event");
        console.log(data);

        //Send a response to all clients, including this one
        io.sockets.emit('msg', data);

        //Send a response to all other clients, not including this one
        // socket.broadcast.emit('msg', data);

        //Send a response to just this client
        // socket.emit('msg', data);
    });

    //Listen for this client to disconnect
    socket.on('disconnect', function() {
        console.log("A client has disconnected: " + socket.id);
    });
});





















// //Initialize the express 'app' object
// let express = require('express');
// let app = express();
// app.use('/', express.static('public'));

// //Initialize the actual HTTP server
// let http = require('http');
// let server = http.createServer(app);
// let port = process.env.PORT || 3000;
// server.listen(port, () => {
//     console.log("Server listening at port: " + port);
// });

// //Initialize socket.io
// let io = require('socket.io').listen(server);

// const MongoClient = require('mongodb').MongoClient;
 
// // Connection URL
// const url = 'mongodb://localhost:27017';
 
// // Database Name
// const dbName = 'streak';
 
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
 
//     findUser(db, function() {
//       client.close();
//     });
//   });

// const insertUser = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Insert some documents
//     collection.insertOne(
//       {username : "todd", password : "doll"}
//     , function(err, result) {
//       console.log("Inserted 1 user into the collection");
//       callback(result);
//     });
//   }

// const findUser = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Find some documents
//     collection.find({username : "todd", password : "doll"}).toArray(function(err, docs) {
//       console.log("Found the following records");
//       console.log(docs);
//       callback(docs);
//     });
//   }

// // MongoClient.connect(url, function(err, db) {
// //     if (err) throw err;
// //     var dbo = db.db("mydb");
// //     dbo.createCollection("users", function(err, res) {
// //       if (err) throw err;
// //       console.log("Collection created!");
// //       db.close();
// //     });
// //   });

// //   // Your web app's Firebase configuration
// //   var firebaseConfig = {
// //     apiKey: "AIzaSyAJd02D_vzcvGoK6_dWcAfLJhjPlpykVw8",
// //     authDomain: "streak-cd4d1.firebaseapp.com",
// //     databaseURL: "https://streak-cd4d1-default-rtdb.firebaseio.com",
// //     projectId: "streak-cd4d1",
// //     storageBucket: "streak-cd4d1.appspot.com",
// //     messagingSenderId: "16910682487",
// //     appId: "1:16910682487:web:77cc3af93fe99f175e7972"
// //   };
// //   // Initialize Firebase
// //   firebase.initializeApp(firebaseConfig);

// //Listen for individual clients/users to connect
// io.sockets.on('connection', function(socket) {
//     console.log("We have a new client: " + socket.id);

//     //Listen for a message named 'msg' from this client
//     socket.on('msg', function(data) {
//         //Data can be numbers, strings, objects
//         console.log("Received a 'msg' event");
//         console.log(data);

//         //Send a response to all clients, including this one
//         io.sockets.emit('msg', data);

//         //Send a response to all other clients, not including this one
//         // socket.broadcast.emit('msg', data);

//         //Send a response to just this client
//         // socket.emit('msg', data);
//     });

//     //Listen for this client to disconnect
//     socket.on('disconnect', function() {
//         console.log("A client has disconnected: " + socket.id);
//     });
// });


