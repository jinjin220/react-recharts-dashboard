import React from 'react';
import { Link} from 'react-router-dom';
import { Nav, NavItem, Collapse} from 'reactstrap';

import FA from 'react-fontawesome';
import DashIC from './icons/DashIC';
import ProfIC from './icons/ProfIC';
import TickIC from './icons/TickIC';
import SettIC from './icons/SettIC';
import Brand from './icons/Brand';

export default class Sidebar extends React.Component {

  handleArrowClick(e){

  }
  
  render() {
    
    return (
      <div className={this.props.collapsed? 'sidenav-container collapsed': 'sidenav-container'}>
        <div className="nav-top">
          <div className={this.props.collapsed? 'brand collapsed': 'brand'}>
            <Brand className="brand-img"/>
          </div>
        </div>

        <div className="usernav">
          <Nav vertical>

            <NavItem>
              <Link to="/">
              <div className="md-icon av">
               <div className="avatar">
                <img src="img/seniordev-sm.jpeg" alt="user"/>
                </div>
              </div>
                <div className="nav-item-title">Dream W.</div>
              </Link>
              <div className="nav-pill">
              1
              </div>
            </NavItem>

            <NavItem>
              <Link to="/">
                 <div className="md-icon">
                  <FA 
                  name="bell"
                  />
                </div>
                <div className="nav-item-title">Notifications</div>
              </Link>
              <div className="nav-pill">
              3
              </div>
            </NavItem>

          </Nav>
        </div>

        <div className="sidenav">

        <Nav vertical>

          <NavItem className="active">
            <Link to="/">
               <div className="md-icon">
                <DashIC strokeColor="#ffffff"/>
              </div>
              Dashboard
            </Link>
          </NavItem>

          <NavItem id="tickets">
             <Link to="/tickets">
               <div className="md-icon">
                <TickIC strokeColor="#ffffff"/>
              </div>
              Tickets
            </Link>
             
          </NavItem>
          <NavItem>
            <Link to="/profile">
              <div className="md-icon">
                <ProfIC strokeColor="#ffffff"/>
              </div>
              Profile
            </Link>
          </NavItem>

          <NavItem>
            <Link to="/Settings">
              <div className="md-icon">
                <SettIC strokeColor="#ffffff"/>
              </div>
              Settings
            </Link>
          </NavItem>
          
        </Nav>
        </div>

        <div className="nav-bottom">
            <button onClick={this.props.handleCollapse}> 
              <FA 
              name={this.props.collapsed? 'angle-left rotate': 'angle-left'}
              size="2x"
              />
            </button>
          </div>
      </div>
    );
  }
}
