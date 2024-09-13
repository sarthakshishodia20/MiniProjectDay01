
// mongoose require kia because database bnana hai 
// Schema require kia bta di atha schema kya hota hai
// baaki toh bs structure hai check kr skte ho



const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const foodListingSchema=new Schema({
  name:{
    type:String,
    required:true,
  }  ,
  price:Number,
  ingredients:String,
  images:String,
  location:String,
  DeliveryCharge:Number,
})


const FoodListing=mongoose.model("FoodListing",foodListingSchema);
module.exports=FoodListing; // export means iss file ka sara access kisi dusri file mein ho paega