const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    index: { expires: 0 }, // ⭐ TTL auto delete
  },
});
const blacklistedTokenModel = mongoose.model("BlacklistToken", blacklistSchema);
module.exports = blacklistedTokenModel;