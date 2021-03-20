const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    styleId: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
    },
    retailPrice: {
      type: Number,
    },
    sale: {
      type: Boolean,
      default: false,
    },
    shops: [
      {
        shopName: {
          type: String,
        },
        salesPrice: {
          type: Number,
        },
        regularPrice: {
          type: Number,
        },
        sizes_eu: {
          type: Object,
        },
        productLink: {
          type: String,
        },
      },
    ],
    media: {
      imageUrl: {
        type: String,
        required: true,
      },
      thumbUrl: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('Product', schema)
