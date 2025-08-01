// map en cartas de propiedades: foto-nombre-locacion-medidas-precio-comentario?
// al hacer click se agranda y muestra detalles.
import { properties } from '../mocks/properties.json'
import { PropertyCard } from "./PropertyCard";

export function Properties () {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          Nuestras Propiedades
        </h2>
        <div>
          <PropertyCard properties={properties}/>
        </div>
      </div>
    </section>
  )
}

// gpt por que no se ven las cosas?