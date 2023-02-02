import {
  doc,
  DocumentData,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { DeletePhoto } from "../../components/delete-photo/DeletePhoto";
import { setCurrentPhoto } from "../../features/photo/photoSlice";
import { db } from "../../firebaseConfig";

export const PhotoPage = () => {
  const { photoId } = useParams();
  const dispatch = useAppDispatch();
  const { currentPhoto } = useAppSelector((store) => store.photo);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "photos", photoId), (snapshot) => {
      dispatch(setCurrentPhoto({ ...snapshot.data(), id: snapshot.id }));
      setLoading(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <ul className="flex justify-around mt-[20px]">
        <li>
          <Link to="/">Back</Link>
        </li>
        <li>
          <DeletePhoto photoId={photoId} />
        </li>
      </ul>
      {!loading ? (
        <p className="text-center mt-[200px]">Loading...</p>
      ) : (
        <img
          className="sm:w-[500px] w-[300px] mx-auto my-[100px]"
          src={currentPhoto?.image}
          alt=""
        />
      )}
    </div>
  );
};
