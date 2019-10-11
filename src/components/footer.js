import React from "react"
import styled from 'styled-components'

const Foot = styled.section`
    background: #000;
    padding: 2rem 0;

`

const Contain = styled.div`
    color: #fff;
    margin: 0 auto;
    width: 80%;
`

const Footer = () => {
    return (
        <Foot>
            <Contain>
                <p>Founded on the heels of the civil rights movement of the 1960s, The Chicago Reporter confronts racial and economic inequality, using the power of investigative journalism.</p>
                <p>The Chicago Reporter 111 W. Jackson Blvd., Suite 820 | Chicago, IL 60604 (312) 427-4830 | tcr@chicagoreporter.com</p>

            </Contain>

        </Foot>
    )
}

export default Footer