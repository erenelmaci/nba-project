const PlayerCard = ({ img, name }) => {
  return (
    <div className="mt-2">
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          style={{ height: "22rem" }}
          src={img}
          className="card-img-top imgcont"
          alt="players"
        />
        <div className="card-body">
          <p className="card-text">{name}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
