const orders = [
  {
    date: "2010-09-18",
    subtotal: 92.1,
    items: [
      {
        products: {
          id: "redhart",
          description: "Old Red hart",
          price: 34.25,
          reviews: [
            {
              rating: 5,
              comment: "Good to use!",
            },
          ],
        },
        quantity: 500,
      },
    ],
  },
]

const getAllOrders = ()=>{
  return orders
}

module.exports = { getAllOrders }