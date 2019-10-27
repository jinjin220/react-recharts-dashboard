import React,{Component} from 'react';
import Navigation from '../Navigation';
import { Container, Row, Col} from 'reactstrap';

export default class Tickets extends Component {
  render() {
    return (
  <div className={this.props.collapsed? 'page-container collapsed': 'page-container'}>
      <Navigation />
      <div className="main-content">
  	    <Container-fluid>
  	      <h2>Tickets</h2>
  	    </Container-fluid>
  	  </div>
   </div>)}
}