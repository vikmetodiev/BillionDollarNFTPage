import React from "react";
import { motion } from "framer-motion";
import UploadForm from "./UploadForm";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
const Modal = ({ setSelectedImg, selectedImg, handleClicker, likes, user }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <div
        onClick={() => {
          handleClicker("Favorite");
        }}
        className="favorite-icon icon"
      >
        <span className="m-2">Add to Favorites</span>
        <FavoriteBorderIcon fontSize="large" className="mb-2"/>
      </div>
      <div
        onClick={() => {
          handleClicker("Like");
        }}
        className="like-icon icon"
      >
        <span className="m-2">Like:</span>
        <ThumbUpAltOutlinedIcon fontSize="large" className="mb-2"/>
      </div>

     { user ? <div
        onClick={() => {
          handleClicker("Replace");
        }}
        className="replace-icon icon"
      >
        <UploadForm
          type="Replace"
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      </div> :<div
        onClick={() => {
         alert("Addet to cart")
        }}
        className="delete-icon icon"
        style={{right:525}}
      >
        <span className="m-2">Buy</span>
        <AddShoppingCartOutlinedIcon fontSize="large" className="mb-2"/>
      </div> }
      {user && <div
        onClick={() => {
          handleClicker("Delete");
          setSelectedImg(null);
        }}
        className="delete-icon icon"
      >
        <span className="m-2">Delete</span>
        <DeleteOutlinedIcon fontSize="large" className="mb-2"/>
      </div>}
      <span className="likes">Likes: {likes}</span>
    </motion.div>
  );
};

export default Modal;
