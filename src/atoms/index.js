import { atom } from "recoil";

export const shapeListState = atom({
  key: "shapeListState",
  default: [],
});

export const activeShapeIndexState = atom({
  key: "activeShapeIndexState",
  default: -1,
});
