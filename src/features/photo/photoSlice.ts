import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Photo {
  ownerId: string;
  image: string;
  id: string;
}

interface PhotosState {
  photos: Photo[];
  currentPhoto: Photo;
}

const initialState: PhotosState = {
  photos: [],
  currentPhoto: {
    ownerId: '',
    image: '',
    id: ''
  }
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<any>) => {
      state.photos = action.payload;
    },
    setCurrentPhoto: (state, action: PayloadAction<any>) => {
      state.currentPhoto = action.payload;
    },
  },
});

export const { setPhotos, setCurrentPhoto } = photoSlice.actions;

export default photoSlice.reducer;
