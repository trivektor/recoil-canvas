import { RecoilRoot } from "recoil";
import "./App.css";

import { Pane } from "./components";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Pane />
      </div>
    </RecoilRoot>
  );
}

export default App;
