import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    /**/
`

export default () => (
    <Header>
        <h1>Leandro Atallah</h1>
        <h2>FRONT-END &amp; WORDPRESS DEVELOPER</h2>
        <a href="javascript:openMobileMenu();" className="mobile-btn">
            <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/btn-mobile.png" className="if-open-hide" alt="btn-mobile"/>
            <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/ico-close-black.png" className="if-open" alt="btn-close"/>
        </a>
    </Header>
)
