import React, { Component } from "react"
import queryString from 'query-string'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"
import Select from "react-select"

// @TODO these strings should be translated
const ROLES = [
  { value: "product manager", label: "Product Manager" },
  { value: "executive editor", label: "Executive Editor" },
  { value: "managing editor", label: "Managing Editor" },
  { value: "digital editor", label: "Digital Editor or Producer" },
  { value: "designer", label: "Designer" },
  { value: "engineer", label: "Engineer/Developer" },
  { value: "other", label: "Other" },
]

const SIZES = [
  { value: "1 - 5", label: "1 - 5" },
  { value: "5 - 10", label: "5 - 10" },
  { value: "more than 10", label: "More than 10" },
]

const GOALS = [
  { values: "no plans", label: "We don't have one" },
  { values: "another vendor", label: "We are currently working with another vendor" },
  { values: "build own", label: "We build our own interactive guide with an in-house team" },
]

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
    max-width: 700px;
    margin: 0 auto;
`

const SelectWrapper = styled.div`
    margin-bottom: 2.5rem;
    margin-top: .5rem;
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
  font-size: 24px;
  font-weight: 700;
  border: none;
  border-radius: 5px 5px 5px 5px; 
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  margin-bottom: 3rem;
  
  &:hover {
    background-color:#A904BF;
    color: #fff;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  }
  @media (max-width: 1100px) {
    font-size: 18px;
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

  componentDidMount() {
    const parsed = queryString.parse(window.location.search)
    this.setState({ email: (parsed.email || "") })
  }

  render() {
    const { intl } = this.props
    const { email } = this.state

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
          <Input required type="email" name="email" value={email} onChange={this.handleChange} placeholder={intl.formatMessage({id: "questionnaireform.email.placeholder"})}></Input>

          <Label for="name"><FormattedMessage id="questionnaireform.name.label" /></Label>
          <InstructionLabel for="name"><FormattedMessage id="questionnaireform.name.instructions" /></InstructionLabel>
          <Input required type="text" name="name" placeholder={intl.formatMessage({id: "questionnaireform.name.placeholder"})}></Input>

          <Label for="company"><FormattedMessage id="questionnaireform.company.label" /></Label>
          <InstructionLabel for="company"><FormattedMessage id="questionnaireform.company.instructions" /></InstructionLabel>
          <Input required type="text" name="company" placeholder={intl.formatMessage({id: "questionnaireform.company.placeholder"})}></Input>

          <Label for="role"><FormattedMessage id="questionnaireform.role.label" /></Label>
          <InstructionLabel for="company"><FormattedMessage id="questionnaireform.role.instructions" /></InstructionLabel>
          <SelectWrapper><Select isSearchable={false} options={ROLES} isMulti={true} /></SelectWrapper>
          
          <Label for="size"><FormattedMessage id="questionnaireform.size.label" /></Label>
          <InstructionLabel for="company"><FormattedMessage id="questionnaireform.size.instructions" /></InstructionLabel>
          <SelectWrapper><Select isSearchable={false} options={SIZES} /></SelectWrapper>

          <Label for="goals"><FormattedMessage id="questionnaireform.goals.label" /></Label>
          <InstructionLabel for="company"><FormattedMessage id="questionnaireform.goals.instructions" /></InstructionLabel>
          <SelectWrapper><Select isSearchable={false} options={GOALS} /></SelectWrapper>
          
          <InstructionLabel for="goalsdescription"><FormattedMessage id="questionnaireform.goalsdescription.instructions" /></InstructionLabel>
          <Textarea name="goalsdescription"></Textarea>
          
          <Label for="schedule"><FormattedMessage id="questionnaireform.schedule.label" /></Label>
          <InstructionLabel for="schedule"><FormattedMessage id="questionnaireform.schedule.instructions" /></InstructionLabel>
          <Textarea name="schedule"></Textarea>
          
          <Label for="referral"><FormattedMessage id="questionnaireform.referral.label" /></Label>
          <Textarea name="referral"></Textarea>

          <Button type="submit"><FormattedMessage id="questionnaireform.submit"/></Button>
        </FormContain>
      </Form>
    )
  }
}
export default injectIntl(QuestionnaireForm)