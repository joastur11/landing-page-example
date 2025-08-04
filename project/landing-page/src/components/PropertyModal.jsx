export function Modal ({ isModalOpen, setIsModalOpen }) {
  if (isModalOpen){
    return (
      <div 
      onClick={() => setIsModalOpen(false)}
      className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center"
      >
        <div 
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-5 rounded flex z-50"
        >
          <button 
            onClick={() => setIsModalOpen(false)}
            className="
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
