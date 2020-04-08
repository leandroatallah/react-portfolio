import React from 'react'
import styled from 'styled-components'

const Aside = styled.aside`
    background-color: #fff;
`

export default () => (
    <Aside>
        <div className="flex column sm-row middle between">
            <div className="align-center">
                <a href="javascript:openAside();" id="branding">
                    <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/logo.png" alt="logo-atallah"/>
                </a>
            </div>
            <nav>
                <ul className="align-center if-open">
                    <li className="home">
                        <a href="#home">Home</a>
                    </li>
                    <li className="sobre">
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li className="projetos">
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li className="contato">
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
                <a href="javascript:openAside();" className="btn-mobile">
                    <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/btn-mobile.png" className="if-open-hide" alt="btn-mobile"/>
                    <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/ico-close.png" className="if-open" alt="btn-close"/>
                </a>
            </nav>
            <div className="aside-foot align-right">
                <div className="copyrights if-open">
                    <div className="social">
                        <div className="flex center">
                            <a href="https://www.facebook.com/leoatallah" target="_blank" rel="noopener noreferrer">
                                <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/ico-face.png" alt="facebook"/>
                            </a>
                            <a href="https://www.linkedin.com/in/leandroatallah" target="_blank" rel="noopener noreferrer">
                                <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/ico-link.png" alt="linkedin"/>
                            </a>
                            <a href="https://www.instagram.com/leandroatallah/" target="_blank" rel="noopener noreferrer">
                                <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/ico-insta.png" alt="instagram"/>
                            </a>
                        </div>
                    </div>
                    <span>© 2020 leandro atallah</span>
                </div>
            </div>
        </div>
    </Aside>
)
