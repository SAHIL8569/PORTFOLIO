import React, { useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';

const Chart = () => {
  const [data] = useState({
    labels: [ 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#3b448b',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
    ],
  });
  return (
    <CDBContainer style={{ padding: "30px 0px 50px"}}>
      <h3 className="mt-5">My Professional Skills</h3>
      <HorizontalBar data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default Chart;