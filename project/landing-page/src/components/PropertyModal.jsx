export function Modal ({ isModalOpen, setIsModalOpen, properties }) {
  if (isModalOpen){
    return (
      <div 
      onClick={() => setIsModalOpen(false)}
      className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center"
      >
        <div 
          onClick={(e) => e.stopPropagation()}
          className="max-w-lg rounded bg-white p-2 z-50 ring-1 ring-gray-200 shadow-lg"
        >
          <img className="object-cover w-full h-full rounded" src={properties.images} alt={properties.title} />
          <p className="flex mt-2 flex-col items-center text-lg font-normal mx-auto text-center"> {properties.details} </p>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="
              mb-2
              mt-4
              cursor-pointer
              text-white 
              px-3 
              py-1 
              font-medium 
              hover:bg-sky-700 
              transition 
              rounded-lg 
              text-lg
              text-center
              mx-auto 
              bg-sky-600
            "
          >
            Volver
          </button>
        </div>
      </div>
    )
  }
  return null
}
