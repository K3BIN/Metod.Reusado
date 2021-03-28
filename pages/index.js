import LayoutHome from '@layouts/home'
import React from 'react'
import CardTema from '@components/card-tema'

export default function Home() {
  return (
    <LayoutHome>
      <div className="col-12 text-center" style={{marginBottom: '5rem'}}>
          <h1>¿Que ejercicios practicaremos hoy?</h1>
        </div>
        <div className="col-md-4 mb-4">
          <CardTema
            tema="Commodo non commodo ullamco cillum dolor eu commodo."
            descripcion="Nostrud nisi pariatur quis exercitation ad consectetur cupidatat enim proident do et ad nisi."
            path="/ejercicios/palabras-agudas"
          />
        </div>
        <div className="col-md-4 mb-4">
          <CardTema
            tema="Exercitation minim eu consectetur incididunt."
            descripcion="Consequat cillum laboris occaecat id proident excepteur irure proident adipisicing consequat anim mollit."
            path="/ejercicios/palabras-graves"
          />
        </div>
        <div className="col-md-4 mb-4">
          <CardTema
            tema="Cillum qui cillum id quis proident aliquip."
            descripcion="Irure laboris duis qui nisi duis ipsum culpa."
            path="/ejercicios/palabras-esdrujulas"
          />
        </div>
    </LayoutHome>
  )
}
