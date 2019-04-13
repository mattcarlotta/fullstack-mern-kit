import mongoose from "mongoose";
import { ObjectID } from "mongodb";
import mongodbConnection from "database";
import User from "models/user";
import { getUsers } from "controllers/user";
import { mockRequest, mockResponse, newUser } from "../../__mocks__/helpers";

const addUser = {
  ...newUser,
  userName: "exampleuser6",
};

describe("Get Users Controller", () => {
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

  it("handles get users requests (empty db)", async () => {
    const req = mockRequest();

    await getUsers(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ users: [] });
  });

  it("handles get users requests (populated)", async () => {
    await User.createUser(addUser);
    const req = mockRequest();

    await getUsers(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      users: expect.arrayContaining([
        expect.objectContaining({
          __v: expect.any(Number),
          _id: expect.any(ObjectID),
          address: expect.objectContaining({
            city: expect.any(String),
            state: expect.any(String),
            street: expect.any(String),
            suite: expect.any(String),
            zipCode: expect.any(String),
          }),
          backgroundInfo: expect.any(String),
          email: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
          userName: expect.any(String),
        }),
      ]),
    });
  });
});
