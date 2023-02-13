const { Router } = require("express");

const UsersController = require("../controllers/UserController");
const usersController = new UsersController()
const usersRoutes = Router();

function myMiddleware(req, resp, next) {
    if(!req.body.isAdmin){
      return resp.json({message: "não autorizado"})
    }

    next()
}


usersRoutes.put("/:id", usersController.update);
usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;
