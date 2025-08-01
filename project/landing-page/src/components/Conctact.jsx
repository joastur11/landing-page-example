import { PhoneIcon, InboxIcon, AtSymbolIcon, BuildingStorefrontIcon } from "@heroicons/react/24/solid"

export function Contact (){
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="rounded overflow-hidden py-20 shadow-lg max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          Contactanos
        </h3>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Respondemos hasta los días feriados.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 text-left">
          <div className="flex items-center gap-3">
            <InboxIcon className='h-5 w-5 text-sky-600' />
            <span>helloworld@email.com.ar</span>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className='h-5 w-5 text-sky-600' />
            <span>343-4433442</span>
          </div>
          <div className="flex items-center gap-3">
            <AtSymbolIcon className='h-5 w-5 text-sky-600' />
            <span>@HelloWorldInm en todas las redes </span>
          </div>
          <div className="flex items-center gap-3">
            <BuildingStorefrontIcon className='h-5 w-5 text-sky-600' />
            <span>Calle Tukson 23, Parana, Entre Rios.</span>
          </div>          
        </div>
      </div>
    </section>
  )
}