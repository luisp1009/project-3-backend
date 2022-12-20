require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User.model");

mongoose
  .connect(process.env.MONGODB_URI)
  .then((x) => {
    console.log("connected to db name", x.connections[0].name);
    return User.create({
      email: "test@test22.com",
      password: "1234",
      name: "UserTest22",
    });
  })
  .then((createdUser) => {
    console.log("this is the new user", createdUser);
  })
  .catch((err) => console.log(err));
