const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuid1 } = require("uuid");
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  lastname: {
    type: String,
    maxlength: 32,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  userinfo: {
    type: String,
    trim: true,
  },
  // TODO: Come back here
  encry_password: {
    type: String,
    required: true,
  },
  salt: String,
  role: {
    type: Number,
    default: 0,
  },
  purchases: {
    type: Array,
    default: [],
  },
},{timestamps:true});

// virtulas

userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuid1();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

// schema methods
userSchema.method = {
    authenticatec = function (plainPassword) {
        return this.securePassword(plainPassword) === this.encry_password
    },
    
  securePassword: function(plainPassword) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
    } catch (ex) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
