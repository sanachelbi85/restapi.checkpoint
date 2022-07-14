const express= require("express");
const app= express();
app.use(express.json());
const User=  require("./Models/User");
const DB_connect = require("./DB_connect");
require("dotenv").config();
DB_connect();

// post User

app.post("/add", async (req, res) => {
    try {
      let newUser = new User(req.body);
      let result = await newUser.save();
      res.send({ result, msg: "succefull added" });
    } catch (error) {
      console.log(error);
    }
  });
// get all User

app.get("/", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ result, msg: "all user" });
  } catch (error) {
    console.log(error);
  }
});

// update User
app.put ("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      {_id: req.params.id},
      {$set: { ...req.body }}
    );
    res.send({ result, msg: " one user" });
  } catch (error) {
    console.log(error);
  }
});
//delete User
app.delete ("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " delete user" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, (err)=> err 
? console.log(err)
: console.log("server is running"));