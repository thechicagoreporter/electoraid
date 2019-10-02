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
                        <Sub>It’s for journalists, by journalists</Sub>
                        <Promo>We wanted to build the most optimal solution for informing, engaging, and educating the public on the elections happening in their backyard and nationwide.</Promo>
                    </div>
                </ColorRed>
            </UnitOne>
            <UnitOne>
                <ColorWhite>
                    <div>
                        <Sub>Built by experts on election coverage</Sub>
                        <Promo>The Chicago Reporter prides itself on its award-winning investigative data journalism and expertise. We know how to read the data. We know how to make it easy for our audiences to understand the data, too.</Promo>
                    </div>
                </ColorWhite>
            </UnitOne>
            <UnitOne>
                <ColorRed>
                    <div>
                        <Sub>It has an open API so we can connect other sources of local data to make it richer</Sub>
                        <Promo>We want to build with you! The more nerds the merrier. We’re always looking to make our tools better that can work for you and your audiences.</Promo>
                    </div>
                </ColorRed>
            </UnitOne>
        </Grid>
    )
}

export default Unit