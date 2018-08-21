import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Heart Free Screening</h2>
          <p>
            {" "}
            This is how to build a website with Rreact, React-Router &
            React-Boostrap
          </p>
          <Link to="/about">
            <Button bsStyle="primary"> About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-6.jpg" circle className="profile-pic" />
            <h3>Sang</h3>
            <p>
              Let me be clear, you have to make it through the jungle to make it
              to paradise, that’s the key, Lion! You do know, you do know that
              they don’t want you to have lunch. I’m keeping it real with you,
              so what you going do is have lunch. Cloth talk. Wraith talk.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-4.jpg" circle className="profile-pic" />
            <h3>Riff</h3>
            <p>
              Stay focused. Look at the sunset, life is amazing, life is
              beautiful, life is what you make it. Look at the sunset, life is
              amazing, life is beautiful, life is what you make it. You smart,
              you loyal, you a genius..
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-5.jpg" circle className="profile-pic" />
            <h3>Snoop</h3>
            <p>
              We the best. Wraith talk. To be successful you’ve got to work
              hard, to make history, simple, you’ve got to make it. You smart,
              you loyal, you a genius. In life you have to take the trash out,
              if you have trash in your life, take it out, throw it away, get
              rid of it, major key. Stay focused.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
