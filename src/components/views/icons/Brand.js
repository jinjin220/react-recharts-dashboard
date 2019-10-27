import React from 'react';

export default class Brand extends React.Component {
  render() {
    var strokeColor = this.props.strokeColor;
    return (
      <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
         <circle fill="none" stroke="#FFFFFF" strokeWidth="2.8308" strokeMiterlimit="10" cx="11.105" cy="43.203" r="2.907"/>
<circle fill="none" stroke="#FFFFFF" strokeWidth="2.8308" strokeMiterlimit="10" cx="39.954" cy="35.603" r="2.907"/>
<circle fill="none" stroke="#FFFFFF" strokeWidth="2.8308" strokeMiterlimit="10" cx="10.483" cy="13.209" r="2.906"/>
<circle fill="none" stroke="#FFFFFF" strokeWidth="2.8308" strokeMiterlimit="10" cx="39.333" cy="5.61" r="2.906"/>
<line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="10.329" y1="16.307" x2="10.826" y2="40.302"/>
<line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="39.178" y1="8.707" x2="39.675" y2="32.702"/>
<line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="12.698" y1="15.078" x2="37.427" y2="34.18"/>
      </svg>
    )
  }
}