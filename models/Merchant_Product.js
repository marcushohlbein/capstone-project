const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
  {
    styleId: {
      type: String,
      required: true,
    },
    salesPrice: {
      type: Number,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    sizes_eu: {
      type: Object,
    },
    productLink: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('Product', schema)
