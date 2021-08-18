const Postt = require("../models/postt");

const savePOSTT = async (req, res) => {
    if(!req.body.name || !req.body.text) return res.status(400).send("Incomplete data")

    const postt = new Postt({
        userId : req.user._id,
        name : req.body.name,
        text: req.body.text,
        hashtag: req.body.hashtag,  
    })

    const result = await postt.save();
    if (!result) 
    return res.status(400).send("Failed to register task")
    return res.status(200).send({ result })

};

const listPostt = async (req, res) => {
    const postt = await Postt.find();
    if (!postt || postt.length === 0) return res.status(400).send("No postt");
    return res.status(200).send({ postt });
  };


module.exports = { savePOSTT, listPostt};
