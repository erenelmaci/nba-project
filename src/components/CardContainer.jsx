import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { data } from "../helpers/data"
import PlayerCard from "./PlayerCard"
import { FormControl } from "react-bootstrap"
import { useState } from "react"

const CardContainer = () => {
  const [search, setSearch] = useState("")
  console.log(search)
  return (
    <>
      <FormControl
        placeholder="Searh Player..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, i) => {
              return (
                <Col md={6} lg={4} xl={3} key={i}>
                  <PlayerCard {...player} />
                </Col>
              )
            })}
        </Row>
      </Container>
    </>
  )
}
export default CardContainer
