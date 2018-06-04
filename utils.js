const bcrypt = require('bcrypt');

function hash(keyword) {
    bcrypt.hash(keyword, 10, function (err, hash) {
        return hash;
    });
}