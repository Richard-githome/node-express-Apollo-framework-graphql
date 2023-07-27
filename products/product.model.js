const products = [
  {
    id: "redhart",
    description: "Red Hart",
    price: 26.14,
    reviews: []
  },
  {
    id: "bluehart",
    description: "Blue Hart",
    price: 55.14,
    reviews: []
  },
];

const getAllproducts = () => {
  return products;
};

const getProductsByPrice = (min, max)=>{
  return products.filter((product)=>{
    return product.price >= min && product.price <= max
  })
}

const getProductByID = (id)=>{
  return products.find((product)=>{
    return product.id === id
  })
}

const addNewProduct = (id, description, price)=>{
  const newProduct = {
    id,
    description,
    price,
    reviews: []
  }

  products.push(newProduct)
  return newProduct
}

const addNewProductReview = (id, comment, rating)=> {
  const matchedProduct = getProductByID(id)

  if(matchedProduct){
    const newProductReview = {
      rating,
      comment
    }

    matchedProduct.reviews.push(newProductReview)
    return newProductReview
  }

}


module.exports = { getAllproducts, getProductsByPrice, getProductByID, addNewProduct, addNewProductReview };
