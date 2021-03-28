import LayoutEjercicios from '@layouts/ejercicios'
import React, { useState } from 'react'
import SectionEjercicios from '@components/section-ejercicios'
import Word from '@components/word'
import Syllables from '@components/syllables'

export default function PalabrasAgudas() {
  
  return (
    <LayoutEjercicios title="Torax">
      <SectionEjercicios title="Introducción" id="introduccion">
        <p className="lead">
          Occaecat non officia dolor ullamco sunt nisi incididunt consequat reprehenderit adipisicing culpa labore ex. Sunt tempor pariatur et occaecat elit irure in esse culpa. Proident enim Lorem nostrud do nulla sunt consectetur deserunt velit occaecat aliquip cillum. Irure voluptate amet elit exercitation.
        </p>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 1" id="ejercicio1"></SectionEjercicios>
      
      
    </LayoutEjercicios>
  )
}

