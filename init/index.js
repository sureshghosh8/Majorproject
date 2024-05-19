const mongoose=require("mongoose");

const intdata=require("./data.js")
const Listing=require("../models/listing.js");

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
})
.catch((err)=>console.log(err)

)

async function main() {
    await mongoose.connect(MONGO_URL);
  }
  const intiDB=async()=>{
Listing.deleteMany({});
  }