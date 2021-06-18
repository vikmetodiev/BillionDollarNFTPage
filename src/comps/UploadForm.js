import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import LoopIcon from "@material-ui/icons/Loop";

const UploadForm = ({ type, selectedImg, setSelectedImg, user }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { docs } = useFirestore("images");

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    const storageRef = projectStorage.ref(selected.name);
    let findPic = docs.find((pic) => {
      return pic.url === selectedImg;
    });
    if (type && findPic) {
      storageRef.put(selected).on(
        "state_changed",
        (snap) => {
          console.log(snap);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          projectFirestore
            .collection("images")
            .doc(findPic.id)
            .update({ url: url, createdAt: createdAt });
          setSelectedImg(null);
        }
      );
    } else {
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError("");
      } else {
        setFile(null);
        setError("Please select an image file (png or jpg)");
      }
    }
  };

  return (
    <form>
      {type === "Replace" ? (
        <div className="replace">
          <label>
            <input type="file" onChange={handleChange} />
            <span className="m-2">Replace Img</span>
            <LoopIcon fontSize="large" className="mb-2" />
          </label>
        </div>
      ) : (
        <label className="label">
          <input type="file" onChange={handleChange} />
          Add Image
        </label>
      )}
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
