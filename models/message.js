/*jshint esversion: 6 */

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const schema = new Schema({
  content: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
  });

const Message = mongoose.model("Message", schema);

module.exports = Message;