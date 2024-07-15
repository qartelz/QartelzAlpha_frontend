import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';

import GaugeChart from 'react-gauge-chart';

const Homepage = () => { 
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/get_Home/')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setData(data);
                } else {
                    setData([data]);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const chartStyle = {
        height: 250,
    };
    const formatTextValue = (value) => `${(value * 2.5/100).toFixed(3)}`;

    return (
        <div>
            {data.length > 0 ? (
                <div>
                    {data.map((item) => (
                        <center key={item.cell_id}>
                            <GaugeChart
                                id={`gauge-chart-${item.cell_id}`}
                                style={chartStyle}
                                className="plotly-graph"
                                animate={true}
                                nrOfLevels={420}
                                // arcsLength={[
                                //     1.33 / 2.5,    // Length for red arc
                                //     (1.55 - 1.33) / 2.5,  // Length for yellow arc
                                //     (2 - 1.55) / 2.5,     // Length for light green arc
                                //     (2.5 - 2) / 2.5       // Length for dark green arc
                                // ]}
                                arcsLength={[0.9, 0.9, 0.9, 0.9]} 
                                colors={['red', 'yellow', '#5BE12C', 'darkgreen']}
                                // percent={item.cell_value / 2.5} // Adjust based on the max range
                                // percent={item.cell_value > 2 ? 1 : item.cell_value / 2.5}
                                percent={Math.min(item.cell_value, 2) / 2.5} // Cap the value at 2
                                arcPadding={0}
                                textColor="blue"
                                arcWidth={0.6}
                                formatTextValue={formatTextValue}
                            />
                        </center>
                    ))}
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default Homepage;
