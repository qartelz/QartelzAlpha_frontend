import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js"; // Make sure Plotly is installed
import "./Dash.css";
import GaugeChart from "react-gauge-chart";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Dashpage = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  // const [gaugeData, setGaugeData] = useState(0);
  // const [data4, setData4] = useState([]);
  // const [data5, setData5] = useState([]);
  // const [data6, setData6] = useState([]);
  // const [data7, setData7] = useState([]);

  useEffect(() => {
    // Fetch data1
    fetch("http://127.0.0.1:8000/api/get_Dash/")
      .then((response) => response.json())
      .then((data) => setData1(data))
      .catch((error) => {
        console.error("There was an error fetching data1!", error);
      });

    // Fetch data2
    fetch("http://127.0.0.1:8000/api/get_Home/")
      .then((response) => response.json())
      .then((data) => setData2(data))
      .catch((error) => {
        console.error("There was an error fetching data2!", error);
      });

    // Fetch data3
    fetch("http://127.0.0.1:8000/api/get_Asset/")
      .then((response) => response.json())
      .then((data) => setData3(data))
      .catch((error) => {
        console.error("There was an error fetching data2!", error);
      });
  }, []);

  // Prepare data for multiple traces for the Plotly chart
  const plotData1 = data1.map((data1, id) => ({
    x: [data1.cell_id],
    y: [data1.cell_value],
    type: "bar",
    mode: "lines+markers",
    name: `${data1.cell_id}`, // Use unique names for each trace
  }));

  const plotData2 = data2.map((data2, id) => ({
    x: [data2.cell_id],
    y: [data2.cell_value],
    type: "funnel",
    // mode: 'lines+markers',
    name: `${data2.cell_id}`, // Use unique names for each trace
  }));

  const plotData3 = data3.map((data3, id) => ({
    x: [data3.cell_id],
    y: [data3.cell_value],
    type: "area",
    fill: "tozeroy",
    // mode: 'lines+markers',
    name: `${data3.cell_id}`, // Use unique names for each trace
  }));

  const chartStyle = {
    height: 250,
  };

  return (
    <div className="">
      <Navbar />
      <div >
        <div className="bg-white rounded-[50px] flex flex-col items-center m-28 py-28  mb-28 ">
          <Plot
            className=" border-2 border-black  rounded-3xl p-10  "
            data={plotData1}
            layout={{
              title: {
                text: "Operating Statement",
                font: {
                  size: 20,
                  family: "Arial Black",
                  weight: "bold",
                  color: "black",
                },
              },
              xaxis: { title: "cell_id" },
              yaxis: { title: "cell_value" },
              height: 500,
              width: 800,
            }}
          />
          <br />

          <Plot
            className=" border-2 border-black  rounded-3xl p-10 mt-10"
            data={plotData2}
            layout={{
              title: {
                text: "Comparative Ratios",
                font: {
                  size: 20,
                  family: "Arial Black",
                  weight: "bold",
                  color: "black",
                },
              },
              height: 400,
              width: 800,
            }}
          />

          <GaugeChart
            id="gauge-chart1"
            style={chartStyle}
            className="mt-10 w-[45%]"
            animate={true}
            nrOfLevels={420}
            arcsLength={[0.5, 0.5, 0.5, 0.5]}
            colors={["red", "yellow", "#5BE12C", "darkgreen"]}
            percent={0.5}
            arcPadding={0.02}
            textColor="blue"
          />

          <Plot
            className=" border-2 border-black  rounded-3xl p-10 w-[85%]  mt-10"
            data={plotData3}
            layout={{
              title: {
                text: "Analysis of Balance Sheet",
                font: {
                  size: 20,
                  family: "Arial Black",
                  weight: "bold",
                  color: "black",
                },
              },
              height: 600,
              width: 1000,
            }}
          />
        </div>

        <div></div>
      </div>

      <Footer/>
    </div>
  );
};

export default Dashpage;
