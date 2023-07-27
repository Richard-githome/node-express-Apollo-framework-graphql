const productModel = require("./product.model");

module.exports = {
  Query: {
    products: () => {
      console.log("Getting the product...");
      return productModel.getAllproducts();
    },
    productsByPrice: (_, args) => {
      return productModel.getProductsByPrice(args.min, args.max);
    },
    productByID: (_, args) => {
      return productModel.getProductByID(args.id);
    },
  },
  Mutation: {
    newProduct: (_, args) => {
      return productModel.addNewProduct(args.id, args.description, args.price);
    },
    newProductReview: (_, args)=>{
      return productModel.addNewProductReview(args.id, args.comment, args.rating)
    }
  },
};
