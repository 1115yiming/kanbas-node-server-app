import model from "./model.js";
import mongoose from "mongoose";

export const createUser = (user) => model.create(user);

export const findUserByUsername = (username) =>
    model.findOne({ username: username });

export const findAllUsers = () => model.find();


export const findUserById = (userId) => model.findById(userId);


export const findUserByCredentials = (usr, pass) =>
    model.findOne({ username: usr, password: pass });

export const updateUser = (userId, user) =>
    model.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => model.deleteOne({ _id: userId });