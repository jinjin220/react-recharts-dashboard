import React from 'react';

export default class MenuIC extends React.Component {
  render() {
    var strokeColor = this.props.strokeColor;
    return (
      <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
<circle fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="12.048" cy="3.675" r="1.926"/>
<circle fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="12.048" cy="12.033" r="1.926"/>
<circle fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="12.048" cy="20.455" r="1.926"/>
      </svg>
    )
  }
}