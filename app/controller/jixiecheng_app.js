module.exports = {
    getSkuId : function (req, res) {
        var product = req.body;
        var skuid = "";
        if(product.ProductPrice == null){
            skuid = "error";
        }else{
            if(product.ProductPrice.PriceRanges == null){
                skuid = product.ProductPrice.SkuID;
            }else{
                skuid = product.ProductPrice.PriceRanges[0].SkuID;
            }
        }
        res.json({
            skuid:skuid
        });
    }
};