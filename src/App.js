import React from 'react'
import Aside from './components/aside'
import Header from './components/header'
import Slide from './components/slide'
import Footer from './components/footer'
import './assets'

function App() {
  const portfolio_list = [
    {
      background: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-caixas.jpg',
      title: 'Caixas Térmicas',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento Wordpress', 'Desenvolvimento de Plugins'],
      thumb: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-caixas-thumb-min.png'
    },
    {
      background: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-ortigao.jpg',
      title: 'Ortigão',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento Wordpress', 'Blog'],
      thumb: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-ortigao-thumb-min.png'
    },
    {
      background: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-abeda.jpg',
      title: 'Abeda',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento WordPress', 'Desenvolvimento de Plugins', 'Notícias', 'Intranet'],
      thumb: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-abeda-thumb-min.png'
    },
    {
      background: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-cinaplin.jpg',
      title: 'Cinaplin',
      features: ['Layout', 'Desenvolvimento Front-End', 'Desenvolvimento WordPress', 'Notícias'],
      thumb: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-cinaplin-thumb-min.png',
    },
    {
      background: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-gaivota.jpg',
      title: 'Gaivota',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento Wordpress', 'Desenvolvimento de Plugins'],
      thumb: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-gaivota-thumb-min.png',
    },
    {
      background: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-master.jpg',
      title: 'Master Trade',
      features: ['Desenvolvimento Front-End', 'Desenvolvimento WordPress'],
      thumb: 'https://atallah.netlify.com/wp-content/themes/modelo-base/images/proj-master-thumb-min.png',
    }
  ]

  return (
    <div className="App">
      <Aside />

      <Header/>

      <main>
        <div className="section home fp-section fp-table active fp-completely" style={{backgroundImage: "url(https://atallah.netlify.com/wp-content/themes/modelo-base/images/bg-home.jpg)"}} data-anchor="sobre">
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
                  <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/leandro-atallah-bateria.jpg" alt="leandro-atallah-bateria"/>
                </div>
                <div className="col-md-4">
                  <h2 className="line">Sobre</h2>
                  <p>Olá, meu nome é <a>Leandro Atallah</a>. <br/>Sou carioca, casado e tenho 28 anos.</p>
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
            <div className="fp-slidesContainer" style={{width: '600%', transition: 'all 700ms ease 0s', transform: 'translate3d(0px, 0px, 0px)'}}>

            {
              portfolio_list.map((props, index) => (
                <Slide {...props} key={{ index }} />
              ))
            }

          </div>
        </div>

        <div className="fp-controlArrow fp-prev"></div>
        <div className="fp-controlArrow fp-next"></div>

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
                <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/ico-face-white.png" alt="facebook"/>
              </a>
              <a href="https://www.linkedin.com/in/leandroatallah" target="_blank" rel="noopener noreferrer">
                <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/ico-link-white.png" alt="linkedin"/>
              </a>
              <a href="https://www.instagram.com/leandroatallah/" target="_blank" rel="noopener noreferrer">
                <img src="https://atallah.netlify.com/wp-content/themes/modelo-base/images/ico-insta-white.png" alt="instagram"/>
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
