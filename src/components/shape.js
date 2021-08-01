import { cloneDeep } from "lodash-es";
import Draggable from "react-draggable";
import { useRecoilState } from "recoil";

import { shapeListState, activeShapeIndexState } from "../atoms";

const Shape = ({ index, width, height, backgroundColor, left, top }) => {
  const [shapeList, setShapeList] = useRecoilState(shapeListState);
  const [, setActiveShapeIndex] = useRecoilState(activeShapeIndexState);

  const onStop = (event, data) => {
    setActiveShapeIndex(index);
    const updatedShapeList = cloneDeep(shapeList);
    updatedShapeList[index].x = data.x;
    updatedShapeList[index].y = data.y;
    setShapeList(updatedShapeList);
  };
  const onClick = () => {
    setActiveShapeIndex(index);
  };

  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }} position={null} onStop={onStop}>
      <div
        onClick={onClick}
        style={{
          width,
          height,
          backgroundColor,
          position: "absolute",
          left,
          top,
        }}
      />
    </Draggable>
  );
};

export default Shape;
