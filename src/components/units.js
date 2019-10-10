import React from "react"
import styled from 'styled-components'
import img from '../images/back-test.jpg';

const UnitOne = styled.section`
    background: url(${img});
    width: 100%;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    min-height: 300px;

    @media (max-width: 530px) {
        grid-template-columns: 1fr;
    }
`

const Sub = styled.h2`
    font-size: 1.3rem;
`

const Promo = styled.p`
    font-size: 1.1rem;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
`

const LogoImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 30%;

    @media (max-width: 530px) {
        width: 90%;
      }
`

const ColorRed = styled.div`
    background: rgba(205, 1, 1, 1);
    color: #fff;
    width: 100%;
    padding: 2rem;
    margin: 0px;
    overflow: hidden;
    height: 100%;
    z-index: 2;
`

const ColorWhite = styled.div`
    background: rgba(255,255,255, 1);
    color: #000;
    width: 100%;
    padding: 2rem;
    margin: 0px;
    overflow: hidden;
    height: 100%;
    z-index: 2;
`

const Unit = () => {
    return (
        <Grid>
            <UnitOne>
                <ColorRed>
                    <div>
                        <Sub>Build access, build trust.</Sub>
                        <Promo>Create tools together, deepen the value of politics reporting.</Promo>
                    </div>
                </ColorRed>
            </UnitOne>
            <UnitOne>
                <ColorWhite>
                    <div>
                        <Sub>Collaborate with other media outlets.</Sub>
                        <Promo>Create tools together, deepen the value of politics reporting.</Promo>
                    </div>
                </ColorWhite>
            </UnitOne>
            <UnitOne>
                <ColorRed>
                    <div>
                        <Sub>Build trust.</Sub>
                        <Promo>Create tools together, deepen the value of politics reporting.</Promo>
                    </div>
                </ColorRed>
            </UnitOne>
        </Grid>
    )
}

export default Unit