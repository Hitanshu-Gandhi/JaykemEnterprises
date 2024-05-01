const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message:'Hitanshu ...'
    })
})


const createProduct = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message:'Hitanshu ...'
    })
})



const updateProduct = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message:'Hitanshu ...'
    })
})



const deleteProduct = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message:'Hitanshu running on road'
    })
})




module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}