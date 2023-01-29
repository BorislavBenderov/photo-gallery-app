import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";

export const DeletePhoto = ({ photoId }: any) => {
  const navigate = useNavigate();

  const onDeletePhoto = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmation) {
      deleteDoc(doc(db, "photos", photoId))
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  
  return <button onClick={onDeletePhoto}>Delete</button>;
};
