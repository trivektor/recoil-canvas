import { useRecoilState } from "recoil";

import { shapeListState, activeShapeIndexState } from "../atoms";

const Position = () => {
  const [shapeList, setShapeList] = useRecoilState(shapeListState);
  const [activeShapeIndex, setActiveShapeIndex] = useRecoilState(
    activeShapeIndexState
  );
  const { x, y } = shapeList[activeShapeIndex] || {};

  const onAdd = () => {
    const index = shapeList.length;

    setShapeList([
      ...shapeList,
      {
        id: getId(),
        index,
        width: 40,
        height: 40,
        backgroundColor: "#000",
        left: 20,
        top: 20,
        x: 0,
        y: 0,
        zIndex: getZindex(),
      },
    ]);
    setActiveShapeIndex(index);
  };

  return (
    <section id="position">
      <button onClick={onAdd}>add shape</button>
      {activeShapeIndex !== -1 && (
        <div style={{ marginTop: 20 }}>
          <label>X</label> <input value={x} style={{ width: 40 }} disabled />{" "}
          <label>Y</label> <input value={y} style={{ width: 40 }} disabled />
        </div>
      )}
    </section>
  );
};

export default Position;

let id = 0;
function getId() {
  return id++;
}

let zIndex = 10;

function getZindex() {
  return zIndex++;
}
