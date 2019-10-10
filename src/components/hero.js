import React from "react"
import styled from 'styled-components'
import Form from '../components/simpleform.js'

import img from '../images/flag-back.jpg';

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
        width: 100%;
    }
    h3 {
        margin: 20px auto;
        text-align: center;
        width: 100%;
    }
`

const Input = styled.div`
    margin-top: 60px;

    h4 {
        color: rgb(147,242,5);
        font-size: 22px;
        margin: 0 auto;
        text-align: center;
        width: 100%;
    }
`

const Color = styled.div`
    background: rgba(79,2,89,1);
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
                    <h1>Your newsroom’s interactive and collaborative election guide</h1>
                    <h3>Leverage elections to augment local government accountability.</h3>
                    <Input>
                        <h4>Unclutter your election coverage strategy.</h4>
                        <Form />
                    </Input>
                </div>
            </Color>
        </FullHero>
    )
}

export default Hero