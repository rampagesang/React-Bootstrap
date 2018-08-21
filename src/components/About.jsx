import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="assets/person-1.jpg"
              className="about-profile-pic"
              rounded
            />
            <h3>Frank the Tank</h3>
            <p>
              A major key, never panic. Don’t panic, when it gets crazy and
              rough, don’t panic, stay calm. Special cloth alert. Let’s see what
              Chef Dee got that they don’t want us to eat. Eliptical talk.
              Eliptical talk. Life is what you make it, so let’s make it. The
              weather is amazing, walk with me through the pathway of more
              success. Take this journey with me, Lion! Always remember in the
              jungle there’s a lot of they in there, after you overcome they,
              you will make it to paradise. The first of the month is coming, we
              have to get money, we have no choice. It cost money to eat and
              they don’t want you to eat.
            </p>
            <p>
              They key is to have every key, the key to open every door. Hammock
              talk come soon. How’s business? Boomin. They don’t want us to win.
              Special cloth alert. Cloth talk. Give thanks to the most high. Egg
              whites, turkey sausage, wheat toast, water. Of course they don’t
              want us to eat our breakfast, so we are going to enjoy our
              breakfast. Give thanks to the most high. In life you have to take
              the trash out, if you have trash in your life, take it out, throw
              it away, get rid of it, major key.
            </p>
            <p>
              Special cloth alert. The first of the month is coming, we have to
              get money, we have no choice. It cost money to eat and they don’t
              want you to eat. They don’t want us to win. Special cloth alert.
              They key is to have every key, the key to open every door. Hammock
              talk come soon. We the best. Hammock talk come soon. They don’t
              want us to win. We don’t see them, we will never see them. Fan
              luv. The other day the grass was brown, now it’s green because I
              ain’t give up. Never surrender.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}
