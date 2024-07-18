import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, //every one has to have a different user name
    },
    email: {
      type: String,
      required: true,
      unique: true, //every one has to have a different user name
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://tse2.mm.bing.net/th?id=OIP.eCrcK2BiqwBGE1naWwK3UwHaHa&pid=Api&P=0&h=180"
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
