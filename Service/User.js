const Users = require('../Models/User');

class UserService {
    async getUserById(id) {
        return await Users.findById(id);
    }
}

module.exports = new UserService();
