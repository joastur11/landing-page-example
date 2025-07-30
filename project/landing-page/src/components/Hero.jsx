// Imagen grande de fondo + título ("Encuentra tu próxima casa" o algo asi)

export function Hero (){
  return (
    <section className="bg-sky-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Encontrá tu hogar ideal
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Casas, departamentos y terrenos en toda Argentina. Fácil, rápido y confiable.
        </p>
        <a href="#propiedades" className="
          inline-block
          bg-sky-600
          text-white 
          px-6 
          py-3 
          rounded-lg 
          text-lg 
          font-medium 
          hover:bg-sky-700 
          transition"
        >
          Ver Propiedades
        </a>
      </div>
    </section>
  )
}