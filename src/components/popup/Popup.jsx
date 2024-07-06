import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Popup = ({ show, onClose, onSubmit }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/opstmt'); 
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("compNum", selectedValue);
  }, [selectedValue]);

  if (!show) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements.input.value;
    onSubmit(input);
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative bg-white h-56 px-20 py-10 rounded shadow-lg flex flex-col justify-between">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute text-4xl top-0 left-0 px-2  text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          <div className="flex flex-col items-center flex-grow">
            <label className="block mb-2 text-xl font-medium text-gray-700">
              Enter the company to analyze.
            </label>
            <input
              type="text"
              className="mt-1 block w-3/4 px-3 py-4 border font-bold border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={selectedValue}
              onChange={handleChange}
            />
          </div>
          <div className=" flex justify-center">
            <button
              onClick={handleClick}
              type="submit"
              className="px-4 py-1 bg-blue-800 rounded-xl text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
