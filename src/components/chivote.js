import React from "react"
import styled from 'styled-components'

const OldApp = styled.section`
    border: 30px solid rgba(147,242,5,1);

    @media (max-width: 530px) {
        border: none;
    }
`

const TwoCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 0 auto;
    padding: 100px 0;
    width: 60%;

    @media (max-width: 530px) {
        width: 90%;
        padding: 30px 0;

        grid-template-columns: 1fr;
    }
`

const PromoLink = styled.a`
    color: rgba(0,103,177,1);
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
                    <h2>WE’VE DONE THIS BEFORE ...</h2>
                    <p>We introduced and implemented CHI.VOTE, core product of the Chi.vote Collective, a new group of nonpartisan media and civic organizations that believe in fostering a safer, more prosperous and more equitable and connected Chicago by creating content and tools of the highest quality and accessibility around city elections.</p>
                    <PromoLink>Check out Chi.Vote!</PromoLink>
                </div>
            </TwoCol>
        </OldApp>
    )
}

export default ChiVote