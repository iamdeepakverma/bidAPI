//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ProductSchema = mongoose.Schema({
  _id: Number,
  ptitle: {
    type: String,
    required: [true,"Product title is required"],
    lowercase: true,
    trim: true,
  },
  catnm: {
    type: String,
    required: [true,"Category name is required"],
    lowercase: true,
    trim: true,
  },
  subcatnm: {
    type: String,
    required: [true,"SubCategory name is required"],
    lowercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true,"SubCategory name is required"],
    lowercase: true,
    trim: true,
  },
  baseprice: {
    type: Number,
    required: [true,"Base price is required"],
  },	
  piconnm: {
    type: String,
    required: [true,"Product icon is required"],
    trim: true
  },
  uid: {
    type: String,
    required: [true,"Username is required"],
  },
  info: {
    type: String,
    required: [true,"Time is required"],
  }
});

// Apply the uniqueValidator plugin to UserSchema.
ProductSchema.plugin(uniqueValidator);

// compile schema to model
const ProductSchemaModel = mongoose.model('Product_collection',ProductSchema);

export default ProductSchemaModel




