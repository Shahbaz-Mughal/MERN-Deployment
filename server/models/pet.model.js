const mongoose = require("mongoose")


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "a pet's name is required"],
        minLength: [3,"a pet's name needs to be at least 3 character"],
        unique: true
    },
    type: {
        type: String,
        required: [true, "a pet type is required"],
        minlength: [3, "a pet type needs to be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "must have a pet description"],
        minlength: [3, "a pet description needs to be at least 3 characters"]
    },
    skills1: String,
    skills2: String,
    skills3: String
}, {timestamps: true}) 


const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet

// skills: {
//     type: [String],
//     maxlength: 3
//     // minlength: 0
// }


// const ProductSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: [true, 'must have a product name'],
//         minLength: [3, 'product name needs to have at least 3 characters']
//     },
//     price: {
//         type: Number,
//         required: [true, 'must provide a product price'],
//         validate: {
//             validator: (input) => {
//                 return input > 0 && input < 999999
//             },
//             message: (input) => {
//                 return `$${input.value} is out of range; product price needs to be greater than $0 and less than $999,999`
//             }
//         }
//     },
//     description: {
//         type: String,
//         required: [true, 'must have a product description'],
//         minLength: [5, 'product description needs to have at least 5 characters']
//     }
// }, {timestamps: true})




// const mongoose = require("mongoose");

// const IceCreamSchema = new mongoose.Schema({
//     name: String,
//     flavor: String,
//     numScoops: Number,
//     whipped: Boolean,
//     sauce: String,
//     toppings: [String]
// })

// const IceCream = mongoose.model("IceCream", IceCreamSchema);

// module.exports = IceCream;