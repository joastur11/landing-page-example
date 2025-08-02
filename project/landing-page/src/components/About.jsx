import { CalendarDaysIcon, GlobeAltIcon, FaceSmileIcon, HomeIcon } from "@heroicons/react/24/solid"

export function About (){
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          Somos Hello World
        </h3>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Mas de 30 años dándote un techo.
        </p>
        <p className="text-lg mb-8 text-gray-900 max-w-prose mx-auto">
            Somos un negocio familiar de Parana, Entre Rios.
            Comprometidos en tratarte como humano.
            Aseguramos encontrar el lugar ideal para tu familia
            y cualquiera sea la profundidad de tu bolsillo.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 text-left">
          <div className="flex items-center gap-3">
            <CalendarDaysIcon className='h-8 w-8 text-sky-600' />
            <span>Desde 1994</span>
          </div>
          <div className="flex items-center gap-3">
            <GlobeAltIcon className='h-8 w-8 text-sky-600' />
            <span>Operando en toda la Argentina</span>
          </div>
          <div className="flex items-center gap-3">
            <FaceSmileIcon className='h-8 w-8 text-sky-600' />
            <span>Mas de 5000 familias ubicadas</span>
          </div>
          <div className="flex items-center gap-3">
            <HomeIcon className='h-8 w-8 text-sky-600' />
            <span>Desde terrenos hasta amueblados</span>
          </div>          
        </div>
      </div>
    </section>
  )
}
