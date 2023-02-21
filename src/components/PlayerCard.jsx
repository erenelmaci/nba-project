import { useState } from "react"
import Card from "react-bootstrap/Card"

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true)

  return (
    <Card
      className="rounded-2 m-auto player-card"
      role="button"
      onClick={() => setShowImage(!showImage)}
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, index) => {
            return (
              <li key={{ index }} className="h5 text-start list-unstyled">
                🏀 {item}
              </li>
            )
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  )
}
export default PlayerCard
