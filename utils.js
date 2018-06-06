const bcrypt = require('bcrypt');

module.exports = {
    hash: function (keyword, callback) {
        bcrypt.hash(keyword, 10, function (err, hash) {
            callback(err, hash);
        });
    },
    compare: function (keyword, hash, callback) {
        bcrypt.compare(keyword, hash, function (err, res) {
            if (res) {
                callback(err, true);
            } else {
                callback(err, false);
            }
        });
    }
};
