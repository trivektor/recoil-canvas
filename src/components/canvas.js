import { useRecoilValue } from "recoil";

import Shape from "./shape";
import { shapeListState } from "../atoms";

const Canvas = () => {
  const shapeList = useRecoilValue(shapeListState);

  return (
    <section id="canvas">
      <div style={{ position: "relative" }}>
        {shapeList.map((shape) => (
          <Shape key={shape.id} {...shape} />
        ))}
      </div>
    </section>
  );
};

export default Canvas;
