import React, { Component } from "react"
import { navigate } from "gatsby"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"

const Form = styled.form`
    width: 100%;
    margin-bottom: 0;

    label {
        display: block;
        font-size: 1.4rem;
        font-weight: 600;
    }
`

const FormContain = styled.div`
    display: flex;
    margin: 0 auto;
    width: 100%;
    @media (max-width: 680px) {
      width: 100%;
    }
`

const Input = styled.input`
    width: 90%;
    border: none;
    border-radius: 5px 0px 0px 5px; 
    padding: .5rem 1rem; 
    font-size: 1rem;
`

const Button = styled.button`
  padding: .5rem;
  background-color: rgb(147,242,5);
  color: rgba(79,2,89,1);
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 0px 5px 5px 0px; 
  width: 60%;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  
  &:hover {
    background-color:#A904BF;
    color: #fff;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  }
  @media (max-width: 1100px) {
    font-size: 14px;
    width: 100%;
  }
`

class SplashForm extends Component {
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
        const email = encodeURIComponent(this.state.email)
        navigate(`/questionnaire?email=${email}`)
      })
      .catch(error => {
        console.log("====================================")
        console.log(`error in submiting the form data:${error}`)
        console.log("====================================")
      })
  }
  render() {
    const { intl } = this.props

    return (
      <Form
        name="electoraid-contacts"
        method="post"
        action="/questionnaire"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        ref={this.ContactForm}
      >
        <input type="hidden" name="form-name" value="electoraid-contacts" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>

        <FormContain>
          <Input type="email" name="email" placeholder={intl.formatMessage({ id: 'subscribeform.placeholder'})} onChange={this.handleChange} required/>
          <Button type="submit"><FormattedMessage id="subscribeform.submit"/></Button>
        </FormContain>
      </Form>
    )
  }
}
export default injectIntl(SplashForm)