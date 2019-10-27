import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Container, Row, Col} from 'reactstrap';
import LineCharts from './LineCharts';
import PieCharts from './PieCharts';
import DropDownList from './DropDownList';
import SettingsList from './SettingsList';
import TinyChart from './TinyChart';
import Progress from './Progress';


export default class Dashboard extends Component {
  
  render() {
  	
    return (
      <div className={this.props.collapsed? 'page-container collapsed': 'page-container'}>
      <Navigation />
      <div className="main-content">
  			<Container fluid={true}>
  				<Row>
  					<Col sm="12" md="12" lg="6">
  						<strong>Cool Dashboard Analytics</strong>
  						<div className="card linechart">
  							<div className="card-top">
  								<DropDownList name="Net Sales"/>
                  <SettingsList />
  							</div>
  							<div className="card-mid">
  								<div className="data-container">
      							<div className="current-data">
        							<p className="stat">This week:</p>
        							<p className="stat-data current">$2300</p>
        						</div>
        						<div className="previous-data">
        							<p className="stat">Previous week:</p>
        							<p className="stat-data previous">$7500</p>
      							</div>
          				</div>
  							</div>
  							<LineCharts/>
  						</div>
  					</Col>

  					<Col sm="12" md="6" lg="3">
  						<strong>How many ticket sold?</strong>
  						<div className="card pie">
                <div className="card-top">
                  <DropDownList name="Ticket Sales"/>
                  <SettingsList />
                </div>
                <div className="pie-wrapper">
                  <div className="pie-center">
                    <div className="sold-data">
                      <p className="stat">Sold Tickets</p>
                      <p><span className="stat-data">180</span><span className="total">/ 300</span></p>
                    </div>
                  </div>
      						<PieCharts primColor="#4562ec"/>
                </div>
    						<div className="data-container">
    							<div className="gross-data">
    							<p className="stat">Gross</p>
    							<p className="stat-data gross">$2300</p>
    							</div>
    							<div className="online-data">
    							<p className="stat">Online</p>
    							<p className="stat-data online">$7500</p>
    							</div>
    						</div>
  						</div>
  					</Col>

  					<Col sm="12" md="6" lg="3">
  					  <strong>Tips</strong>
  						<Row>
  							<Col sm="12">
                  <div className="card blue">
                    <DropDownList name="Gross"/>
                    <TinyChart stroke="#ffffff"/>
                    <p><strong>Tip: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    							</div>
                </Col>
  							<Col sm="12">
                  <div className="card">
                    <DropDownList name="Online"/>
                    <TinyChart stroke="#6a8291"/>
                  </div>
                </Col>
  						</Row>
  					</Col>
  				</Row>

  				<Row>
            <Col sm="12" md="12" lg="6">
              <div className="card linechart">
                <div className="card-top">
                  <DropDownList name="Recent Purchases"/>
                  <SettingsList />
                </div>
                <div className="card-mid">
                  <div className="data-container">
                    <div className="current-data">
                      <p className="stat">This week:</p>
                      <p className="stat-data current">$2300</p>
                    </div>
                    <div className="previous-data">
                      <p className="stat">Previous week:</p>
                      <p className="stat-data previous">$7500</p>
                    </div>
                  </div>
                </div>
                <LineCharts/>
              </div>
            </Col>

            <Col sm="12" md="6" lg="3">
              <div className="card pie">
              <div className="card-top">
                  <DropDownList name="Goals"/>
                  <SettingsList />
              </div>
              <div className="pie-wrapper">
                <div className="pie-center">
                  <div className="goal-data">
                    <p className="stat">Sold Totoal</p>
                    <p><span className="stat-data">180</span><span className="goal">/ 250</span></p>
                  </div>
                </div>
                <PieCharts primColor="#49e8c2"/>
              </div>
                <div className="center-pie-data">
                      </div>
                      <div className="data-container">
                        <div className="gross-data">
                        <p className="stat">Event Goal</p>
                        <p className="stat-data gross">250</p>
                        </div>
                        <div className="online-data">
                        <p className="stat">Sold Tickets</p>
                        <p className="stat-data online">180</p>
                        </div>
                      </div>
              </div>
            </Col>

            <Col sm="12" md="6" lg="3">
              <Row>
                <Col sm="12"><div className="card">
                  <p className="stat">Sent Email</p>
                  <Progress height={8} value="1000" max="2000" color="#4562ec" />
                  <p className="stat">CTA Clicks</p>
                  <Progress height={8} value="500" max="2000" color="#49e8c2" />
                  </div>
                </Col>
                <Col sm="12">
                  <div className="card grey">
                    <DropDownList name="Email"/>
                    <TinyChart stroke="#ffffff"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
  			</Container>
        </div>
        </div>
    );
  }
}