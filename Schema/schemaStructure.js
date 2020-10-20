const express = require('express')
const mongoose = require("mongoose")

const schemaData = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Must be a valid and Unique entry"],
    unique: true
  },
  age: {
    type: Number,
    require: true
  },
  interest: {
    type: String,
    default: "Web Development"
  }
})

module.exports = mongoose.model( "schemaControl", schemaData)