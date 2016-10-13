module.exports = {
    getMySelf:function (req, res) {
        console.log(req.body);
        res.json(req.body);
    }
};