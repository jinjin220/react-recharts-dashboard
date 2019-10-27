import React from 'react';

export default class DashIC extends React.Component {
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
         <path fill="none" stroke={strokeColor} strokeWidth="1.6" strokeMiterlimit="10" d="M22.936,15.605c0,1.067-0.154,2.097-0.445,3.071
  H1.612c-0.29-0.975-0.445-2.004-0.445-3.071c0-6.009,4.87-10.879,10.883-10.879C18.059,4.726,22.936,9.597,22.936,15.605z"/>
<path fill="none" stroke={strokeColor} strokeWidth="1.6" strokeMiterlimit="10" d="M14.65,18.677h-5.2
  c-0.022-0.085-0.045-0.17-0.061-0.259c-0.274-1.47,0.696-2.885,2.166-3.155c1.47-0.275,2.886,0.696,3.156,2.164
  C14.793,17.857,14.768,18.284,14.65,18.677z"/>
<line fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="13.189" y1="15.289" x2="16.414" y2="9.75"/>
<circle fill={strokeColor} cx="4.23" cy="15.215" r="1.064"/>
<circle fill={strokeColor} cx="19.756" cy="15.215" r="1.064"/>
<circle fill={strokeColor} cx="12.051" cy="7.909" r="1.064"/>
      </svg>
    )
  }
}
