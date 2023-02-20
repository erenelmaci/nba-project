import HeaderLogo from "../assets/nba-logo.png"
import "bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
  return (
    <div>
      <img
        style={{ width: "10rem" }}
        className="mt-5"
        src={HeaderLogo}
        alt="img"
      />
      <h1 className="fs-1">NBA Legends</h1>
      <div className="container-fluid w-50 mt-3">
        <form className="d-flex justify-content-center" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Player..."
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  )
}

export default Header
