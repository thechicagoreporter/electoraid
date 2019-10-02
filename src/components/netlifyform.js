import React, { Component } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const Form = styled.form`
    width: 100%;
    text-align: center;

    label {
        display: block;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 20px;
    }
`

const Input = styled.input`
    text-align: center;
    margin-top: 10px;
    width: 100%;
    padding: .5rem; 
    font-size: 1rem;
`

const Button = styled.button`
  padding: 14px 14px;
  background-color: rgba(0,103,177,1);
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  width: 60%;
  
  &:hover {
    background-color:#000;
    color: #fff;
  }
  @media (max-width: 1100px) {
    font-size: 14px;
    width: 100%;
  }
`

class RemoteForm extends Component {
  constructor(props) {
    super(props)
    this.ContactForm = React.createRef()
    this.state = {}
  }
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = this.ContactForm.current

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(response => {
        console.log("====================================")
        console.log(`${JSON.stringify(response, null, 2)}`)
        console.log("====================================")
        navigate(form.getAttribute("action"))
      })
      .catch(error => {
        console.log("====================================")
        console.log(`error in submiting the form data:${error}`)
        console.log("====================================")
      })
  }
  render() {
    return (
      <Form
        name="contact-remote"
        method="post"
        action="/newsletter-success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        ref={this.ContactForm}
      >
        <input type="hidden" name="form-name" value="contact-remote" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your email address
            <br />
            <Input type="email" name="email" placeholder="your-name@example.com" onChange={this.handleChange} required/>
          </label>
        </p>
        <Button type="submit">Subscribe</Button>
      </Form>
    )
  }
}
export default RemoteForm