// al hacer click se agranda y muestra detalles.

import { properties } from '../mocks/properties.json'
import { PropertyCard } from "./PropertyCard";

export function Properties () {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 pt-14 text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          Nuestras Propiedades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4" >
          {properties.map((prop)=>
            <PropertyCard key={prop.id} properties={prop}/>
          )}
        </div>
      </div>
    </section>
  )
}
