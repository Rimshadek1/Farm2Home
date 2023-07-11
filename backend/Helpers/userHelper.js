var db = require('../config/connection')
var collection = require('../config/collection')
module.exports = {

    Signup: (data) => {
        return new Promise((resolve, reject) => {
            db.get()
                .collection(collection.userCollection)
                .findOne({ username: data.username }) // Check if username already exists
                .then((user) => {
                    if (user) {
                        // Username already exists, send error message
                        resolve({ error: 'Username already exists' });
                    } else {
                        // Username doesn't exist, proceed with signup
                        db.get()
                            .collection(collection.userCollection)
                            .insertOne(data)
                            .then((response) => {
                                resolve(response.insertedId);
                            })
                            .catch((error) => {
                                console.log(error);
                                reject(error);
                            });
                    }
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    },

    Login: (details) => {
        return new Promise((resolve, reject) => {
            db.get()
                .collection(collection.userCollection)
                .findOne({ username: details.username })
                .then((user) => {
                    if (user) {
                        if (user.password === details.password) {
                            resolve({ status: true }); // Password is correct
                        } else {
                            resolve({ error: 'Username or password is incorrect' }); // Password is incorrect
                        }
                    } else {
                        resolve({ error: 'Username or password is incorrect' }); // User not found
                    }
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }

}