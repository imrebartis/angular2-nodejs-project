/*jshint esversion: 6 */

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(mongooseUniqueValidator);

const User = mongoose.model("User", schema);

module.exports = User;