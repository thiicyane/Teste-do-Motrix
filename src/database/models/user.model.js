const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  titulo: {
    type:String,
    required:true,
  },
  mensagem: {
    type: String,
    required : true,
  },
  criado:{
    type: Timestamp
  }
})
