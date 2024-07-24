const { Post } = require("../models/Post");
const { asyncHandler } = require("../utils/asyncHandler");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

exports.createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    throw new ApiError(400, "Title and content are required");
  }

  const newPost = await Post.create({ title, content });
  res
    .status(201)
    .json(new ApiResponse(201, newPost, "Post created successfully"));
});

exports.getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.findAll();
  res
    .status(200)
    .json(new ApiResponse(200, posts, "Posts retrieved successfully"));
});

exports.getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) {
    throw new ApiError(404, "Post not found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, post, "Post retrieved successfully"));
});

exports.updatePost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.findByPk(req.params.id);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  post.title = title || post.title;
  post.content = content || post.content;

  await post.save();
  res.status(200).json(new ApiResponse(200, post, "Post updated successfully"));
});

exports.deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findByPk(req.params.id);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  await post.destroy();
  res.status(200).json(new ApiResponse(200, null, "Post deleted successfully"));
});
