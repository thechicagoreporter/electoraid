import React from "react"
import styled from 'styled-components'
import img from '../images/back-test.jpg';

const UnitOne = styled.section`
    background: url(${img});
    width: 100%;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
    font-family: sans-serif;
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
    background: rgba(205, 1, 1, .8);
    color: #fff;
    width: 100%;
    padding: 2rem;
    margin: 0px;
    overflow: hidden;
    height: 100%;
    z-index: 2;
`

const ColorWhite = styled.div`
    background: rgba(255,255,255, .8);
    color: #000;
    width: 100%;
    padding: 2rem;
    margin: 0px;
    overflow: hidden;
    height: 100%;
    z-index: 2;
`

const PromoButton = styled.a`
    padding: 8px 12px;
    background-color: #fff;
    color: #0D5C00;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    border-radius: 5px;
    text-decoration: none;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        background-color:#00B227;
        color: #fff;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    }
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