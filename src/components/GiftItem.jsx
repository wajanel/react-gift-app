


export const GiftItem = ({imagen, title}) => {
  return (
    <div className="card">
        <img src={imagen} alt={title} />
        <p>{title}</p>
    </div>
  )
}
