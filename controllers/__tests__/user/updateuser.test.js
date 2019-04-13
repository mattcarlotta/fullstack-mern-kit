import mongoose from "mongoose";
import mongodbConnection from "database";
import User from "models/user";
import { updateUser } from "controllers/user";
import { mockRequest, mockResponse, newUser } from "../../__mocks__/helpers";

const addUser = {
  ...newUser,
  userName: "exampleuser8",
};

const addUser2 = {
  ...newUser,
  userName: "exampleuser9",
};

const addUser3 = {
  ...newUser,
  userName: "exampleuser10",
};

const updatedUser = {
  email: "updateuser@test.com",
  firstName: "Update",
  lastName: "User",
  userName: "UpdatedUser",
  backgroundInfo: "This user was updated.",
  address: {
    street: "125 Update St.",
    suite: "Apt 1404",
    city: "Upton",
    state: "MA",
    zipCode: "55555",
  },
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
  beforeAll(() => {
    mongodbConnection();
  });

  let res;
  beforeEach(() => {
    res = mockResponse();
  });

  afterAll(async (done) => {
    await User.deleteMany({});
    mongoose.disconnect(done);
  });

  it("handles empty id params or empty body update requests", async () => {
    const req = mockRequest(null, emptybody, null, { id: "" });

    await updateUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      err: "Missing user update parameters.",
    });
  });

  it("handles invalid id params update requests", async () => {
    const req = mockRequest(null, updatedUser, null, {
      id: "5cb11f97d7cd972720377963",
    });

    await updateUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      err: "Unable to locate that user to update.",
    });
  });

  it("handles valid requests to update the user", async () => {
    const user = await User.createUser(addUser);
    const req = mockRequest(null, updatedUser, null, { id: user._id });

    await updateUser(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: `Successfully updated ${req.body.userName}.`,
    });
  });

  it("handles invalid requests to update user details to one that already exists", async () => {
    await User.create(addUser2);
    const user2 = await User.create(addUser3);
    const req = mockRequest(null, addUser2, null, { id: user2._id });

    await updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      err: "Error: That username is already in use!",
    });
  });
});
