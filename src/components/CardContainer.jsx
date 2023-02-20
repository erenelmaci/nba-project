import "bootstrap/dist/css/bootstrap.min.css"
import PlayerCard from "./PlayerCard"

const CardContainer = ({ img, name }) => {
  return (
    <div className="d-inline-block">
      <div className=" d-flex justify-content-center align-items-center">
        <PlayerCard img={img} name={name} />
      </div>
    </div>
  )
}

export default CardContainer
