import './index.css'

const Card = props => {
  const {cardDataItem} = props
  const {imgUrl, title, description, className} = cardDataItem
  const container = `card-container ${className}`
  return (
    <div className={container}>
      <h1 className="card-title">{title}</h1>
      <p class="card-description">{description}</p>
      <img className="image" src={imgUrl} alt={imgUrl} />
    </div>
  )
}

export default Card
