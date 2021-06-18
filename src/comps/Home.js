import React, { useState, useContext, useEffect } from "react";
import Title from "./Title";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import useFirestore from "../hooks/useFirestore";
import { projectFirestore } from "../firebase/config";
import { AuthContext } from "../Auth.js";


function Home() {
  const { currentUser } = useContext(AuthContext);
  const [selectedImg, setSelectedImg] = useState(null);
  const [userUID, setUserUID] = useState(false);
  const { docs } = useFirestore("images");
  let findPic = docs.find((pic) => {
    return pic.url === selectedImg;
  });

  useEffect(() => {
    if(findPic?.user === currentUser?.uid){
      setUserUID(true);
    } else{
      setUserUID(false)
    }
  }, [selectedImg])
  const handleClick = (procedure) => {
    if (findPic) {
      switch (procedure) {
        case "Like":
          projectFirestore
            .collection("images")
            .doc(findPic.id)
            .update({ likes: findPic.likes + 1 });
          break;
        case "Delete":
          projectFirestore.collection("images").doc(findPic.id).delete();
          break;
        case "Favorite":
          projectFirestore
            .collection("favorites")
            .add({ url: findPic.url, user: currentUser.uid });
        default:
      }
    }
    // if (findPic) {
    //   projectFirestore.collection("images").doc(findPic.id).update({ likes: findPic.likes + 1 });
    // }
  };
  return (
    <div className="App">
      <Title />
      <UploadForm user={currentUser}/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          handleClicker={handleClick}
          likes={findPic.likes}
          user={userUID}
        />
      )}
    </div>
  );
}

export default Home;
