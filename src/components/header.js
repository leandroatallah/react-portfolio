import React from 'react'
import styled from 'styled-components'
import btnmobile from '../assets/img/btn-mobile.png'
import icocloseblack from '../assets/img/ico-close-black.png'

const Header = styled.header`
    /**/
`

export default () => (
    <Header>
        <h1>Leandro Atallah</h1>
        <h2>FRONT-END &amp; WORDPRESS DEVELOPER</h2>
        <div className="mobile-btn">
            <img src={btnmobile} className="if-open-hide" alt="btn-mobile"/>
            <img src={icocloseblack} className="if-open" alt="btn-close"/>
        </div>
    </Header>
)
