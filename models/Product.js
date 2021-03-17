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
    shops: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Merchant_Product',
    },
    media: [
      {
        imageUrl: {
          type: String,
          required: true,
        },
        thumbsUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('Product', schema)
