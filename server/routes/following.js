import express from 'express';

import { getFollowedUsers, updateFollowedUsers, createFollowing } from '../controllers/following.js';

const followingRouter = express.Router();

// Will be reached by localhost:5000/posts

followingRouter.get('/', getFollowedUsers);
followingRouter.patch('/:id', updateFollowedUsers);
followingRouter.post('/', createFollowing);
//followingRouter.patch('/:id/likeSheet');

export default followingRouter;