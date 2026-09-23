const express = require("express");

const router = express.Router();

const controller = require("../controllers/userController.js");

const {
    validateCreate,
    validateUpdate
} = require("../middlewares/validation.js");
console.log("validateCreate:", validateCreate);
console.log("validateUpdate:", validateUpdate);
console.log("createUser:", controller.createUser);

router.get("/", controller.getUsers);

router.get("/:id", controller.getUserById);


router.post(
    "/",
    validateCreate,
    controller.createUser
);


router.put(
    "/:id",
    validateUpdate,
    controller.updateUser
);


router.delete(
    "/:id",
    controller.deleteUser
);


module.exports = router;
