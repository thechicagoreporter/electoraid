import React from "react"
import styled from 'styled-components'
import { FormattedMessage } from 'gatsby-plugin-intl'

const OldApp = styled.section`
    border-top: 10px solid #93F205;
    margin: 0 auto;
    width: 80%;   
`

const TwoCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    padding: 50px 0;

    @media (max-width: 680px) {
        width: 100%;
        padding: 4rem 0;

        grid-template-columns: 1fr;
    }
`

const PromoLink = styled.a`
    color: #A904BF;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        color: #000;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    }
`

const ChiVote = () => {
    return (
        <OldApp>
            <TwoCol>
                <img src={require('../images/back-test.jpg')} />
                <div>
                    <h2><FormattedMessage id="chivote.hed" /></h2>
                    <p><FormattedMessage id="chivote.description"/></p>
                    <PromoLink><FormattedMessage id="chivote.link" /></PromoLink>
                </div>
            </TwoCol>
        </OldApp>
    )
}

export default ChiVote