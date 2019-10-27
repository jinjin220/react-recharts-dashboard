import React from 'react';
import { ResponsiveContainer,PieChart, Pie,Cell} from 'recharts';

export default class PieCharts extends React.Component{
	constructor(props) {
    super(props);
    
    this.state = {
      inRadius: 80,
      outRadius: 90
    };
  	}

	render() {
		const data = [{name: 'Sold', value: 200}, {name: 'unsold', value: 100}];
			const COLORS = [this.props.primColor, '#dcdfe2'];

		return(
		  <ResponsiveContainer width="100%" height={300}>
			  <PieChart>
				 <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={this.state.inRadius} outerRadius={this.state.outRadius}>
				  	{
					  data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
					}
				 </Pie>
			  </PieChart>
		  </ResponsiveContainer>
		);
	}
}