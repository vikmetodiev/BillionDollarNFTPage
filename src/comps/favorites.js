import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";
import { AuthContext } from "../Auth.js";

const Favorites = ({ setSelectedImg }) => {

  const { currentUser } = useContext(AuthContext);

  const [data, setDocs] = useState([]);
  useEffect(() => {
    const db = projectFirestore;
    return db.collection("favorites").onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setDocs(postData);
    });
  }, []);

  return (
    <div className="galery-grid">
      {data &&
        data.map(
          (doc) =>
            doc.url.length > 0 && currentUser?.uid === doc.user && (
              <motion.div
                className="img-wrap"
                key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(doc.url)}
              >
                <motion.img
                  src={doc.url}
                  alt="uploaded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </motion.div>
            )
        )}
    </div>
  );
};

export default Favorites;
