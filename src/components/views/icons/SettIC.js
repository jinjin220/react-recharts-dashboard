import React from 'react';

export default class SettIC extends React.Component {
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
<line fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="1.763" y1="6.189" x2="22.237" y2="6.189"/>
<line fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="1.763" y1="12.16" x2="22.237" y2="12.16"/>
<line fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="1.763" y1="17.812" x2="22.237" y2="17.812"/>
<rect x="5.519" y="3.434" fill={strokeColor} width="4.481" height="5.51"/>
<rect x="14.5" y="9.405" fill={strokeColor} width="4.37" height="5.51"/>
<rect x="5.519" y="15.058" fill={strokeColor} width="4.481" height="5.509"/>
      </svg>
    )
  }
}