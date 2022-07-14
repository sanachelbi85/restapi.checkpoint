const mongoose = require("mongoose");
const schema=mongoose.Schema;

const Userschema = new schema({
   name:{type: String, required: true},
   surname: String,
   email:{type:String, unique:true}
    }
  );

  const User=mongoose.model("User",Userschema)
  module.exports = User;