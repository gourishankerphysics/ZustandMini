import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js";
const Plot = createPlotlyComponent(Plotly);

const TwoDPlot = () => {
  const z_data = [];
  for (let i = 0; i < 24; i++) {
    const b = [];
    for (let j = 0; j < 50; j++) {
      b.push(Math.sin(0.05 * j));
    }
    z_data.push(b);
  }
  const data = [
    {
      z: z_data,
      type: "heatmap",
    },
  ];
  const layout = {
    title: "Mt Bruno Elevation",
    autosize: false,
    width: 500,
    height: 500,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    },
  };
  return (
    <Plot data={data} layout={layout} config={{ displaylogo: false }}></Plot>
  );
};

export default TwoDPlot;
