import { useState, useEffect, useContext } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { AuthContext } from "../Auth.js";

const useStorage = (file) => {
  const { currentUser } = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt, user: currentUser.uid, likes: 0, isBought: false });
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;