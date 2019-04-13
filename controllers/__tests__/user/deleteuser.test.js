import mongoose from "mongoose";
import mongodbConnection from "database";
import User from "models/user";
import { deleteUser } from "controllers/user";
import { mockRequest, mockResponse, newUser } from "../../__mocks__/helpers";

const addUser = {
  ...newUser,
  userName: "exampleuser5",
};

describe("Delete User Controller", () => {
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

  it("handles missing id params requests", async () => {
    const req = mockRequest(null, null, null, { id: "" });

    await deleteUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      err: "Missing user delete id parameter.",
    });
  });

  it("handles invalid id params requests", async () => {
    const req = mockRequest(null, null, null, {
      id: "5cb11f97d7cd972720377962",
    });

    await deleteUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      err: "Unable to locate that user for deletion.",
    });
  });

  it("handles valid id params requests", async () => {
    const user = await User.createUser(addUser);
    const req = mockRequest(null, null, null, {
      id: user._id,
    });

    await deleteUser(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: `Successfully deleted ${user.userName}.`,
    });
  });
});
