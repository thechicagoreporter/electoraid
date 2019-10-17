import React, { Component } from "react"
import { navigate } from "gatsby"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"

const Form = styled.form`
    width: 100%;
    margin-bottom: 0;
    p {
      font-size: 1rem;
      line-height: 1.4;
      margin-bottom: 2rem;
      font-style: italic;
    }
`

const FormContain = styled.div`
    padding: 1.4rem;
    width: 100%;
    background-color: #fff;
    max-width: 900px;
    margin: 0 auto;
`

const Input = styled.input`
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px 5px 5px 5px; 
    padding: .5rem 1rem; 
    font-size: 1rem;
    margin-bottom: 2.5rem;
    margin-top: .5rem;
`

const Textarea = styled.textarea`
    display: block;
    width: 100%;
    height: 15vh;
    border: 1px solid #ccc;
    border-radius: 5px 5px 5px 5px; 
    padding: .5rem 1rem; 
    font-size: 1rem;
    margin-bottom: 2.5rem;
    margin-top: .5rem;
`

const Label = styled.label`
    display: block;    
    font-size: 1rem;
    font-weight: 600;
`

const InstructionLabel = styled.label`
    display: block;    
    font-size: .8rem;
    font-weight: 400;
`

const Button = styled.button`
  display: block;
  padding: .5rem;
  background-color: rgb(147,242,5);
  color: rgba(79,2,89,1);
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 5px 5px 5px 5px; 
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

class QuestionnaireForm extends Component {
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

  // handleSubmit = e => {
  //   e.preventDefault()
  //   const form = this.ContactForm.current
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: this.encode({
  //       "form-name": form.getAttribute("name"),
  //       ...this.state,
  //     }),
  //   })
  //     .then(response => {
  //       navigate(`/questionnaire?email=${this.state.email}`)
  //     })
  //     .catch(error => {
  //       console.log("====================================")
  //       console.log(`error in submiting the form data:${error}`)
  //       console.log("====================================")
  //     })
  // }

  render() {
    const { intl } = this.props

    return (
      <Form
        name="electoraid-questionnaire"
        method="post"
        action="/signup-success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        ref={this.ContactForm}
      >
        <input type="hidden" name="form-name" value="electoraid-questionnaire" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>

        <FormContain>

          <p><FormattedMessage id="questionnaireform.intro"/></p>
          
          <Label for="email"><FormattedMessage id="questionnaireform.email.label" /></Label>
          <InstructionLabel for="email"><FormattedMessage id="questionnaireform.email.instructions" /></InstructionLabel>
          <Input type="email" name="email" placeholder={intl.formatMessage({id: "questionnaireform.email.placeholder"})}></Input>

          <Label for="name"><FormattedMessage id="questionnaireform.name.label" /></Label>
          <InstructionLabel for="name"><FormattedMessage id="questionnaireform.name.instructions" /></InstructionLabel>
          <Input type="text" name="name" placeholder={intl.formatMessage({id: "questionnaireform.name.placeholder"})}></Input>

          <Label for="company"><FormattedMessage id="questionnaireform.company.label" /></Label>
          <InstructionLabel for="company"><FormattedMessage id="questionnaireform.company.instructions" /></InstructionLabel>
          <Input type="text" name="company" placeholder={intl.formatMessage({id: "questionnaireform.company.placeholder"})}></Input>

          <Label for="referral"><FormattedMessage id="questionnaireform.referral.label" /></Label>
          <Textarea name="referral"></Textarea>

          <Button type="submit"><FormattedMessage id="questionnaireform.submit"/></Button>
        </FormContain>
      </Form>
    )
  }
}
export default injectIntl(QuestionnaireForm)