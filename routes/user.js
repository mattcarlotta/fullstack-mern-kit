import {
  createUser,
  deleteUser,
  getUsers,
  seedDatabase,
  updateUser,
} from "controllers/user";

module.exports = (app) => {
  app.get("/api/users", getUsers);
  app.post("/api/users/create", createUser);
  app.put("/api/users/update/:id", updateUser);
  app.delete("/api/users/delete/:id", deleteUser);
  app.post("/api/users/seed", seedDatabase);
};
