import React from 'react';

export default class ProfIC extends React.Component {
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
<path fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
  M21.646,22.677H2.354c0.464-3.803,2.397-6.654,4.705-6.654h9.882C19.249,16.022,21.182,18.874,21.646,22.677z"/>
<path fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
  M17.019,8.806c0,2.815-2.282,5.097-5.097,5.097l0,0c-2.815,0-5.098-2.282-5.098-5.097V6.419c0-2.815,2.282-5.097,5.098-5.097l0,0
  c2.815,0,5.097,2.282,5.097,5.097V8.806z"/>
      </svg>
    )
  }
}