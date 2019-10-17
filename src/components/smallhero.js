import React from "react"
import styled from 'styled-components'
import { FormattedMessage } from 'gatsby-plugin-intl'

const FullHero = styled.section`
    background: rgba(79,2,89,1);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    h1 {
        margin: 0 auto;
        text-align: center;
        width: 100%;
        font-size: 22px;
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

const LogoImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 50%;
    max-width: 600px;
    padding-bottom: 2rem;

    @media (max-width: 530px) {
        width: 90%;
    }
`

const Hero = () => {
    return (
        <FullHero>
                <Contain>
                    <a href="/"><LogoImg src={require('../images/electoraid-logo-white.png')} /></a>
                    <h1><FormattedMessage id="hero.hed" /></h1>
                </Contain>
        </FullHero>
    )
}

export default Hero