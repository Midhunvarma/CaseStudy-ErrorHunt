const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://midhun:varma123@cluster0.95yvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true  });
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;


