import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default class LineCharts extends React.Component{
	render() {
		const data = [
	      {day: 'Mon', tw: 4000, pv: 2400},
	      {day: 'Tue', tw: 3000, pv: 1398},
	      {day: 'Wed', tw: 2000, pv: 9800},
	      {day: 'Thu', tw: 2780, pv: 3908},
	      {day: 'Fri', tw: 1890, pv: 4800},
	      {day: 'Sat', tw: 2390, pv: 3800},
	      {day: 'Sun', tw: 3490, pv: 4300}
		];
		return(
		  <ResponsiveContainer width="100%" height={300}>
			  <LineChart data={data}>
				  <CartesianGrid stroke="#dcdfe2" strokeDasharray="3 3"/>
				  <XAxis dataKey="day" stroke="#dcdfe2" tick={{fontSize: 12,fontWeight: 700}}/>
				  <YAxis stroke="#dcdfe2" tick={{fontSize: 12,fontWeight: 700}}/>
				  <Tooltip/>
				  
				  <Line type="monotone" dataKey="tw" stroke="#4562ec" strokeWidth="2"/>
				  <Line type="monotone" dataKey="pv" stroke="#a6b4bf" strokeWidth="2" strokeDasharray="5 5" dot={false}/>
			  </LineChart>
		  </ResponsiveContainer>
		);
	}
}