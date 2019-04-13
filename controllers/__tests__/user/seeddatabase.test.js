import mongoose from "mongoose";
import { ObjectID } from "mongodb";
import mongodbConnection from "database";
import User from "models/user";
import { seedDatabase } from "controllers/user";
import { mockRequest, mockResponse } from "../../__mocks__/helpers";

describe("SeedDatabase User Controller", () => {
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

  it("handles seed database requests", async () => {
    const req = mockRequest();

    await seedDatabase(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
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
