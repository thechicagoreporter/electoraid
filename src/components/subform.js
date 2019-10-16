import React from "react"
import styled from 'styled-components'
import Form from '../components/netlifyform.js'
import { FormattedMessage } from 'gatsby-plugin-intl'

const Sub = styled.section`
    background: rgba(79,2,89,1);
    padding: 3rem 0;
    width: 100%;
`

const Contain = styled.div`
    margin: 0 auto;
    width: 80%;

    @media (max-width: 680px) {
        width: 90%;
    }
`

const TwoCol = styled.div`
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 0px 0px;

    h2 {
        font-size: 1.2rem;
        font-weight: 900;
        margin: .5rem 0 0 0;
    }

    @media (max-width: 900px) {
        h2 {
            font-size: 1rem;
            margin: 0;
        }
    }

    @media (max-width: 680px) {
        grid-template-columns: 1fr;

        h2 {
            text-align: center;
        }
    }
`

const SubForm = () => {
    return (
        <Sub>
            <Contain>
                <TwoCol>
                    <div>
                        <h2><FormattedMessage id="subform.signup" /></h2>
                    </div>
                    <div>
                        <Form />
                    </div>
                </TwoCol>
            </Contain>
        </Sub>
    )
}

export default SubForm