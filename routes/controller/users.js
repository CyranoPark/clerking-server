const UserService = require('../../Service/User');

exports.getUser = async (req, res, next) => {
    try {
        const { userId } = req.param;
        const user = await UserService.getUserById(userId);

        res.status(200).send({ user });
    } catch (e) {
        next();
    }
};
