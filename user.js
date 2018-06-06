var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var Utils = require('./utils');
var url = 'mongodb://localhost:27017/Blog';

module.exports = {
    signup: function (name, email, password) {
        MongoClient.connect(url, function (err, client) {
            if (err) throw err;
            var db = client.db('Blog');
            db.collection('user').insertOne({
                name: name,
                email: email,
                password: Utils.hash(password)
            }, function (err, result) {
                assert.equal(err, null);
                console.log('Saved the user sign up details.');
            });
        });
    },
    validateSignIn: function (email, password, callback) {
        MongoClient.connect(url, function (err, client) {
            if (err) throw err;
            var db = client.db('Blog');
            db.collection('user').findOne({
                email: email,
                password: Utils.hash(password)
            }, function (err, result) {
                if (result == null) {
                    callback(err, false);
                } else {
                    callback(err, true);
                }
            });
        });
    }
};
