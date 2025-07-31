import { HomeModernIcon } from '@heroicons/react/24/solid'

export function Navbar (){
  return(
  <header className="sticky top-0 bg-white shadow-md">
    <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between '>
      <div className='flex items-center space-x-2'>
        <HomeModernIcon className='h-8 w-8 text-sky-600'/>
        <h1 className='text-xl font-bold'>Inmobiliaria Hello World</h1>       
      </div>
      <nav className='space-x-6 hidden md:flex text-gray-700 font-medium'>
        <a href="#" className='hover:text-blue-600'>Propiedades</a>
        <a href="#" className='hover:text-blue-600'>Contacto</a>
        <a href="#" className='hover:text-blue-600'>Nosotros</a>
      </nav>
    </div>
  </header>
  )
}

//href de los <a> 