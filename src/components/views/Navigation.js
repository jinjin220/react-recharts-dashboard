import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import FA from 'react-fontawesome';

 export default class Navigation extends React.Component {
 	constructor(props) {
 		super(props);

 		this.toggle = this.toggle.bind(this);
 		this.state = {
 			isOpen: false
 		};
 	}
 	toggle() {
 		this.setState({
 			isOpen: !this.state.isOpen
 		});
 	}
 	render(){
 		return(
     	<div className="App-header">
            <Navbar color="faded" light expand="md">
              
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#">
                     <FA name="search"/>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#"><FA name="bell"/></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><div className="avatar"><img src="img/seniordev-sm.jpeg"/></div></NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav caret>
                      Dreamweaver
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
        </div>
 		);
 	}
 }