// destructurar objeto dentro de la card

export function PropertyCard ({ properties }) {
  return (
    <div>
      <img src={properties.images} />
      <div>
        <strong>{properties.title}</strong>
      </div>
    </div>

  )
}