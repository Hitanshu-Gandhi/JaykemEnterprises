const asyncHandler = require('express-async-handler')
const blog = require('../models/blog')
const { convert } = require('html-to-text');

const getBlogs = asyncHandler(async (req, res) => {
    const allBlogs = await blog.find();

    const blogs = allBlogs.map(blogItem => ({
        ...blogItem.toObject(),
        plainText: convert(blogItem.content)
    }));

    res.status(200).json({
        blogs
    });
});



const createBlogs = asyncHandler( async (req,res)=>{
    const {title, authorName , image , blogContent, coverImage} = req.body

    await blog.create({
        title:title,
        authorImage:image,
        content:blogContent,
        authorName:authorName,
        coverImage:coverImage
    })
    
    res.status(200).json({
        message:'Hitanshu ...'
    })
})



const updateBlogs = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message:'Hitanshu running on road'
    })
})



const deleteBlogs = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message:'Hitanshu running on road'
    })
})


const getBlogsByID = asyncHandler(async (req, res) => {
    const { id } = req.params; // Correctly extracting id from req.params
  
    try {
        const requiredBlog = await blog.findById(id);
      
        if (!requiredBlog) {
          return res.status(404).json({ message: 'Blog not found' });
        }
      
        // Convert content to plain text and add it to the blog object
        const plainText = convert(requiredBlog.content);
        const tempBlog = requiredBlog.toObject();
        tempBlog.plainText = plainText;
      
        res.status(200).json(tempBlog);
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
      
  });
  

module.exports = {
    getBlogs,
    createBlogs,
    updateBlogs,
    deleteBlogs,
    getBlogsByID
}