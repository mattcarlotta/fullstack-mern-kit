import mongoose from "mongoose";
import mongodbConnection from "database";
import User from "models/user";
import { createUser } from "controllers/user";
import { mockRequest, mockResponse, newUser } from "../../__mocks__/helpers";

const addUser = {
  ...newUser,
  userName: "exampleuser4",
};

const addUser2 = {
  ...newUser,
  userName: "duplicateuser",
};

const emptybody = {
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  backgroundInfo: "",
  address: {},
};

describe("Create User Controller", () => {
  beforeAll(async () => {
    mongodbConnection();
    await User.createUser(addUser2);
  });

  let res;
  beforeEach(() => {
    res = mockResponse();
  });

  afterAll(async (done) => {
    await User.deleteMany({});
    mongoose.disconnect(done);
  });

  it("handles empty body requests", async () => {
    const req = mockRequest(null, emptybody);

    await createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      err: "Missing user card creation parameters.",
    });
  });

  it("handles valid requests to create a user", async () => {
    const req = mockRequest(null, addUser);

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: `Successfully created ${req.body.userName}.`,
    });
  });

  it("handles invalid requests to create a duplicate user", async () => {
    const req = mockRequest(null, addUser2);

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      err: "Error: That username is already in use!",
    });
  });
});
