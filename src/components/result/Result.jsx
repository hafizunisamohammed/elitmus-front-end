import React from 'react';

import Top from '../top/Top';

function Result() {
  const data = [
    { id: 1, Stage: 'a', Score:10  },
    { id: 2, Stage: 'b', Score: 20 },
    { id: 3, Stage: 'c', Score: 30 },
    { id: 4, Stage: 'd', Score: 50 },
  ];

  return (
    <>
      <Top/>
      <table>
      <thead>
        <tr>
          <th>Stages</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.Stage}</td>
            <td>{item.Score}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>

    
  );
}

export default Result;
