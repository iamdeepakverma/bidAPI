//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SubCategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"Category is required"],
    upercase: true,
    trim: true,
  },
  subcatnm: {
    type: String,
    required: [true,"Sub Category is required"],
    upercase: true,
    unique:true,
    trim: true,
  },
  subcaticonnm: {
    type: String,
    required: [true,"SubCategory icon is required"],
    trim: true
  },
});

// Apply the uniqueValidator plugin to UserSchema.
SubCategorySchema.plugin(uniqueValidator);

// compile schema to model
const SubCategorySchemaModel = mongoose.model('Sub_category_collection',SubCategorySchema);

export default SubCategorySchemaModel;