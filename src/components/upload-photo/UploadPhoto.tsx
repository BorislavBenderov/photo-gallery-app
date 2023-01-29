import React from "react";
import { auth, db, storage } from "../../firebaseConfig";
import "tailwindcss/tailwind.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";

export const UploadPhoto = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      handleUpload(selectedFile);
    }
  };

  const handleUpload = async (file: File) => {
    const storageRef = ref(storage, `/photos/${uuidv4()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        alert(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const data = {
            image: downloadURL,
            ownerId: auth.currentUser?.uid,
          };
          addDoc(collection(db, "photos"), data);
        });
      }
    );
  };

  return (
    <button>
      <input
        name="uploadPhoto"
        id="uploadPhoto"
        className="p-2 rounded hidden"
        type="file"
        onChange={handleFileChange}
      />
      <label
        htmlFor="uploadPhoto"
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
      >
        Upload
      </label>
    </button>
  );
};
