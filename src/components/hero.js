import React from "react"
import styled from 'styled-components'
import img from '../images/back-test.jpg';

const FullHero = styled.section`
    background: url(${img});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    h1 {
        margin: 0 auto;
        text-align: center;
        width: 80%;
    }
`

const Color = styled.div`
    background: rgba(0,103,177,.7);
    color: #fff;
    width: 100%;
    padding: -20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 2;
`

const LogoImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 50%;
    padding-bottom: 1rem;

    @media (max-width: 530px) {
        width: 90%;
      }
`

const Hero = () => {
    return (
        <FullHero>
            <Color>
                <div>
                    <LogoImg src={require('../images/electoraid-logo-white.png')} />
                    <h1>Electoraid is the latest election coverage tool <br/> by The Chicago Reporter for... </h1>
                </div>
            </Color>
        </FullHero>
    )
}

export default Hero