const mongoose = require('mongoose');


const URI = 'mongodb+srv://mongodbuser:pagal@cluster0-07kgq.mongodb.net/test?retryWrites=true&w=majority';

const connectdb = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!!!');
};


module.exports = connectdb;