import { Router } from "express";
import UsersController from "./controllers/UserController";
import authentication from "./middleware/authentication";

const routes = Router();

routes.post("/users", authentication.validate, UsersController.create);
routes.get("/users", authentication.validate, UsersController.findAll);
routes.delete("/users/:id", authentication.validate, UsersController.delete);
routes.post("/user/login", UsersController.login);

export default routes;