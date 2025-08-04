import { useState } from "react"
import { Modal } from "./PropertyModal";

export function PropertyCard ({ properties }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg hover:shadow-xl hover:ring-2 hover:ring-gray-200 transition-shadow duration-300" >
      <img className="object-cover w-100 h-80" src={properties.images} alt={properties.title} />
      <div className="px-6 py-3">
        <strong className="font-bold text-xl mb-2">{properties.title}</strong>
        <ul className="py-1" >
          <li>{properties.location}</li>
          <li>{properties.dimensions}</li>
          <li>{properties.price}</li>
        </ul>
        <p className="text-gray-700" >"{properties.comment}"</p>
      </div>
      <div className="py-1 pb-4">
        <button onClick={() => setIsModalOpen(true)} className="
          cursor-pointer
          text-white  
          px-3 
          py-1 
          font-medium 
          hover:bg-sky-700 
          transition 
          rounded-lg 
          text-lg 
          bg-sky-600
          ">Detalles</button>
      </div>
      <Modal properties={properties} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}
