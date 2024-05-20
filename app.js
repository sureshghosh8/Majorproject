const express= require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js")

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
})
.catch((err)=>console.log(err)

)

async function main() {
    await mongoose.connect(MONGO_URL);
  }
app.get("/",(req,res)=>{
    res.send("hi,i am root");
})
app.get("/testListing",async(req,res)=>{
    let sampleListing=new Listing({
      title:"my new villa",
      description:"by the beach",
      price:1200,
      location:"goa",
      country:"india",
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
  
  });
  
  
  app.listen(1010,()=>{
    console.log("sever is started 1010");
});
