import { cloneDeep } from "lodash-es";
import { SketchPicker } from "react-color";
import { useRecoilState } from "recoil";

import { activeShapeIndexState, shapeListState } from "../atoms";

const Color = () => {
  const [activeShapeIndex] = useRecoilState(activeShapeIndexState);
  const [shapeList, setShapeList] = useRecoilState(shapeListState);
  const onChangeComplete = (color) => {
    const updatedShapeList = cloneDeep(shapeList);

    updatedShapeList[activeShapeIndex].backgroundColor = color.hex;

    setShapeList(updatedShapeList);
  };

  return (
    <section id="color">
      <SketchPicker
        color={shapeList[activeShapeIndex]?.backgroundColor ?? "#fff"}
        onChangeComplete={onChangeComplete}
      />
    </section>
  );
};

export default Color;
