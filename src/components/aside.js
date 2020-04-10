import React from 'react'
import icoface from '../assets/img/ico-face.png'
import icoinsta from '../assets/img/ico-insta.png'
import icolink from '../assets/img/ico-link.png'
import logo from '../assets/img/logo.png'
// import icoclose from '../assets/img/ico-close.png'
// import btnmobile from '../assets/img/btn-mobile.png'

export default () => {
    return (
        <aside className="open">
            <div className="flex column sm-row middle between">
                <div className="align-center">
                    <img src={logo} alt="logo-atallah"/>
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
                    {/* <div className="btn-mobile" onClick={() => setAsideActive(!asideActive)}>
                        <img src={btnmobile} className="if-open-hide" alt="btn-mobile"/>
                        <img src={icoclose} className="if-open" alt="btn-close"/>
                    </div> */}
                </nav>
                <div className="aside-foot align-right">
                    <div className="copyrights if-open">
                        <div className="social">
                            <div className="flex center">
                                <a href="https://www.facebook.com/leoatallah" target="_blank" rel="noopener noreferrer">
                                    <img src={icoface} alt="facebook"/>
                                </a>
                                <a href="https://www.linkedin.com/in/leandroatallah" target="_blank" rel="noopener noreferrer">
                                    <img src={icolink} alt="linkedin"/>
                                </a>
                                <a href="https://www.instagram.com/leandroatallah/" target="_blank" rel="noopener noreferrer">
                                    <img src={icoinsta} alt="instagram"/>
                                </a>
                            </div>
                        </div>
                        <span>© 2020 leandro atallah</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}
