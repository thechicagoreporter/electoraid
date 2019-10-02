import React from "react"
import styled from 'styled-components'
import Form from "../components/netlifyform.js"


const FormBack = styled.section`
    background: rgba(205, 1, 1, 1);
    display: flex;
    align-items: center;
    justify-content: center;
`

const FormContain = styled.div`
    background-color: #fff;
    margin: 100px auto;
    padding: 50px;
    text-align: center;
    width: 50%;
    @media (max-width: 530px) {
        width: 90%;
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
        grid-template-columns: 1fr;
    }
`

const PromoLink = styled.a`
    color: rgba(0,103,177,1);
    font-family: sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        color: #000;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    }
`

const AidForm = () => {
    return (
        <FormBack>
            <FormContain>
                <h2>Sign up for project updates</h2>
                <Form />
            </FormContain>
        </FormBack>
    )
}

export default AidForm