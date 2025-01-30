import mongoose from "mongoose";
import userModel from "./user.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

function getUsers(name, job) {
  let promise;
  console.log(name, job);
  if (name === undefined && job === undefined) {
    promise = userModel.find();
  } else if (name && !job) {
    promise = findUserByName(name);
  } else if (job && !name) {
    promise = findUserByJob(job);
  } else {
    promise = findUserByIdAndName(name, job);
  }
  return promise;
}

function findUserByIdAndName(name, job) {
  return userModel.find({name: name}).find({job: job});
}

function findUserById(id) {
  return userModel.findById(id);
}

function addUser(user) {
  const userToAdd = new userModel(user);
  const promise = userToAdd.save();
  return promise;
}

function findUserByName(name) {
  return userModel.find({ name: name });
}

function findUserByJob(job) {
  return userModel.find({ job: job });
}

function delelteUserById(id) {
  return userModel.findByIdAndDelete(id);
}
export default {
  addUser,
  getUsers,
  findUserById,
  findUserByName,
  findUserByJob,
  delelteUserById,
};