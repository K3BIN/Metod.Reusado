import React from 'react'
import Profile from '@components/profile'
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


export default function Header() {

  return (
    <header className="header-home bg-dark text-dark" id="header-home" style={{
      background: 'url("/images/header_alt.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container-fluid" style={{background: 'rgba(0,0,0,0)'}}>
        <div className="row vh-100 py-5 align-content-center text-center">
          <div className="col">
            <div style={{marginBottom: '5rem'}}>
              <h1 className="display-1">Metodología</h1>
              <h2 className="mb-0" style={{opacity: 0.6}}>Proyecto</h2>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="d-fex row justify-content-center w-100">
                <Profile name="Aguilar Flores Javier Alberto" img="/images/masculino.jpg"/>
                <Profile name="Hernández Díaz Kevin Daniel" img="/images/profile2.jpeg"/>
                <Profile name="Martínez Peláez Ernesto" img="/images/masculino.jpg"/>
                <Profile name="Pelcastre Téllez Karla Montserrat" img="/images/femenino.jpg"/>
              </div>
              <a href="#ejercicios" className="btn btn-lg btn-primary" style={{marginTop: '3rem'}}>Empezar</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

