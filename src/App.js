import React, { useState } from 'react'

import Aside from './components/aside'
import Header from './components/header'
import Slide from './components/slide'
import Footer from './components/footer'
import './assets/css/style.css'
import bghome from './assets/img/bg-home.jpg'
import icofacewhite from './assets/img/ico-face-white.png'
import icoinstawhite from './assets/img/ico-insta-white.png'
import icolinkwhite from './assets/img/ico-link-white.png'
import leandroatallahbateria from './assets/img/leandro-atallah-bateria.jpg'

import projabedathumbmin from './assets/img/proj-abeda-thumb-min.png'
import projabeda from './assets/img/proj-abeda.jpg'
import projcaixasthumbmin from './assets/img/proj-caixas-thumb-min.png'
import projcaixas from './assets/img/proj-caixas.jpg'
import projcinaplinthumbmin from './assets/img/proj-cinaplin-thumb-min.png'
import projcinaplin from './assets/img/proj-cinaplin.jpg'
import projgaivotathumbmin from './assets/img/proj-gaivota-thumb-min.png'
import projgaivota from './assets/img/proj-gaivota.jpg'
import projmasterthumbmin from './assets/img/proj-master-thumb-min.png'
import projmaster from './assets/img/proj-master.jpg'
import projortigaothumbmin from './assets/img/proj-ortigao-thumb-min.png'
import projortigao from './assets/img/proj-ortigao.jpg'


function jumpSlide(portfolio_list, slideActive, setSlideActive, jump) {
  let jumpTemp = slideActive + jump
  
  if(jumpTemp >= portfolio_list.length) {
    jumpTemp = 0
  } else if(jumpTemp < 0) {
    jumpTemp = portfolio_list.length - 1
  }

  setSlideActive(jumpTemp)
}


function App() {
  const portfolio_list = [
    {
      index: 0,
      background: projcaixas,
      title: 'Caixas Térmicas',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento Wordpress', 'Desenvolvimento de Plugins'],
      thumb: projcaixasthumbmin
    },
    {
      index: 1,
      background: projortigao,
      title: 'Ortigão',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento Wordpress', 'Blog'],
      thumb: projortigaothumbmin
    },
    {
      index: 2,
      background: projabeda,
      title: 'Abeda',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento WordPress', 'Desenvolvimento de Plugins', 'Notícias', 'Intranet'],
      thumb: projabedathumbmin
    },
    {
      index: 3,
      background: projcinaplin,
      title: 'Cinaplin',
      features: ['Layout', 'Desenvolvimento Front-End', 'Desenvolvimento WordPress', 'Notícias'],
      thumb: projcinaplinthumbmin
    },
    {
      index: 4,
      background: projgaivota,
      title: 'Gaivota',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento Wordpress', 'Desenvolvimento de Plugins'],
      thumb: projgaivotathumbmin
    },
    {
      index: 5,
      background: projmaster,
      title: 'Master Trade',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento WordPress'],
      thumb: projmasterthumbmin
    }
  ]

  const [slideActive, setSlideActive] = useState(0)

  return (
    <div className="App">
      <Aside />

      <Header/>

      <main>

        <div className="section home fp-section fp-table active fp-completely" style={{backgroundImage: `url(${bghome})`}} data-anchor="sobre">
          <div className="section-center">
            <h2 className="align-center">Apaixonado por <br/>Front-End e Wordpress</h2>
            <div className="btn-double flex sm-column center sm-align-center">
              <a href="#contato" className="btn btn-orange hover-effect">Entre em contato</a>
              <a href="#projetos" className="btn btn-transparent hover-effect">Projetos</a>
            </div>
          </div>
          <a href="#sobre" className="calltoaction">Quem sou eu?</a>
        </div>

        <div className="section sobre fp-section fp-table" id="sobre" data-anchor="projetos" style={{height: '100vh'}}>
          <div className="section-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-offset-1 col-md-4 align-center sm-hide">
                  <img src={leandroatallahbateria} alt="leandro-atallah-bateria"/>
                </div>
                <div className="col-md-4">
                  <h2 className="line">Sobre</h2>
                  <p>Olá, meu nome é <strong>Leandro Atallah</strong>. <br/>Sou carioca, casado e tenho 28 anos.</p>
                  <p>Trabalho como Desenvolvedor Front-end e Wordpress a mais de 4 anos. Sou graduado em Análise e Desenvolvimento de Sistemas na Faculdade São José.</p>
                  <p>Atuo em meus projetos com bastante foco fazendo uma entrega rápida e de qualidade. Atendo desde pequenos negócios a grandes agências digitais.</p>
                  <p>
                  <a href="#contato">Entre em contato</a> e faça um orçamento.</p>
                </div>
              </div>
            </div>
          </div>
          <a href="#projetos" className="calltoaction">Meus projetos</a>
        </div>

        <div className="section projetos fp-section" id="projetos" data-anchor="contato" style={{height: '100vh'}}>
          <h2 className="proj-title">Projetos</h2>
          <a href="#contato" className="calltoaction">Entre em contato</a>
          <div className="fp-slides">
            <div className="fp-slidesContainer" style={{width: `${portfolio_list.length * 100}%`, transition: 'all 700ms ease 0s', left: `-${slideActive * 100}%`}}>

            {
              portfolio_list.map(props => (
                <Slide index={props.index} {...props} key={props.index} />
              ))
            }
          </div>
        </div>

        <button type="button" onClick={() => jumpSlide(portfolio_list, slideActive, setSlideActive, -1)} className="fp-controlArrow fp-prev"></button>
        <button type="button" onClick={() => jumpSlide(portfolio_list, slideActive, setSlideActive, +1)} className="fp-controlArrow fp-next"></button>

        </div>

        <div className="section contato fp-section fp-table" id="contato" data-anchor="contato" style={{height: '100vh'}}>
          <div className="fp-tableCell" style={{height: '100vh'}}>
            <div className="section-center">
              <div className="container-fluid">
                <div className="row flex middle sm-wrap">
                  <div className="col-md-5 col-xs-12 col-sm-12">
                    <div className="contato-inner">
                      <h2 className="line">Entre em contato</h2>
                      <h3>Me ligue ou mande um Whatsapp</h3>
                      <h4>+55 (32) 98506-5755</h4>
                    </div>
                  </div>
                  <div className="col-md-5 col-xs-12 col-sm-12">
                    <div className="contato-inner">
                      <h3>Ou me envie um e-mail</h3>
                      <h4>leandroatallah@gmail.com</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="calltoaction">
              <a href="https://www.facebook.com/leoatallah" target="_blank" rel="noopener noreferrer">
                <img src={icofacewhite} alt="facebook"/>
              </a>
              <a href="https://www.linkedin.com/in/leandroatallah" target="_blank" rel="noopener noreferrer">
                <img src={icolinkwhite} alt="linkedin"/>
              </a>
              <a href="https://www.instagram.com/leandroatallah/" target="_blank" rel="noopener noreferrer">
                <img src={icoinstawhite} alt="instagram"/>
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default App
