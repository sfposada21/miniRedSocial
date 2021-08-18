const mongoose = require("mongoose");

const PosstSchema = new mongoose.Schema({
    userId : {type: mongoose.Schema.ObjectId, ref: "user" },
    name : String,
    text: String,
    hashtag: String,
    date : {type: Date, default: Date.now },
});

const postt = mongoose.model("postt", PosstSchema);
module.exports = postt;

