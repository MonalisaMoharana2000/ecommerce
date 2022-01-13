import React from "react";

import styled from "styled-components";
const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/businessman-touching-icon-mobile-phone-mail-telephone-and-address-picture-id1153130142?k=20&m=1153130142&s=612x612&w=0&h=DWIC-H0piTNxyYHYrpGnxZ0PCBs05HzeViF_nRxsJ2Y=")
      center;
  background-size: cover;
`;

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubject = (event) => {
    this.setState({
      subject: event.target.value,
    });
  };
  handleMessage = (event) => {
    this.setState({
      Message: event.target.value,
    });
  };
  handleClick = () => {
    this.setState({
      name: Event.target.value,
      email: Event.target.value,
      subject: Event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Container style={{ padding: "1.5em", fontSize: "20px" }}>
          <h1 style={{ textAlign: "center" }}>
            <u>Get in touch with US</u>
          </h1>
          <p class="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5" style={{ margin: "auto" }}>
              <form id="contact-form" name="contact-form" action="contact.php" method="POST">
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input type="text" placeholder="Enter name" name="name" class="form-control" onChange={this.handleName}/>
                      <label for="name" class="">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        placeholder="Enter email"
                        class="form-control"
                        name="email"
                        onChange={this.handleEmail}
                      />
                      <label for="email" class="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        placeholder="Enter your country"
                        class="form-control"
                        name="country"
                        onChange={this.handleSubject}
                      />
                      <label for="subject" class="">
                        Country
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        placeholder="Your message"
                        class="form-control md-textarea"
                        onChange={this.handleMessage}
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
                <div class="text-center text-md-left">
                  <a
                    class="btn btn-primary col-md-2"
                    style={{ fontSize: 23, fontWeight: "bold" }}
                    onClick={this.handleClick}
                  >
                    Send
                  </a>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
