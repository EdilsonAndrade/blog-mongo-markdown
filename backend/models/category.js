// You can create your Post model here.
import mongoose from 'mongoose';

const Category = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true},
});

export default mongoose.model('Category', Category);