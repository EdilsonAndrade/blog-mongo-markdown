// You can create your Post model here.
import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    title: {required:true, type: mongoose.Schema.Types.String},
    content: {required:true,  type: mongoose.Schema.Types.String},
    created_at: Date,
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
})

export default mongoose.model('Post', Post);