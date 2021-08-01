import Position from "./position";
import Canvas from "./canvas";
import Color from "./color";

const Pane = () => {
  return (
    <main id="pane">
      <Position />
      <Canvas />
      <Color />
    </main>
  );
};

export default Pane;
