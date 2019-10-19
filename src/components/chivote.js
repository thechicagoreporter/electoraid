import React from "react"
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'

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

const PromoLink = styled.p`
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;

    a {
        color: #A904BF;
        text-decoration: none;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        &:hover {
            color: #000;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
    }
`

const ChiVote = () => {
    return (
        <OldApp>
            <TwoCol>
                <img src={require('../images/chi-vote-site-animation-2.gif')} />
                <div>
                    <h2><FormattedMessage id="chivote.hed" /></h2>
                    <p><FormattedHTMLMessage id="chivote.description" /></p>
                    <PromoLink><FormattedHTMLMessage id="chivote.links" /></PromoLink>
                </div>
            </TwoCol>
        </OldApp>
    )
}

export default ChiVote
