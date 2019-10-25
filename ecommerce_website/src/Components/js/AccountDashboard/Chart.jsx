import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('2019-04-10', 0),
  createData('2019-04-12', 300),
  createData('2019-04-15', 600),
  createData('2019-04-19', 800),
  createData('2019-04-20', 1500),
  createData('2019-04-30', 2000),
  createData('2019-05-10', 2400),
  createData('2019-05-13', 2400),
  createData('2019-06-10', 3000)
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title> Product Sales </Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}