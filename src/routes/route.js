// importing express // creating router
const express = require('express');
const router = express.Router();

// importing controllers
const Middlewares = require('../middlewares/commonMiddleware')
const AuthorController = require("../controllers/authorController");
const BlogController = require("../controllers/blogController");



//**    APIS   **//

// Author apis
router.post("/login", AuthorController.login);
router.post("/authors", AuthorController.createAuthor);

// blogs apis
router.post("/blogs", Middlewares.authenticateAuthor, BlogController.createBlog);
router.get("/blogs", Middlewares.authenticateAuthor, BlogController.getBlogs);
router.put('/blogs/:blogId', Middlewares.authenticateAuthor, Middlewares.authoriseAuthor, BlogController.updateBlog);

// delete apis
router.delete('/blogs/:blogId', Middlewares.authenticateAuthor, Middlewares.authoriseAuthor, BlogController.deleteBlogById);
router.delete('/blogs', Middlewares.authenticateAuthor, Middlewares.authoriseAuthor, BlogController.deleteBlogByQueryParam);



module.exports = router;