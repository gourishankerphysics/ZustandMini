import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js-gl3d-dist-min";
const Plot = createPlotlyComponent(Plotly);

const TwoDPlot = () => {
  const z_data = [];
  for (let i = 0; i < 24; i++) {
    z_data.push([0, 1, 2, 3, 4, 5]);
  }
  const data = [
    {
      z: z_data,
      type: "surface",
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
  return <Plot data={data} layout={layout}></Plot>;
};

export default TwoDPlot;
