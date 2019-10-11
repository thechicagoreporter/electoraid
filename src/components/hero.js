import React from "react"
import styled from 'styled-components'
import Form from '../components/netlifyform.js'

const FullHero = styled.section`
    background: rgba(79,2,89,1);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
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

const Input = styled.div`
    margin: 60px auto 0 auto;
    width: 60%;

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

const Hero = () => {
    return (
        <FullHero>
                <Contain>
                    <LogoImg src={require('../images/electoraid-logo-white.png')} />
                    <h1>Your newsroom’s interactive and collaborative election guide</h1>
                    <h3>Leverage elections to augment local government accountability.</h3>
                    <Input>
                        <h4>Unclutter your election coverage strategy.</h4>
                        <Form />
                    </Input>
                </Contain>
        </FullHero>
    )
}

export default Hero