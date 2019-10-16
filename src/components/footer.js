import React from "react"
import styled from 'styled-components'
import { FormattedMessage } from 'gatsby-plugin-intl'

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
                <p><FormattedMessage id="footer.description"/></p>
                <p><FormattedMessage id="footer.address"/></p>
            </Contain>
        </Foot>
    )
}

export default Footer