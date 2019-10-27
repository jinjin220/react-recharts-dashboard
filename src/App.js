import React, { Component } from 'react';
import SideNav from './components/views/SideNav';
import Main from './components/containers/Main';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.updateDemensions = this.updateDemensions.bind(this);
    this.handleResizeCollapse = this.handleResizeCollapse.bind(this);
    this.state = {
      collapsed: false
    };
  }

  handleCollapse(){
    this.setState({collapsed: !this.state.collapsed});
  }

  handleResizeCollapse(){
  	if(this.state.width < '1260'){
    	this.setState({collapsed: true});
	}else if(this.state.width > '1260'){
		this.setState({collapsed: false});
	}
  }

  updateDemensions(){
  	var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        this.handleResizeCollapse();
  }

  componentDidMount() {
  	window.addEventListener("resize", this.updateDemensions);
  }

  render() {
		return (
			<div className="wrapper">
			    <SideNav collapsed={this.state.collapsed} handleCollapse={this.handleCollapse}/>
			    <Main collapsed={this.state.collapsed}/>
		    </div>
		);
	}
}

export default App;
