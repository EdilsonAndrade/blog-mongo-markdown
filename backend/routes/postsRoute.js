import { getPosts, createPost, deletePost } from '../controllers/postsController.js';
import express from 'express';

const router = express.Router();
router.use(express.json());

router.route('/').get(getPosts);

router.route('/create').post(createPost);

router.route('/:id').delete(deletePost);

export default router;