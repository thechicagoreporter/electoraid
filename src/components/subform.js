import React from "react"
import styled from 'styled-components'
import Form from '../components/netlifyform.js'

const Sub = styled.section`
    background: rgba(79,2,89,1);
    padding: 2rem 0;
    width: 100%;
    @media (max-width: 680px) {
        padding: 1rem 0;
    }
`

const Contain = styled.div`
    margin: 0 auto;
    width: 80%;
`

const TwoCol = styled.div`
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 0px 0;

    h2 {
        font-size: 1.2rem;
        font-weight: 900;
        margin-top: .5rem;
    }

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`

const SubForm = () => {
    return (
        <Sub>
            <Contain>
                <TwoCol>
                    <div>
                        <h2>Sign up for more information about Electoraid!</h2>

                    </div>
                    <div>
                        <Form />
                    </div>
                </TwoCol>
            </Contain>
        </Sub>
    )
}

export default SubForm