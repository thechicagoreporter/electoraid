import React from "react"
import styled from 'styled-components'
import { FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"

const FullHero = styled.section`
    background: rgba(79,2,89,1);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    h1 {
        margin: 0 auto;
        text-align: center;
        width: 100%;
    }
    h3 {
        margin: 20px auto;
        text-align: center;
        width: 100%;
    }
`

const Contain = styled.div`
    padding: 0 5vw;
`

const Message = styled.div`
    a {
        color: #fff;
        font-weight: 700;
    }
`

const Input = styled.div`
    margin: 60px auto 0 auto;
    width: 60%;


    a {
        text-decoration: none;

    }

    h4 {
        color: rgb(147,242,5);
        font-size: 22px;
        margin: 0 auto 1.5rem auto;
        text-align: center;
        width: 100%;
    }

    @media (max-width: 680px) {
        width: 100%;
      }
`

const LogoImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 50%;
    padding-bottom: 2rem;

    @media (max-width: 530px) {
        width: 90%;
      }
`

const Confirm = () => {
    return (
        <FullHero>
                <Contain>
                    <a href="/"><LogoImg src={require('../images/electoraid-logo-white.png')} /></a>
                    <Message><FormattedHTMLMessage id="confirmation.message" /></Message>
                    <Input>
                        <a href="/"><h4><FormattedMessage id="confirmation.backlink" /></h4></a>
                    </Input>
                </Contain>
        </FullHero>
    )
}

export default Confirm