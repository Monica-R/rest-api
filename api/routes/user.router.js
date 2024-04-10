const router = require('express').Router()

const  {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
} = require('../controllers/user.controller.js');

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;