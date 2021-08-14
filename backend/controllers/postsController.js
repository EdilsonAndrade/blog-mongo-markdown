import asyncHandler from 'express-async-handler';

import Category from '../models/category.js';
import Post from '../models/post.js';

const getPosts = asyncHandler(async(request, response) => {
  const posts = await Post.find().sort({created_at: 'asc'}).populate('category');
  response.json(posts)
});

const createPost = asyncHandler(async(request, response) => {
  const {id, category, title, content, date} = request.body;

  try {
    let cat = await Category.findOne({
      name: category
    });
    if(!cat || cat.length <=0){
      
      cat = await Category.create({
        name: category,
      });
    }

    let post = null;
    if(id){
      post = await Post.findOneAndUpdate({_id:id},{
        title,
        content,
        created_at: date,
        category: cat._id
      });
    }else{
      post = await Post.create({
        title,
        content,
        created_at: date,
        category: cat._id
      });
    }
  
  
    return response.json(post);

  } catch (error) {
    console.log(error)
    return response.status(400).json({Error: 'Creation Post Failed!', stack: error});
  }

});

const deletePost = asyncHandler(async(request, response) =>{
  const { id } = request.params;
  const postDeleted = await Post.findOneAndDelete({
    _id:id
  })

  return response.json(postDeleted);
 
})

export {
  getPosts,
  createPost,
  deletePost
};
