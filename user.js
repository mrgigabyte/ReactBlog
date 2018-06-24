var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var Utils = require('./utils');
var url = 'mongodb://localhost:27017/Blog';

module.exports = {
    signup: function (name, email, password) {
        MongoClient.connect(url, function (err, client) {
            if (err) throw err;
            var db = client.db('Blog');
            Utils.hash(password, function (err, pass) {
                if (err) throw err;
                db.collection('user').insertOne({
                    name: name,
                    email: email,
                    password: pass
                }, function (err, result) {
                    assert.equal(err, null);
                    console.log('Saved the user sign up details.');
                });
            });
        });
    },
    validateSignIn: function (email, password, callback) {
        MongoClient.connect(url, function (err, client) {
            if (err) throw err;
            var db = client.db('Blog');
            db.collection('user').findOne({
                email: email
            }, function (err, result) {
                if (result == null) {
                    callback(err, false);
                } else {
                    let pass = result.password;
                    Utils.compare(password, pass, function (err1, res) {
                        if (err1) throw err1;
                        if (res) {
                            callback(err, true);
                        } else {
                            callback(err, false);
                        }
                    });
                }
            });
        });
    }
};
