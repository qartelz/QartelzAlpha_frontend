import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext"
import jwtDecode from 'jwt-decode'

// import "bootstrap/dist/css/bootstrap.min.css";

import "./Opstmt.css";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

function Opstmt() {
  const compNum = localStorage.getItem("compNum");


  const token = localStorage.getItem("authTokens")

  if (token){
    const decode = jwtDecode(token)
    var username = decode.username
    

  }
  const {
    inputValues,
    setInputValues,
    tot2020,
    setTot2020,
    Cost27,
    setCost27,
    Cost26,
    setCost26,
    Cost37,
    setCost37,
    Cost31,
    setCost31,
    Cost42,
    setCost42,
    Cost41,
    setCost41,
    Cost39,
    setCost39,
    Cost38,
    setCost38,
  } = useContext(AppContext);
  

  

  // Handle changes in the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const [prefix, setPrefix] = useState("");
  const [Cost28, setCost28] = useState({});
  const [Cost35, setCost35] = useState({});

  // const [lessB,setLessB]=useState(0);

  // -------------------------------------------------TOTAL SALES ( START1 ) ----------------------------------------

  const uploadSum = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      let sum =
        parseFloat(inputValues[namePrefix + "_7"] || 0) +
        parseFloat(inputValues[namePrefix + "_8"] || 0) +
        parseFloat(inputValues[namePrefix + "_9"] || 0);

      console.log(`>>>>>>${sum}`);

      if (sum !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  // /
  //
  //
  // const uploadSum13 = async (data) => {
  //   try {
  //     const { name } = data;
  //     const user_id = localStorage.getItem("user_id");

  //     // let sum = parseFloat(inputValues[namePrefix + "_7"] || 0) + parseFloat(inputValues[namePrefix + "_8"] || 0) + parseFloat(inputValues[namePrefix + "_9"] || 0);

  //     // console.log(`>>>>>>${sum}`);

  //     if (inputValues["B1_23"] !== 0) {
  //       const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({ cell_id: "C1_13", cell_value: inputValues["B1_23"], user_id: user_id })
  //       });
  //       console.log('Response:', res); // Log the response data
  //     }

  //   } catch (error) {
  //     console.error('Error:', error); // Log any errors that occur during the request
  //   }
  // };
  // //
  // //
  // //

  //   //
  //   //
  //   //

  //   useEffect(() => {
  //     uploadSum13({ name: "C1_13" });
  //   }, [prefix, inputValues])
  //   //
  //   //
  //   //

  // -------------------------------------------------TOTAL SALES ( END1 ) ----------------------------------------

  // -------------------------------------------------COST OF SALES ( START1 ) ----------------------------------------

  const uploadSum26 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      let sum26 =
        parseFloat(inputValues[namePrefix + "_13"] || 0) +
        parseFloat(inputValues[namePrefix + "_14"] || 0) +
        parseFloat(inputValues[namePrefix + "_15"] || 0) +
        parseFloat(inputValues[namePrefix + "_16"] || 0) +
        parseFloat(inputValues[namePrefix + "_17"] || 0) +
        parseFloat(inputValues[namePrefix + "_18"] || 0) +
        parseFloat(inputValues[namePrefix + "_19"] || 0) +
        parseFloat(inputValues[namePrefix + "_20"] || 0) +
        parseFloat(inputValues[namePrefix + "_21"] || 0) -
        (parseFloat(inputValues[namePrefix + "_23"] || 0) +
          parseFloat(inputValues[namePrefix + "_24"] || 0) +
          parseFloat(inputValues[namePrefix + "_25"] || 0));

      console.log(`>>>>>>${sum26}`);

      if (sum26 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum26,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  useEffect(() => {
    console.log(Cost26);
    const total26 =
      // parseFloat(lessB)+
      parseFloat(inputValues[prefix + "_13"] || 0) +
      parseFloat(inputValues[prefix + "_14"] || 0) +
      parseFloat(inputValues[prefix + "_15"] || 0) +
      parseFloat(inputValues[prefix + "_16"] || 0) +
      parseFloat(inputValues[prefix + "_17"] || 0) +
      parseFloat(inputValues[prefix + "_18"] || 0) +
      parseFloat(inputValues[prefix + "_19"] || 0) +
      parseFloat(inputValues[prefix + "_20"] || 0) +
      parseFloat(inputValues[prefix + "_21"] || 0) -
      (parseFloat(inputValues[prefix + "_23"] || 0) +
        parseFloat(inputValues[prefix + "_24"] || 0) +
        parseFloat(inputValues[prefix + "_25"] || 0));

    setCost26(total26);
    setCost26({
      ...Cost26,
      [[prefix + "_26"]]: total26.toString(),
    });
    uploadSum26({ name: prefix + "_26", namePrefix: prefix });
  }, [prefix, inputValues]);

  // -------------------------------------------------COST OF SALES ( END1 ) ----------------------------------------

  // -------------------------------------------------COST OF PRODUCTION ( START1 ) --------------------------------------
  const uploadSum27 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      let sum27 =
        parseFloat(inputValues[namePrefix + "_14"] || 0) +
        parseFloat(inputValues[namePrefix + "_15"] || 0) +
        parseFloat(inputValues[namePrefix + "_16"] || 0) +
        parseFloat(inputValues[namePrefix + "_17"] || 0) +
        parseFloat(inputValues[namePrefix + "_18"] || 0) +
        parseFloat(inputValues[namePrefix + "_19"] || 0) +
        parseFloat(inputValues[namePrefix + "_20"] || 0) +
        parseFloat(inputValues[namePrefix + "_21"] || 0) -
        (parseFloat(inputValues[namePrefix + "_24"] || 0) +
          parseFloat(inputValues[namePrefix + "_25"] || 0));

      console.log(`>>>>>>${sum27}`);

      if (sum27 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum27,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };
  // -------------------------------------------------COST OF PRODUCTION ( END1 ) --------------------------------------

  // -------------------------------------------------GROSS PROFIT / LOSS ( STAR1 ) -------------------------------------
  const uploadSum28 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      // Calculate the value to upload
      const sum28 =
        parseFloat(tot2020[namePrefix + "_10"] || 0) +
        parseFloat(inputValues[namePrefix + "_23"] || 0) -
        parseFloat(Cost27[namePrefix + "_27"] || 0);

      // Only upload if the value is not 0
      if (sum28 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum28,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };
  // -------------------------------------------------GROSS PROFIT / LOSS ( END1 ) -------------------------------------

  // ------------------------------------------------ OPERATING PROFIT( START1 ) ----------------------------------------
  const uploadSum31 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      // Calculate the value to upload
      const sum31 =
        parseFloat(Cost28[namePrefix + "_28"] || 0) -
        (parseFloat(inputValues[namePrefix + "_29"] || 0) +
          parseFloat(inputValues[namePrefix + "_30"] || 0));

      // Only upload if the value is not 0
      if (sum31 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum31,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  // ------------------------------------------------ OPERATING PROFIT( END1 ) ----------------------------------------

  // ------------------------------------------------ PROFIT BEFORE TAX( START1 ) ----------------------------------------
  const uploadSum35 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      // Calculate the value to upload
      const sum35 =
        parseFloat(Cost31[namePrefix + "_31"] || 0) +
        (parseFloat(inputValues[namePrefix + "_33"] || 0) -
          parseFloat(inputValues[namePrefix + "_34"] || 0));

      // Only upload if the value is not 0
      if (sum35 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum35,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  // ------------------------------------------------ PROFIT BEFORE TAX( END1 ) ----------------------------------------

  // ------------------------------------------------NET PROFIT AFTER TAX( START1 ) ----------------------------------------
  const uploadSum37 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      // Calculate the value to upload
      const sum37 =
        parseFloat(Cost35[namePrefix + "_35"] || 0) -
        parseFloat(inputValues[namePrefix + "_36"] || 0);

      // Only upload if the value is not 0
      if (sum37 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum37,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  // ------------------------------------------------ NET PROFIT AFTER TAX( END1 ) ----------------------------------------

  // ------------------------------------------------ PBDIT( START1 ) ----------------------------------------
  const uploadSum38 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      // Calculate the value to upload
      const sum38 =
        parseFloat(Cost35[namePrefix + "_35"] || 0) +
        parseFloat(inputValues[namePrefix + "_21"] || 0) +
        parseFloat(inputValues[namePrefix + "_30"] || 0);

      // Only upload if the value is not 0
      if (sum38 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum38,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  // ------------------------------------------------ PBDIT( END1 ) ----------------------------------------
  // ------------------------------------------------ CASH ACCRUALS ( START1 ) ----------------------------------------
  const uploadSum39 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      // Calculate the value to upload
      const sum39 =
        parseFloat(Cost35[namePrefix + "_35"] || 0) +
        parseFloat(inputValues[namePrefix + "_21"] || 0);

      // Only upload if the value is not 0
      if (sum39 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum39,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  // ------------------------------------------------ CASH ACCRUALS ( END1 ) ----------------------------------------
  // ------------------------------------------------ RETAINED PROFIT( START1 ) ----------------------------------------
  const uploadSum41 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      // Calculate the value to upload
      const sum41 =
        parseFloat(Cost37[namePrefix + "_37"] || 0) -
        parseFloat(inputValues[namePrefix + "_40"] || 0);

      // Only upload if the value is not 0
      if (sum41 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum41,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  // ------------------------------------------------ RETAINED PROFIT ( END1 ) ----------------------------------------
  // ------------------------------------------------ NET CASH ACRRUALS( START1 ) ----------------------------------------
  const uploadSum42 = async (data) => {
    try {
      const { name, namePrefix } = data;
      const user_id = localStorage.getItem("user_id");

      // Calculate the value to upload
      const sum42 =
        parseFloat(Cost39[namePrefix + "_39"] || 0) -
        parseFloat(inputValues[namePrefix + "_40"] || 0);

      // Only upload if the value is not 0
      if (sum42 !== 0) {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: sum42,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  // ------------------------------------------------ NET CASH ACRRUALS ( END1 ) ----------------------------------------

  const changeData = async (e) => {
    try {
      const { name, value } = e.target;

      console.log(`name is ${name}`); // Log the value being set
      setInputValues((prev) => ({ ...prev, [name]: value }));
      const user_id = localStorage.getItem("user_id");

      let da = JSON.stringify({
        cell_id: name,
        cell_value: value,
        user_id: user_id,
      });

      console.log(da); // Log the name being set

      if (
        name.includes("_7") ||
        name.includes("_8") ||
        name.includes("_9") ||
        name.includes("_13") ||
        name.includes("_14") ||
        name.includes("_15") ||
        name.includes("_16") ||
        name.includes("_17") ||
        name.includes("_18") ||
        name.includes("_19") ||
        name.includes("_20") ||
        name.includes("_21") ||
        name.includes("_23") ||
        name.includes("_24") ||
        name.includes("_25") ||
        name.includes("_29") ||
        name.includes("_30") ||
        name.includes("_33") ||
        name.includes("_34") ||
        name.includes("_36") ||
        name.includes("_40")
      ) {
        setPrefix(name.split("_")[0]);
      }

      if (value !== "") {
        const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cell_id: name,
            cell_value: value,
            user_id: user_id,
          }),
        });
        console.log("Response:", res); // Log the response data
      }
      // if(name=='B1_23'||name=='B1_24'||name=='B1_25'){
      //   setLessB(lessB+=value)
      // }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
    }
  };

  // -------------------------------------------------TOTAL SALES ( START2 ) ----------------------------------------

  useEffect(() => {
    console.log(tot2020);
    const total =
      parseFloat(inputValues[prefix + "_7"] || 0) +
      parseFloat(inputValues[prefix + "_8"] || 0) +
      parseFloat(inputValues[prefix + "_9"] || 0);
    setTot2020(total);
    setTot2020({
      ...tot2020,
      [[prefix + "_10"]]: total.toString(),
    });
    uploadSum({ name: prefix + "_10", namePrefix: prefix });
  }, [prefix, inputValues]);

  // -------------------------------------------------TOTAL SALES ( END2 ) ----------------------------------------

  // -------------------------------------------------COST OF SALES ( START2 ) ----------------------------------------

  // -------------------------------------------------COST OF SALES ( END2 ) ----------------------------------------

  // -------------------------------------------------COST OF PRODUCTION ( START2 ) --------------------------------------
  useEffect(() => {
    console.log(Cost27);
    const total27 =
      parseFloat(inputValues[prefix + "_14"] || 0) +
      parseFloat(inputValues[prefix + "_15"] || 0) +
      parseFloat(inputValues[prefix + "_16"] || 0) +
      parseFloat(inputValues[prefix + "_17"] || 0) +
      parseFloat(inputValues[prefix + "_18"] || 0) +
      parseFloat(inputValues[prefix + "_19"] || 0) +
      parseFloat(inputValues[prefix + "_20"] || 0) +
      parseFloat(inputValues[prefix + "_21"] || 0) -
      (parseFloat(inputValues[prefix + "_24"] || 0) +
        parseFloat(inputValues[prefix + "_25"] || 0));

    setCost27(total27);
    setCost27({
      ...Cost27,
      [[prefix + "_27"]]: total27.toString(),
    });
    uploadSum27({ name: prefix + "_27", namePrefix: prefix });
  }, [prefix, inputValues]);

  // -------------------------------------------------COST OF PRODUCTION ( END2 ) ----------------------------------------

  // -------------------------------------------------GROSS PROFIT / LOSS ( START2 ) -------------------------------------
  useEffect(() => {
    console.log(Cost28);
    const total10 = parseFloat(tot2020[prefix + "_10"]) || 0;
    const total23 = parseFloat(inputValues[prefix + "_23"]) || 0;
    const cost27 = parseFloat(Cost27[prefix + "_27"]) || 0;
    const total28 = total10 + total23 - cost27;
    console.log("//////////////////////////", total28);

    setCost28(total28);
    setCost28({
      ...Cost28,
      [[prefix + "_28"]]: total28.toString(),
    });
    uploadSum28({ name: prefix + "_28", namePrefix: prefix });
  }, [prefix, inputValues, Cost27, tot2020]);

  // ------------------------------------------------GROSS PROFIT / LOSS ( END2 ) ----------------------------------------

  // ------------------------------------------------ OPERATING PROFIT( START2 ) ----------------------------------------
  useEffect(() => {
    const total31 =
      parseFloat(Cost28[prefix + "_28"] || 0) -
      (parseFloat(inputValues[prefix + "_29"] || 0) +
        parseFloat(inputValues[prefix + "_30"] || 0));

    setCost31(total31);
    setCost31({
      ...Cost31,
      [[prefix + "_31"]]: total31.toString(),
    });
    uploadSum31({ name: prefix + "_31", namePrefix: prefix });
  }, [prefix, inputValues, Cost28]);

  // ------------------------------------------------ OPERATING PROFIT( END2 ) ----------------------------------------

  // ----------------------------------------------- PROFIT BEFORE TAX( START2 ) ----------------------------------------
  useEffect(() => {
    const total35 =
      parseFloat(Cost31[prefix + "_31"] || 0) +
      (parseFloat(inputValues[prefix + "_33"] || 0) -
        parseFloat(inputValues[prefix + "_34"] || 0));

    setCost35(total35);
    setCost35({
      ...Cost35,
      [[prefix + "_35"]]: total35.toString(),
    });
    uploadSum35({ name: prefix + "_35", namePrefix: prefix });
  }, [prefix, inputValues, Cost31]);

  // ------------------------------------------------ PROFIT BEFORE TAX( END2 ) ----------------------------------------

  // -------------------------------------------- NET PROFIT AFTER TAX( START2 ) ----------------------------------------
  useEffect(() => {
    const total37 =
      parseFloat(Cost35[prefix + "_35"] || 0) -
      parseFloat(inputValues[prefix + "_36"] || 0);

    setCost37(total37);
    setCost37({
      ...Cost37,
      [[prefix + "_37"]]: total37.toString(),
    });
    uploadSum37({ name: prefix + "_37", namePrefix: prefix });
  }, [prefix, inputValues, Cost35]);

  // ---------------------------------------------- NET PROFIT AFTER TAX( END2 ) ----------------------------------------

  // ----------------------------------------------- PBDIT( START2 ) ----------------------------------------
  useEffect(() => {
    const total38 =
      parseFloat(Cost35[prefix + "_35"] || 0) +
      parseFloat(inputValues[prefix + "_21"] || 0) +
      parseFloat(inputValues[prefix + "_30"] || 0);
    console.log(
      "//////////////////////////",
      parseFloat(inputValues[prefix + "_30"] || 0)
    );

    setCost38(total38);
    setCost38({
      ...Cost38,
      [[prefix + "_38"]]: total38.toString(),
    });
    uploadSum38({ name: prefix + "_38", namePrefix: prefix });
  }, [prefix, inputValues, Cost35]);

  // ------------------------------------------------ PBDIT( END2 ) ----------------------------------------

  // ----------------------------------------------- CASH ACCURALS( START2 ) ----------------------------------------
  useEffect(() => {
    const total39 =
      parseFloat(Cost37[prefix + "_37"] || 0) +
      parseFloat(inputValues[prefix + "_21"] || 0);

    setCost39(total39);
    setCost39({
      ...Cost39,
      [[prefix + "_39"]]: total39.toString(),
    });
    uploadSum39({ name: prefix + "_39", namePrefix: prefix });
  }, [prefix, inputValues, Cost37]);

  // ------------------------------------------------CASH ACCURALS( END2 ) ----------------------------------------
  // ----------------------------------------------- RETAINED PROFIT ( START2 ) ----------------------------------------
  useEffect(() => {
    const total41 =
      parseFloat(Cost37[prefix + "_37"] || 0) -
      parseFloat(inputValues[prefix + "_40"] || 0);

    setCost41(total41);
    setCost41({
      ...Cost41,
      [[prefix + "_41"]]: total41.toString(),
    });
    uploadSum41({ name: prefix + "_41", namePrefix: prefix });
  }, [prefix, inputValues, Cost37]);

  // ------------------------------------------------RETAINED PROFIT ( END2 ) ----------------------------------------
  // ----------------------------------------------- NET CASH ACCRUALS ( START2 ) ----------------------------------------
  useEffect(() => {
    const total42 =
      parseFloat(Cost39[prefix + "_39"] || 0) -
      parseFloat(inputValues[prefix + "_40"] || 0);

    setCost42(total42);
    setCost42({
      ...Cost42,
      [[prefix + "_42"]]: total42.toString(),
    });
    uploadSum42({ name: prefix + "_42", namePrefix: prefix });
  }, [prefix, inputValues, Cost39]);













  return (
    <div>
      <Navbar />

      <div>
        <div className="bg-white pb-20 ">
          <div className="flex items-center justify-center py-2 ">
            <div className="text-center my-4">
                <h2 className="font-bold text-2xl">{compNum}</h2>
             
            </div>
          </div>

          <div className="mx-10">
            <div className="grid grid-cols-12  border-2">
             
              <div className="col-span-4 bg-gray-500  flex items-center justify-center">
                <h1 className="font-bold text-xl text-white text-center">
                  Operating Statement Particulars
                </h1>
              </div>

             
              <div className="col-span-8 grid grid-rows-2 ">
               
                <div className="grid grid-cols-8  ">
                  <div className="border p-2">
                    <h2 className="text-center font-bold">2020</h2>
                  </div>

                  <div className="border p-2">
                    <h2 className="text-center font-bold">2021</h2>
                  </div>

                  <div className="border p-2">
                    <h2 className="text-center font-bold">2022</h2>
                  </div>

                  <div className="border p-2">
                    <h2 className="text-center font-bold">2023</h2>
                  </div>

                  <div className="border p-2">
                    <h2 className="text-center font-bold">2024</h2>
                  </div>

                  <div className="border p-2">
                    <h2 className="text-center font-bold">2025</h2>
                  </div>
                  <div className="border p-2">
                    <h2 className="text-center font-bold">2026</h2>
                  </div>
                  <div className="border p-2">
                    <h2 className="text-center font-bold">2027</h2>
                  </div>
                </div>

                <div className="grid grid-cols-8">
                  <div className="border p-2">
                    <p className="text-center">Audited</p>
                  </div>

                  <div className="border p-2">
                    <p className="text-center">Audited</p>
                  </div>

                  <div className="border p-2">
                    <p className="text-center">Audited</p>
                  </div>

                  <div className="border p-2">
                    <p className="text-center">Audited</p>
                  </div>

                  <div className="border p-2">
                    <p className="text-center">Audited</p>
                  </div>

                  <div className="border p-2">
                    <p className="text-center">Projected</p>
                  </div>

                  <div className="border p-2">
                    <p className="text-center">Projected</p>
                  </div>

                  <div className="border p-2">
                    <p className="text-center">Projected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-2   px-10">
            <div className="grid   border-solid border-black border-2  grid-cols-12 ">
              <div className="col-span-4 bg-gray-100  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">NET SALES</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className="grid grid-cols-8  gap-2"></div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Sales/ Receipts- Domestic</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_7"
                    value={inputValues.B1_7}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_7"
                    value={inputValues.C1_7}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_7"
                    value={inputValues.D1_7}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_7"
                    value={inputValues.E1_7}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_7"
                    value={inputValues.F1_7}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_7"
                    value={inputValues.G1_7}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_7"
                    value={inputValues.H1_7}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_7"
                    value={inputValues.I1_7}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Sales Exports</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_8"
                    value={inputValues.B1_8}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_8"
                    value={inputValues.C1_8}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_8"
                    value={inputValues.D1_8}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_8"
                    value={inputValues.E1_8}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_8"
                    value={inputValues.F1_8}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_8"
                    value={inputValues.G1_8}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_8"
                    value={inputValues.H1_8}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_8"
                    value={inputValues.I1_8}
                    onChange={changeData}

                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Others</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_9"
                    value={inputValues.B1_9}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_9"
                    value={inputValues.C1_9}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_9"
                    value={inputValues.D1_9}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_9"
                    value={inputValues.E1_9}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_9"
                    value={inputValues.F1_9}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_9"
                    value={inputValues.G1_9}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_9"
                    value={inputValues.H1_9}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_9"
                    value={inputValues.I1_9}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  bg-customBlue flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">TOTAL SALES</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-400 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    readOnly
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                    name="B1_10"
                    value={tot2020.B1_10}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    readOnly
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                    name="C1_10"
                    value={tot2020.C1_10}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    readOnly
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                    name="D1_10"
                    value={tot2020.D1_10}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    readOnly
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                    name="E1_10"
                    value={tot2020.E1_10}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    readOnly
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                    name="F1_10"
                    value={tot2020.F1_10}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    readOnly
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                    name="G1_10"
                    value={tot2020.G1_10}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    readOnly
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                    name="H1_10"
                    value={tot2020.H1_10}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    readOnly
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                    name="I1_10"
                    value={tot2020.I1_10}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2   px-10">
            <div className="grid  border-2 border-solid border-black border-t-2 border-r-2 border-l-2 grid-cols-12 ">
              <div className="col-span-4 bg-gray-100  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">COST OF SALES</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className="grid grid-cols-8  gap-2"></div>
              </div>
            </div>
          </div>

          <div className="container mx-auto  mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-gray-100  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Add Opening Stock</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className="grid grid-cols-8  gap-2"></div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Finished Goods</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_13"
                    value={inputValues.B1_13}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_13"
                    value={inputValues.B1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_13"
                    value={inputValues.C1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_13"
                    value={inputValues.D1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_13"
                    value={ inputValues.E1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_13"
                    value={inputValues.F1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_13"
                    value={inputValues.G1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_13"
                    value={inputValues.H1_23}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Work in Process</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_14"
                    value={inputValues.B1_14}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_14"
                    value={inputValues.B1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_14"
                    value={inputValues.C1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_14"
                    value={inputValues.D1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_14"
                    value={inputValues.E1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_14"
                    value={inputValues.F1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_14"
                    value={inputValues.G1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_14"
                    value={inputValues.H1_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Raw Material</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_15"
                    value={inputValues.B1_15}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_15"
                    value={inputValues.B1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_15"
                    value={inputValues.C1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_15"
                    value={inputValues.D1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_15"
                    value={inputValues.E1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_15"
                    value={inputValues.F1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_15"
                    value={inputValues.G1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_15"
                    value={inputValues.H1_25}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">PURCHASE / RM</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_16"
                    value={inputValues.B1_16}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_16"
                    value={inputValues.C1_16}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_16"
                    value={inputValues.D1_16}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_16"
                    value={inputValues.E1_16}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_16"
                    value={inputValues.F1_16}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_16"
                    value={inputValues.G1_16}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_16"
                    value={inputValues.H1_16}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_16"
                    value={inputValues.I1_16}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Power & Fuel</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_17"
                    value={inputValues.B1_17}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_17"
                    value={inputValues.C1_17}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_17"
                    value={inputValues.D1_17}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_17"
                    value={inputValues.E1_17}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_17"
                    value={inputValues.F1_17}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_17"
                    value={inputValues.G1_17}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_17"
                    value={inputValues.H1_17}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_17"
                    value={inputValues.I1_17}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Direct labour</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_18"
                    value={inputValues.B1_18}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_18"
                    value={inputValues.C1_18}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_18"
                    value={inputValues.D1_18}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_18"
                    value={inputValues.E1_18}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_18"
                    value={inputValues.F1_18}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_18"
                    value={inputValues.G1_18}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_18"
                    value={inputValues.H1_18}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_18"
                    value={inputValues.I1_18}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Repairs and Maintenence</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_19"
                    value={inputValues.B1_19}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_19"
                    value={inputValues.C1_19}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_19"
                    value={inputValues.D1_19}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_19"
                    value={inputValues.E1_19}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_19"
                    value={inputValues.F1_19}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_19"
                    value={inputValues.G1_19}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_19"
                    value={inputValues.H1_19}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_19"
                    value={inputValues.I1_19}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">MFG / Direct Expenses</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_20"
                    value={inputValues.B1_20}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_20"
                    value={inputValues.C1_20}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_20"
                    value={inputValues.D1_20}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_20"
                    value={inputValues.E1_20}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_20"
                    value={inputValues.F1_20}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_20"
                    value={inputValues.G1_20}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_20"
                    value={inputValues.H1_20}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_20"
                    value={inputValues.I1_20}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Depreciation</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_21"
                    value={inputValues.B1_21}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_21"
                    value={inputValues.C1_21}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_21"
                    value={inputValues.D1_21}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_21"
                    value={inputValues.E1_21}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_21"
                    value={inputValues.F1_21}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_21"
                    value={inputValues.G1_21}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_21"
                    value={inputValues.H1_21}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_21"
                    value={inputValues.I1_21}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto  mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-gray-100  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">LESS : Closing Stock</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className="grid grid-cols-8  gap-2"></div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Finishing Goods</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_23"
                    value={inputValues.B1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_23"
                    value={inputValues.C1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_23"
                    value={inputValues.D1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_23"
                    value={inputValues.E1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_23"
                    value={inputValues.F1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_23"
                    value={inputValues.G1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_23"
                    value={inputValues.H1_23}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_23"
                    value={inputValues.I1_23}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Work-in-Process</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_24"
                    value={inputValues.B1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_24"
                    value={inputValues.C1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_24"
                    value={inputValues.D1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_24"
                    value={inputValues.E1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_24"
                    value={inputValues.F1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_24"
                    value={inputValues.G1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_24"
                    value={inputValues.H1_24}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_24"
                    value={inputValues.I1_24}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Raw Material</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_25"
                    value={inputValues.B1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_25"
                    value={inputValues.C1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_25"
                    value={inputValues.D1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"

                    name="E1_25"
                    value={inputValues.E1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_25"
                    value={inputValues.F1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_25"
                    value={inputValues.G1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_25"
                    value={inputValues.H1_25}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_25"
                    value={inputValues.I1_25}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  bg-customBlue flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">COST OF SALES</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-400 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    readOnly
                    name="B1_26"
                    value={Cost26.B1_26}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="C1_26"
                    value={Cost26.C1_26}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="D1_26"
                    value={Cost26.D1_26}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="E1_26"
                    value={Cost26.E1_26}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="F1_26"
                    value={Cost26.F1_26}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="G1_26"
                    value={Cost26.G1_26}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="H1_26"
                    value={Cost26.H1_26}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="I1_26"
                    value={Cost26.I1_26}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  bg-customBlue flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">
                  COST OF PRODUCTION
                </h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-400 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    readOnly
                    name="B1_27"
                    value={Cost27.B1_27}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="C1_27"
                    value={Cost27.C1_27}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="D1_27"
                    value={Cost27.D1_27}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="E1_27"
                    value={Cost27.E1_27}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="F1_27"
                    value={Cost27.F1_27}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="G1_27"
                    value={Cost27.G1_27}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="H1_27"
                    value={Cost27.H1_27}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="I1_27"
                    value={Cost27.I1_27}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-customBlue  flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">
                  GROSS PROFIT(+)/LOSS(-)
                </h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-400 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    readOnly
                    name="B1_28"
                    value={Cost28.B1_28}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="C1_28"
                    value={Cost28.C1_28}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="D1_28"
                    value={Cost28.D1_28}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="E1_28"
                    value={Cost28.E1_28}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="F1_28"
                    value={Cost28.F1_28}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="G1_28"
                    value={Cost28.G1_28}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="H1_28"
                    value={Cost28.H1_28}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="I1_28"
                    value={Cost28.I1_28}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Selling & Adm Expenses</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_29"
                    value={inputValues.B1_29}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_29"
                    value={inputValues.C1_29}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_29"
                    value={inputValues.D1_29}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_29"
                    value={inputValues.E1_29}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_29"
                    value={inputValues.F1_29}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_29"
                    value={inputValues.G1_29}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_29"
                    value={inputValues.H1_29}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_29"
                    value={inputValues.I1_29}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Interest & Fin Charges</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_30"
                    value={inputValues.B1_30}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_30"
                    value={inputValues.C1_30}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_30"
                    value={inputValues.D1_30}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_30"
                    value={inputValues.E1_30}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_30"
                    value={inputValues.F1_30}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_30"
                    value={inputValues.G1_30}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_30"
                    value={inputValues.H1_30}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_30"
                    value={inputValues.I1_30}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-customBlue  flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">
                OPERATING PROFIT/LOSS
                </h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-400 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    readOnly
                    name="B1_31"
                    value={Cost31.B1_31}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="C1_31"
                    value={Cost31.C1_31}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="D1_31"
                    value={Cost31.D1_31}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="E1_31"
                    value={Cost31.E1_31}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="F1_31"
                    value={Cost31.F1_31}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="G1_31"
                    value={Cost31.G1_31}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="H1_31"
                    value={Cost31.H1_31}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="I1_31"
                    value={Cost31.I1_31}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto  mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-gray-100  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">OTHER INCOME / EXPENCE</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className="grid grid-cols-8  gap-2"></div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Add Other income</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_33"
                    value={inputValues.B1_33}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_33"
                    value={inputValues.C1_33}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_33"
                    value={inputValues.D1_33}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_33"
                    value={inputValues.E1_33}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_33"
                    value={inputValues.F1_33}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_33"
                    value={inputValues.G1_33}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_33"
                    value={inputValues.H1_33}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_33"
                    value={inputValues.I1_33}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Less Other Expenses</h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_34"
                    value={inputValues.B1_34}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_34"
                    value={inputValues.C1_34}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_34"
                    value={inputValues.D1_34}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_34"
                    value={inputValues.E1_34}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_34"
                    value={inputValues.F1_34}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_34"
                    value={inputValues.G1_34}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_34"
                    value={inputValues.H1_34}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_34"
                    value={inputValues.I1_34}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-customBlue  flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">
                  PROFIT BEFORE TAX
                </h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-400 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    readOnly
                    name="B1_35"
                    value={Cost35.B1_35}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="C1_35"
                    value={Cost35.C1_35}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="D1_35"
                    value={Cost35.D1_35}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="E1_35"
                    value={Cost35.E1_35}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="F1_35"
                    value={Cost35.F1_35}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="G1_35"
                    value={Cost35.G1_35}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="H1_35"
                    value={Cost35.H1_35}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="I1_35"
                    value={Cost35.I1_35}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Provision for Taxes</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_36"
                    value={inputValues.B1_36}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"

                    name="C1_36"
                    value={inputValues.C1_36}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_36"
                    value={inputValues.D1_36}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"

                    name="E1_36"
                    value={inputValues.E1_36}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_36"
                    value={inputValues.F1_36}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_36"
                    value={inputValues.G1_36}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_36"
                    value={inputValues.H1_36}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_36"
                    value={inputValues.I1_36}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-customBlue  flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">
                  Net Profit after Tax / Loss
                </h2>
              </div>

              <div className="col-span-8 flex justify-center items-center bg-gray-400 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    readOnly
                    name="B1_37"
                    value={Cost37.B1_37}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="C1_37"
                    value={Cost37.C1_37}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="D1_37"
                    value={Cost37.D1_37}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="E1_37"
                    value={Cost37.E1_37}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="F1_37"
                    value={Cost37.F1_37}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="G1_37"
                    value={Cost37.G1_37}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="H1_37"
                    value={Cost37.H1_37}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="I1_37"
                    value={Cost37.I1_37}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-customBlue  flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">P B D I T</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-400 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    readOnly
                    name="B1_38"
                    value={Cost38.B1_38}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="C1_38"
                    value={Cost38.C1_38}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="D1_38"
                    value={Cost38.D1_38}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="E1_38"
                    value={Cost38.E1_38}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="F1_38"
                    value={Cost38.F1_38}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="G1_38"
                    value={Cost38.G1_38}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="H1_38"
                    value={Cost38.H1_38}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="I1_38"
                    value={Cost38.I1_38}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-customBlue  flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">Cash Accruals</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-400 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    readOnly
                    name="B1_39"
                    value={Cost39.B1_39}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="C1_39"
                    value={Cost39.C1_39}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="D1_39"
                    value={Cost39.D1_39}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="E1_39"
                    value={Cost39.E1_39}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="F1_39"
                    value={Cost39.F1_39}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="G1_39"
                    value={Cost39.G1_39}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="H1_39"
                    value={Cost39.H1_39}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />

                  <input
                    type="text"
                    readOnly
                    name="I1_39"
                    value={Cost39.I1_39}
                    onChange={changeData}
                    className=" font-bold bg-white  border-2  border-gray-300 rounded-md w-full  p-2 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4  flex items-center  justify-center p-4">
                <h2 className="text-lg font-bold">Dividend / Drawings</h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_40"
                    value={inputValues.B1_40}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_40"
                    value={inputValues.C1_40}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_40"
                    value={inputValues.D1_40}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_40"
                    value={inputValues.E1_40}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_40"
                    value={inputValues.F1_40}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_40"
                    value={inputValues.G1_40}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_40"
                    value={inputValues.H1_40}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"

                    name="I1_40"
                    value={inputValues.I1_40}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-customBlue  flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">
                  Retained Profit
                </h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_41"
                    value={Cost41.B1_41}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_41"
                    value={Cost41.C1_41}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_41"
                    value={Cost41.D1_41}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_41"
                    value={Cost41.E1_41}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_41"
                    value={Cost41.F1_41}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_41"
                    value={Cost41.G1_41}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_41"
                    value={Cost41.H1_41}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_41"
                    value={Cost41.I1_41}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-2 mb-2  px-10">
            <div className="grid   border-solid border-2 border-black  grid-cols-12 ">
              <div className="col-span-4 bg-customBlue  flex items-center  justify-center p-4">
                <h2 className="text-lg text-white font-bold">
                  Net Cash Accrual
                </h2>
              </div>
              <div className="col-span-8 flex justify-center items-center bg-gray-100 px-4">
                <div className={`flex gap-2`}>
                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="B1_42"
                    value={Cost42.B1_42}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="C1_42"
                    value={Cost42.C1_42}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="D1_42"
                    value={Cost42.D1_42}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="E1_42"
                    value={Cost42.E1_42}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="F1_42"
                    value={Cost42.F1_42}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="G1_42"
                    value={Cost42.G1_42}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="H1_42"
                    value={Cost42.H1_42}
                    onChange={changeData}
                  />

                  <input
                    type="text"
                    placeholder="Rs"
                    className="bg-white w-full  p-2 text-center"
                    name="I1_42"
                    value={Cost42.I1_42}
                    onChange={changeData}
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to="/asset">
            <div className="mt-10 flex items-end justify-end ">
              <button className="bg-customBlue2  text-white mx-28 py-2 px-10 rounded-full flex transform transition-transform hover:scale-105 shadow-md">
                Next
              </button>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Opstmt;
