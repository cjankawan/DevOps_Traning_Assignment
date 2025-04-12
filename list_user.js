const mongoose = require("mongoose");

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  description: String
});
const User = mongoose.model("User", userSchema);

const { MONGO_USER } = require("./config/config");
const { MONGO_PASSWORD } = require("./config/config"); 
const { MONGO_PORT } = require("./config/config"); 
const { MONGO_IP } = require("./config/config"); 
// Connect to Docker MongoDB
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");

    const users = await User.find();
    console.log("All Users:", users);

    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Error:", err);
  });
