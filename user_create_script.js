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

    const newUser = await User.create({
      name: "Test User",
      description: "Created from terminal script"
    });

    console.log("User created:", newUser);
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });

