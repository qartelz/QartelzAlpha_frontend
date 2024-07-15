import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import "./Datavisual.css";
import Navbar from "../components/navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from "../components/footer/Footer";

const Datavisual = () => {
  const [data1, setData1] = useState([]);
  const [title, setTitle] = useState("");
  const [data2, setData2] = useState([]);
  const [title1, setTitle1] = useState("");
  const [data3, setData3] = useState([]);
  const [title2, setTitle2] = useState("");
  const [data4, setData4] = useState([]);
  const [title3, setTitle3] = useState("");
  const [data5, setData5] = useState([]);
  const [title4, setTitle4] = useState("");
  const [data6, setData6] = useState([]);
  const [title5, setTitle5] = useState("");
  const [data7, setData7] = useState([]);
  const [title6, setTitle6] = useState("");

  useEffect(() => {
    // Fetch data1
    fetch("http://127.0.0.1:8000/api/get_Datavisual/")
      .then((response) => response.json())
      .then((data) => {
        // Modify the cell_id names here
        const modifiedData = data.map((item) => ({
          ...item,
          cell_id: mapCellIdToYear(item.cell_id), // Call function to map cell_id to year
        }));
        setData1(modifiedData);
        if (modifiedData.length > 0) {
          setTitle(modifiedData[3].cell_value); // Set title to the first value
        }
      })
      .catch((error) => {
        console.error("There was an error fetching data1!", error);
      });

    // Fetch data2
    fetch("http://127.0.0.1:8000/api/get_Datavisual1/")
      .then((response) => response.json())
      .then((data) => {
        // Modify the cell_id names here
        const modifiedData = data.map((item) => ({
          ...item,
          cell_id: mapCellIdToYear(item.cell_id), // Call function to map cell_id to year
        }));
        setData2(modifiedData);
        if (modifiedData.length > 0) {
          setTitle1(modifiedData[3].cell_value); // Set title to the first value
        }
      })
      .catch((error) => {
        console.error("There was an error fetching data1!", error);
      });

    // Fetch data3
    fetch("http://127.0.0.1:8000/api/get_Datavisual2/")
      .then((response) => response.json())
      .then((data) => {
        // Modify the cell_id names here
        const modifiedData = data.map((item) => ({
          ...item,
          cell_id: mapCellIdToYear(item.cell_id), // Call function to map cell_id to year
        }));
        setData3(modifiedData);
        if (modifiedData.length > 0) {
          setTitle2(modifiedData[3].cell_value); // Set title to the first value
        }
      })
      .catch((error) => {
        console.error("There was an error fetching data1!", error);
      });
    // Fetch data3
    fetch("http://127.0.0.1:8000/api/get_Datavisual3/")
      .then((response) => response.json())
      .then((data) => {
        // Modify the cell_id names here
        const modifiedData = data.map((item) => ({
          ...item,
          cell_id: mapCellIdToYear(item.cell_id), // Call function to map cell_id to year
        }));
        setData4(modifiedData);
        if (modifiedData.length > 0) {
          setTitle3(modifiedData[3].cell_value); // Set title to the first value
        }
      })
      .catch((error) => {
        console.error("There was an error fetching data1!", error);
      });

    // Fetch data4
    fetch("http://127.0.0.1:8000/api/get_Datavisual4/")
      .then((response) => response.json())
      .then((data) => {
        // Modify the cell_id names here
        const modifiedData = data.map((item) => ({
          ...item,
          cell_id: mapCellIdToYear(item.cell_id), // Call function to map cell_id to year
        }));
        setData5(modifiedData);
        if (modifiedData.length > 0) {
          setTitle4(modifiedData[3].cell_value); // Set title to the first value
        }
      })
      .catch((error) => {
        console.error("There was an error fetching data1!", error);
      });

    // Fetch data5
    fetch("http://127.0.0.1:8000/api/get_Datavisual5/")
      .then((response) => response.json())
      .then((data) => {
        // Modify the cell_id names here
        const modifiedData = data.map((item) => ({
          ...item,
          cell_id: mapCellIdToYear(item.cell_id), // Call function to map cell_id to year
        }));
        setData6(modifiedData);
        if (modifiedData.length > 0) {
          setTitle5(modifiedData[3].cell_value); // Set title to the first value
        }
      })
      .catch((error) => {
        console.error("There was an error fetching data1!", error);
      });

    // Fetch data6
    fetch("http://127.0.0.1:8000/api/get_Datavisual6/")
      .then((response) => response.json())
      .then((data) => {
        // Modify the cell_id names here
        const modifiedData = data.map((item) => ({
          ...item,
          cell_id: mapCellIdToYear(item.cell_id), // Call function to map cell_id to year
        }));
        setData7(modifiedData);
        if (modifiedData.length > 0) {
          setTitle6(modifiedData[3].cell_value); // Set title to the first value
        }
      })
      .catch((error) => {
        console.error("There was an error fetching data1!", error);
      });
  }, []);

  const reversedData = data1.slice().reverse();
  const reversedData1 = data2.slice().reverse();
  const reversedData2 = data3.slice().reverse();
  const reversedData3 = data4.slice().reverse();
  const reversedData4 = data5.slice().reverse();
  const reversedData5 = data6.slice().reverse();
  const reversedData6 = data7.slice().reverse();

  // Function to map cell_id to year
  const mapCellIdToYear = (cellId) => {
    switch (cellId) {
      case "C1_10":
        return "FY20";
      case "D1_10":
        return "FY21";
      case "E1_10":
        return "FY22";
      case "F1_10":
        return "FY23";
      case "C1_35":
        return "FY20";
      case "D1_35":
        return "FY21";
      case "E1_35":
        return "FY22";
      case "F1_35":
        return "FY23";
      case "C1_37":
        return "FY20";
      case "D1_37":
        return "FY21";
      case "E1_37":
        return "FY22";
      case "F1_37":
        return "FY23";
      case "C1_38":
        return "FY20";
      case "D1_38":
        return "FY21";
      case "E1_38":
        return "FY22";
      case "F1_38":
        return "FY23";
      case "C1_42":
        return "FY20";
      case "D1_42":
        return "FY21";
      case "E1_42":
        return "FY22";
      case "F1_42":
        return "FY23";
      case "C4_37":
        return "FY20";
      case "D4_37":
        return "FY21";
      case "E4_37":
        return "FY22";
      case "F4_37":
        return "FY23";
      case "C7_10":
        return "FY20";
      case "D7_10":
        return "FY21";
      case "E7_10":
        return "FY22";
      case "F7_10":
        return "FY23";

      default:
        return cellId; // Return unchanged if no match
    }
  };

  // const fiscalYearLabels = {
  //     '2021': 'FY20',
  //     '2022': 'FY21',
  //     '2023': 'FY22',
  //     '2024': 'FY23'
  // };

  // Prepare data for Plotly chart
  //
  const plotData1 = reversedData.map((data, id) => {
    const lastNegativeIndex = reversedData
      .map((d) => d.cell_value)
      .lastIndexOf(reversedData.find((d) => d.cell_value < 0)?.cell_value);
    const isFirstBar = id === 0;
    const isNegative = data.cell_value < 0;
    const isLastNegative = id === lastNegativeIndex;
    // const yearLabel = fiscalYearLabels[data.cell_id];

    return {
      x: [data.cell_value],
      y: [data.cell_id],
      type: "bar",
      orientation: "h",
      mode: "lines+markers",
      name: `${data.cell_id}`, // Use unique names for each trace
      text: [data.cell_value],

      textposition: "inside", // Positioning the text inside the bars
      textfont: {
        color: "black", // Change the text color
        // Show only text on hover
        weight: "bold",
      },

      marker: {
        color: isLastNegative
          ? "red"
          : isNegative
          ? "#EC7063 "
          : isFirstBar
          ? "#bdbbb0"
          : "#14F9A6",

        line: {
          color: isLastNegative
            ? "red"
            : isNegative
            ? "#EC7063"
            : isFirstBar
            ? "#bdbbb0"
            : "#14F9A6",
          width: 2,
        },
      },
    };
  });

  //Profit Before Tax
  const plotData2 = reversedData1.map((data, id) => {
    const lastNegativeIndex = reversedData1
      .map((d) => d.cell_value)
      .lastIndexOf(reversedData1.find((d) => d.cell_value < 0)?.cell_value);
    const isFirstBar = id === 0;
    const isNegative = data.cell_value < 0;
    const isLastNegative = id === lastNegativeIndex;
    // const yearLabel = fiscalYearLabels[data.cell_id];

    return {
      x: [data.cell_value],
      y: [data.cell_id],
      type: "bar",
      orientation: "h",
      mode: "lines+markers",
      name: `${data.cell_id}`, // Use unique names for each trace
      // text: [data.cell_value], // Display cell_value on hover
      text: [data.cell_value], // Adding fiscal year labels

      textposition: "inside", // Positioning the text inside the bars
      textfont: {
        color: "white", // Change the text color
        width: 10,
      },
      hoverinfo: "text", // Show only text on hover
      marker: {
        color: isLastNegative
          ? "red"
          : isNegative
          ? "#EC7063 "
          : isFirstBar
          ? "#282828"
          : "#BEBEBE",
        line: {
          color: isLastNegative
            ? "red"
            : isNegative
            ? "#EC7063"
            : isFirstBar
            ? "#282828"
            : "#BEBEBE",
          width: 2,
        },
      },
    };
  });

  //profit after tax
  const plotData3 = reversedData2.map((data, id) => {
    const lastNegativeIndex = reversedData2
      .map((d) => d.cell_value)
      .lastIndexOf(reversedData2.find((d) => d.cell_value < 0)?.cell_value);
    const isFirstBar = id === 0;
    const isNegative = data.cell_value < 0;
    const isLastNegative = id === lastNegativeIndex;
    // const yearLabel = fiscalYearLabels[data.cell_id];

    return {
      x: [data.cell_value],
      y: [data.cell_id],
      type: "bar",
      orientation: "h",
      mode: "lines+markers",
      name: `${data.cell_id}`, // Use unique names for each trace
      // text: [data.cell_value], // Display cell_value on hover
      text: [data.cell_value], // Adding fiscal year labels

      textposition: "inside", // Positioning the text inside the bars
      textfont: {
        color: "white", // Change the text color
        width: 10,
      },
      hoverinfo: "text", // Show only text on hover
      marker: {
        color: isLastNegative
          ? "red"
          : isNegative
          ? "#EC7063 "
          : isFirstBar
          ? "#282828"
          : "#BEBEBE",
        line: {
          color: isLastNegative
            ? "red"
            : isNegative
            ? "#EC7063"
            : isFirstBar
            ? "#282828"
            : "#BEBEBE",
          width: 2,
        },
      },
      size: 15,
    };
  });

  //EBITDA
  const plotData4 = reversedData3.map((data, id) => {
    const lastNegativeIndex = reversedData3
      .map((d) => d.cell_value)
      .lastIndexOf(reversedData3.find((d) => d.cell_value < 0)?.cell_value);
    const isFirstBar = id === 0;
    const isNegative = data.cell_value < 0;
    const isLastNegative = id === lastNegativeIndex;
    // const yearLabel = fiscalYearLabels[data.cell_id];

    return {
      x: [data.cell_value],
      y: [data.cell_id],
      type: "bar",
      orientation: "h",
      mode: "lines+markers",
      name: `${data.cell_id}`, // Use unique names for each trace
      // text: [data.cell_value], // Display cell_value on hover
      text: [data.cell_value], // Adding fiscal year labels

      textposition: "inside", // Positioning the text inside the bars
      textfont: {
        color: "black", // Change the text color

        weight: "bold",
      },
      hoverinfo: "text", // Show only text on hover
      marker: {
        color: isLastNegative
          ? "red"
          : isNegative
          ? "#EC7063 "
          : isFirstBar
          ? "#bdbbb0"
          : "#14F9A6",
        line: {
          color: isLastNegative
            ? "red"
            : isNegative
            ? "#EC7063"
            : isFirstBar
            ? "#bdbbb0"
            : "#14F9A6",
          width: 2,
        },
      },
    };
  });

  //Cash Profit

  const plotData5 = reversedData4.map((data, id) => {
    const lastNegativeIndex = reversedData4
      .map((d) => d.cell_value)
      .lastIndexOf(reversedData4.find((d) => d.cell_value < 0)?.cell_value);
    const isFirstBar = id === 0;
    const isNegative = data.cell_value < 0;
    const isLastNegative = id === lastNegativeIndex;
    // const yearLabel = fiscalYearLabels[data.cell_id];

    return {
      x: [data.cell_value],
      y: [data.cell_id],
      type: "bar",
      orientation: "h",
      mode: "lines+markers",
      name: `${data.cell_id}`, // Use unique names for each trace
      // text: [data.cell_value], // Display cell_value on hover
      text: [data.cell_value], // Adding fiscal year labels

      textposition: "inside", // Positioning the text inside the bars
      textfont: {
        color: "black", // Change the text color
        weight: "bold",
      },
      hoverinfo: "text", // Show only text on hover
      marker: {
        color: isLastNegative
          ? "red"
          : isNegative
          ? "#EC7063 "
          : isFirstBar
          ? "#bdbbb0"
          : "#14F9A6",

        line: {
          color: isLastNegative
            ? "red"
            : isNegative
            ? "#EC7063"
            : isFirstBar
            ? "#bdbbb0"
            : "#14F9A6",
          width: 2,
        },
      },
    };
  });

  //EBTA
  const plotData6 = reversedData5.map((data, id) => {
    const lastNegativeIndex = reversedData5
      .map((d) => d.cell_value)
      .lastIndexOf(reversedData5.find((d) => d.cell_value < 0)?.cell_value);
    const isFirstBar = id === 0;
    const isNegative = data.cell_value < 0;
    const isLastNegative = id === lastNegativeIndex;
    // const yearLabel = fiscalYearLabels[data.cell_id];

    return {
      x: [data.cell_value],
      y: [data.cell_id],
      type: "bar",
      orientation: "h",
      mode: "lines+markers",
      name: `${data.cell_id}`, // Use unique names for each trace
      // text: [data.cell_value], // Display cell_value on hover
      text: [data.cell_value], // Adding fiscal year labels

      textposition: "inside", // Positioning the text inside the bars
      textfont: {
        color: "white", // Change the text color
        width: 10,
      },
      hoverinfo: "text", // Show only text on hover
      marker: {
        color: isLastNegative
          ? "red"
          : isNegative
          ? "#EC7063 "
          : isFirstBar
          ? "#282828"
          : "#BEBEBE",
        line: {
          color: isLastNegative
            ? "red"
            : isNegative
            ? "#EC7063"
            : isFirstBar
            ? "#282828"
            : "#BEBEBE",
          width: 2,
        },
      },
    };
  });

  //Net Working Captital
  const plotData7 = reversedData6.map((data, id) => {
    const lastNegativeIndex = reversedData6
      .map((d) => d.cell_value)
      .lastIndexOf(reversedData6.find((d) => d.cell_value < 0)?.cell_value);
    const isFirstBar = id === 0;
    const isNegative = data.cell_value < 0;
    const isLastNegative = id === lastNegativeIndex;
    // const yearLabel = fiscalYearLabels[data.cell_id];

    return {
      x: [data.cell_value],
      y: [data.cell_id],
      type: "bar",
      orientation: "h",
      mode: "lines+markers",
      name: `${data.cell_id}`, // Use unique names for each trace
      // text: [data.cell_value], // Display cell_value on hover
      text: [data.cell_value], // Adding fiscal year labels

      textposition: "inside", // Positioning the text inside the bars
      textfont: {
        color: "white", // Change the text color
        width: 10,
      },
      hoverinfo: "text", // Show only text on hover
      marker: {
        color: isLastNegative
          ? "red"
          : isNegative
          ? "#EC7063 "
          : isFirstBar
          ? "#282828"
          : "#BEBEBE",
        line: {
          color: isLastNegative
            ? "red"
            : isNegative
            ? "#EC7063"
            : isFirstBar
            ? "#282828"
            : "#BEBEBE",
          width: 2,
        },
      },
    };
  });

  return (

    <div>
      <Navbar className="pb-10"/>
    
    <div className="pt-10 pb-28 mx-28 ">
    <div className="main  bg-white rounded-[50px]">
    <div className="pt-28  mx-10 px-20 text-black p-8">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold font-roboto-condensed mb-4 text-black">
          DashWeave by Beez: <br /> Weaving Data into Insight
        </h1>
        <h2 className="text-2xl mb-4 font-light text-gray-400">
          Visualizing Financial Forensics for Clearer Decision-Making
        </h2>
        <hr className="w-full border-gray-600 border-t-2 mb-8" />
      
  
      <div className="custom1">
        <div className="" >
          <div className="card rounded-3xl border-2 bg-[#1f2421] border-black pl-2 pb-2 float-left">
            <div className="card-body">
              <h4 className="card-title font-serif text-white rounded-3xl font-bold text-xl">
                Revenue from Operation
              </h4>
              <h1 className="text-white float-left">{title} </h1>
            </div>
            <div>
              <Plot
                className="plotly-graph1"
                data={plotData1}
                layout={{
                  yaxis: {
                    type: "category",
                    zeroline: false,
                    tickfont: { color: "#eff1f3", weight: "bold" },
                    tickcolor: "#eff1f3",
                  },
                  xaxis: {
                    tickfont: { color: "#eff1f3" },
                    tickcolor: "#eff1f3",
                  },
                  bargap: 0.3,
                  barcornerradius: 30,
                  height: 300,
                  width: 400,
                  paper_bgcolor: "#1f2421",
                  plot_bgcolor: "#1f2421",
                }}
              />
            </div>
          </div>
        </div>
  
        <div className="card rounded-3xl border-2 border-black pl-2 pb-2 float-left">
          <div className="card-body">
            <h4 className="card-title font-serif text-black font-bold text-xl">
              Profit Before Tax
            </h4>
            <h1 className="card-text float-left">{title1} </h1>
          </div>
          <div className="card-data">
            <Plot
              className="plotly-graph1 card-text"
              data={plotData2}
              layout={{
                yaxis: {
                  type: "category",
                  zeroline: false,
                },
                bargap: 0.3,
                barcornerradius: 30,
                height: 300,
                width: 400,
              }}
            />
          </div>
        </div>
  
        <div className="card rounded-3xl border-2 border-black pl-2 pb-2 float-left">
          <div className="card-body">
            <h4 className="card-title font-serif text-black font-bold text-xl">
              Profit After Tax
            </h4>
            <h1 className="card-text float-left">{title2} </h1>
          </div>
          <div className="card-data">
            <Plot
              className="plotly-graph1 card-text"
              data={plotData3}
              layout={{
                yaxis: {
                  type: "category",
                  zeroline: false,
                },
                bargap: 0.3,
                barcornerradius: 30,
                height: 300,
                width: 400,
              }}
            />
          </div>
        </div>
  
        <div className="card rounded-3xl border-2 border-black bg-[#1f2421] pl-2 pb-2 float-left">
          <div className="card-body">
            <h4 className="card-title font-serif text-white font-bold text-xl">
              EBITDA
            </h4>
            <h1 className="card-text float-left">{title3} </h1>
          </div>
          <div className="card-data">
            <Plot
              className="plotly-graph1 card-text"
              data={plotData4}
              layout={{
                yaxis: {
                  type: "category",
                  zeroline: false,
                  tickfont: { color: "#eff1f3", weight: "bold" },
                  tickcolor: "#eff1f3",
                },
                xaxis: {
                  tickfont: { color: "#eff1f3" },
                  tickcolor: "#eff1f3",
                },
                bargap: 0.3,
                barcornerradius: 30,
                height: 300,
                width: 400,
                paper_bgcolor: "#1f2421",
                plot_bgcolor: "#1f2421",
              }}
            />
          </div>
        </div>
  
        <div className="card rounded-3xl border-2 bg-black pl-2 pb-2 float-left">
          <div className="card-body">
            <h4 className="card-title font-serif text-white font-bold text-xl">
              Cash Profit
            </h4>
            <h1 className="card-text bg-black float-left">{title4} </h1>
          </div>
          <div className="card-data">
            <Plot
              className="plotly-graph1 card-text"
              data={plotData5}
              layout={{
                yaxis: {
                  type: "category",
                  zeroline: false,
                  tickfont: { color: "#eff1f3", weight: "bold" },
                  tickcolor: "#eff1f3",
                },
                xaxis: {
                  tickfont: { color: "#eff1f3" },
                  tickcolor: "#eff1f3",
                },
                bargap: 0.3,
                barcornerradius: 30,
                height: 300,
                width: 400,
                paper_bgcolor: "black",
                plot_bgcolor: "black",
              }}
            />
          </div>
        </div>
  
        <div className="card rounded-3xl border-2 border-black pl-2 pb-2 float-left">
          <div className="card-body">
            <h4 className="card-title font-serif text-black font-bold text-xl">
              EBTA
            </h4>
            <h1 className="card-text float-left">{title5} </h1>
          </div>
          <div className="card-data text-black">
            <Plot
              className="plotly-graph1 card-text"
              data={plotData6}
              layout={{
                yaxis: {
                  type: "category",
                  zeroline: false,
                },
                bargap: 0.3,
                barcornerradius: 30,
                height: 300,
                width: 400,
              }}
            />
          </div>
        </div>
  
        <div className="card mb-44 rounded-3xl border-2 border-black pl-2 pb-2 float-left">
          <div className="card-body">
            <h4 className="card-title font-serif text-black font-bold text-xl">
              Net Working Capital
            </h4>
            <h1 className="card-text float-left">{title6} </h1>
          </div>
          <div className="card-data">
            <Plot
              className="plotly-graph1 card-text"
              data={plotData7}
              layout={{
                yaxis: {
                  type: "category",
                  zeroline: false,
                },
                bargap: 0.3,
                barcornerradius: 30,
                height: 300,
                width: 400,
              }}
            />

            
          </div>

          
          </div>

          


        </div>
      </div>
      <div className="flex items-end justify-end">
      <Link to="/Dash" className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded-lg shadow-lg inline-flex items-center">
    Next <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2" />
  </Link>
  </div>
    </div>

    
  </div>

  

  </div>

  <Footer/>
  </div>
  
  );
};

export default Datavisual;
