import React, { useRef, useEffect,useState } from "react";
// import Prod from '../../assets/images/product.png'
import Visual1 from "../../assets/images/visual1.png";
import Visual2 from "../../assets/images/visual2.png";
import Visual3 from "../../assets/images/visual3.png";
import Bg4 from "../../assets/images/dashboard.png";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChartLine } from "@fortawesome/free-solid-svg-icons";
// import Beez from "../../assets/images/beez.png";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/popup/Popup";

const Home = () => {


 
  



  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePopupSubmit = (input) => {
    console.log('User input:', input);
    setShowPopup(false);
  };


  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <>
    <div className="bodyclr ">

    <Navbar/>
      <div >
        <div className="flex  h-screen flex-col md:flex-row px-20 py-28 items-center justify-center">
          <div className=" flex  flex-col items-center justify-center text-center p-3 ">
            <h1 className=" text-white text-7xl font-bold mb-4 animate-downToUp">
            Forensic Analysis of
Financial Statements and
Data Visualization
            </h1>
            <h2 className="w-2/3 animate-fadeIn text-gray-300 text-lg  font-normal mb-6">
            A comprehensive tool for analyzing Financial Statements and Assessing Risk with advanced rating models.
            </h2>

          
            

            
            <button
             onClick={handleButtonClick}
          
             className="bg-slate-900 py-3 text-white font-bold  px-4 rounded-full flex items-center transform transition-transform hover:scale-105 shadow-md">
      Explore Insights
      <FontAwesomeIcon icon={faArrowUpRightDots} className="ml-2" />
      </button>

    <Popup show={showPopup} onClose={handleClosePopup} onSubmit={handlePopupSubmit} />

    
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////// */}

      <div className="bg-gray-800 py-20 rounded-tl-[80%] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
          

            <div className="   rounded-3xl">
              <img
                className=" overflow-hidden h-96 w-[600px]   rounded-3xl "
                src={Bg4}
                alt=""
              />
            </div>

         

            <div className="w-1/2 ml-28">
            <h2 className="text-4xl font-bold leading-tight text-white max-w-lg mb-4">
  <span className="text-yellow-300">Data Visualization and 
  Data Analysis using Power BI</span>
</h2>
              <p className="text-white text-md  max-w-xl">
                Discover the powerful solution for seamless data processing,
                insightful visualizations, and robust analytical capabilities,
                empowers to make data-driven decisions.
              </p>
            </div>
          </div>
        </div>


        
       
      </div>


      <div>
       









    </div>

    <div className="bg-gray-100 py-32">
<div className="flex items-center justify-center ">
      <div className="text-center w-[800px]">
        <button className="mb-4 px-6 py-2 bg-gray-300 bg-opacity-50 backdrop-blur-md rounded-2xl shadow-md">
          <span className="mr-2 text-lg font-bold">•</span>Features
        </button>

        
      </div>

      
    </div>
    <div className="text-center ">
  <h1 className="text-5xl font-bold text-center mb-2">Get your analysis report instant</h1>
  <h1 className="text-5xl font-bold text-center mb-2"> with no compromise.</h1>
  <p className="w-full max-w-lg mx-auto text-gray-600">
    Receive fast, accurate analysis reports without sacrificing quality. Our service ensures timely delivery of comprehensive data and insights, helping you make informed decisions swiftly and confidently.
  </p>
</div>

    </div>


      {/* _______________________ */}

      

      <Footer />

      </div>
    </>
  );
};

export default Home;
