import { Canvas } from "@react-three/fiber";
import "./App.css";
import PropertiesPanel from "./Components/PropertiesPanel";

import ViewportCanvas from "./Components/ViewportCanvas";
import TwoDPlot from "./Plotly/TwoDPlot";

function App() {
  return (
    <div className="App">
      {/* <PropertiesPanel></PropertiesPanel>
      <div style={{ color: "red", marginTop: 100, height: 500 }}>
        <Canvas
          style={{ backgroundColor: "#666666" }}
          pixelRatio={window.devicePixelRatio}
          camera={{ position: [0, 10, 0] }}
        >
          <ViewportCanvas style={{ height: 300 }}></ViewportCanvas>
        </Canvas>
      </div> */}
      <PropertiesPanel></PropertiesPanel>
    </div>
  );
}

export default App;
