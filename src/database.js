import mongoose, { mongo } from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/api-products")
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err))

