 const orderModel = require("./order.model")
 
 module.exports = { Query: {
        // orders: (parent, args, context, info)=>{
        orders: ()=>{
          console.log("Getting the orders...")
          return orderModel.getAllOrders();
        }
      }
 }
  

