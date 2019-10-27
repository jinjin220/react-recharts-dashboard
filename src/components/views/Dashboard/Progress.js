import React, {Component} from 'react';
import PropTypes from 'prop-types';


const propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		]),
	max:  PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		])
}

const defaultProps = {
	value: 0,
	max: 100,
	height: 20,
	color: 'black',
	styles: {
		height: 20,
		borderRadius: 28
	}
};

const Progress = ({...props}) => {
	const {value, max, color, height} = props;

	const percent = ((Number(value) / Number(max))* 100);
	
	const progressBarClasses =  'progbar' ;

	let styles = {
		height: height
	}

	const progressBar = (
		<div 
		className={progressBarClasses}
		style={{
		height: height,
		borderRadius: 28,
		backgroundColor: color,
		width: percent+'%'
		}} 
		/>
	);

	return (
		<div {...props} className='prog' style={styles} children={progressBar} />		
		)
}

Progress.defaultProps = defaultProps;
Progress.propTypes = propTypes;
export default Progress;