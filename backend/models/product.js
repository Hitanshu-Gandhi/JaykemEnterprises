const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image: {
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    subcategory:{
        type:[
            {
                image:'string',
                title:'string',
                form:'string',
                chemicalFormula:'string',
                molecularWeight:'string',
                grade:'string',
                packagingtype:'string',
                packagingsize:'string',
            }

        ]
    }
}, { timestamps: true }
)

module.exports = mongoose.model('products',productSchema)