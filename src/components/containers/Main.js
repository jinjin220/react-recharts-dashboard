import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import {Dashboard, Tickets, Profile, Settings} from '.././views';

export default class Main extends Component {
  render() {
  	return(
	    <main>
	      <Switch>
	        <Route exact path="/" render={(props) => (
	        	<Dashboard {...props} collapsed={this.props.collapsed} />
	        	)}/>

	        <Route exact path="/tickets" render={(props) => (
	        	<Tickets {...props} collapsed={this.props.collapsed} />
	        	)}/>
	        
	        <Route exact path="/profile" render={(props) => (
	        	<Profile {...props} collapsed={this.props.collapsed} />
	        )}/>
	        <Route exact path="/settings" render={(props) => (
	        	<Settings {...props} collapsed={this.props.collapsed} />
	        )}/>
	      </Switch>
	    </main>
  	);
  }
}