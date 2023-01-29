import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Photo {
  ownerId: string;
  image: string;
  id: string;
}

interface PhotosState {
  photos: Photo[];
}

const initialState: PhotosState = {
  photos: [],
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<any>) => {
      state.photos = action.payload;
    },
  },
});

export const { setPhotos } = photoSlice.actions;

export default photoSlice.reducer;
