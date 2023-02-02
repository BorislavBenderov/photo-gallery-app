import { Nav } from "../../components/nav/Nav";
import { useEffect, useState } from "react";
import {
  collection,
  DocumentData,
  onSnapshot,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Photo } from "../../components/photo/Photo";
import { setPhotos } from "../../features/photo/photoSlice";
import { useAppDispatch, useAppSelector } from "../../app/store";

export const Photos = () => {
  const { user } = useAppSelector((store) => store.user);
  const { photos } = useAppSelector((store) => store.photo);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const q = query(
      collection(db, "photos"),
      where("ownerId", "==", user?.uid || "")
    );

    const unsibscribe = onSnapshot(
      q,
      (snapshot: QuerySnapshot<DocumentData>) => {
        dispatch(
          setPhotos(
            snapshot.docs.map((item) => {
              return { ...item.data(), id: item.id };
            })
          )
        );
        setLoading(true);
      }
    );

    return () => {
      unsibscribe();
    };
  }, [dispatch, user]);

  return (
    <div>
      <div className="my-[25px]">
        <Nav />
      </div>
      <div className="flex flex-wrap gap-4">
        {!loading
          ? "Loading..."
          : photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
      </div>
    </div>
  );
};
