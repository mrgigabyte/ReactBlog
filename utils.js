const bcrypt = require('bcrypt');

module.exports = {
    hash: function (keyword) {
        bcrypt.hash(keyword, 10, function (err, hash) {
            if (err) throw err;
            console.log(hash);
            return hash;
        });
    }
};
