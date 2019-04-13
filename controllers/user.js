import isEmpty from "lodash/isEmpty";
import User from "models/user";
import { sendError } from "utils/helpers";
import seeds from "seeds/data";

const createUser = async (req, res, done) => {
  const {
    email,
    firstName,
    lastName,
    userName,
    backgroundInfo,
    address,
  } = req.body;

  if (
    !email
    || !firstName
    || !lastName
    || !userName
    || !backgroundInfo
    || isEmpty(address)
  ) return sendError("Missing user card creation parameters.", res, done);

  try {
    const userNameTaken = await User.findOne({ userName: req.body.userName });
    if (userNameTaken) return sendError("Error: That username is already in use!", res, done);

    await User.createUser(req.body);
    res
      .status(201)
      .json({ message: `Successfully created ${req.body.userName}.` });
  } catch (err) {
    return sendError(err, res, done);
  }
};

const deleteUser = async (req, res, done) => {
  const { id } = req.params;

  if (!id) return sendError("Missing user delete id parameter.", res, done);

  try {
    const existingUser = await User.findById(id);
    if (!existingUser) return sendError("Unable to locate that user for deletion.", res, done);

    await User.findByIdAndDelete(existingUser.id);

    res
      .status(201)
      .json({ message: `Successfully deleted ${existingUser.userName}.` });
  } catch (err) {
    return sendError(err, res, done);
  }
};

const getUsers = async (req, res, done) => {
  try {
    const users = await User.find({});

    res.status(200).send({ users });
  } catch (err) {
    return sendError(err, res, done);
  }
};

const seedDatabase = async (req, res, done) => {
  try {
    await User.deleteMany({});
    await User.insertMany(seeds);
    const users = await User.find({});

    res.status(201).send({ users });
  } catch (err) {
    return sendError(err, res, done);
  }
};

const updateUser = async (req, res, done) => {
  const { id } = req.params;

  if (!id || !req.body) return sendError("Missing user update parameters.", res, done);

  try {
    const existingUser = await User.findById(id);
    if (!existingUser) return sendError("Unable to locate that user to update.", res, done);

    const userNameTaken = await User.findOne({ userName: req.body.userName });
    if (userNameTaken) return sendError("Error: That username is already in use!", res, done);

    await User.findOneAndUpdate({ _id: id }, req.body);

    res
      .status(201)
      .json({ message: `Successfully updated ${req.body.userName}.` });
  } catch (err) {
    return sendError(err, res, done);
  }
};

export {
  createUser, deleteUser, getUsers, seedDatabase, updateUser,
};
