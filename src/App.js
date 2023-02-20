import "./App.css"
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import CardContainer from "./components/CardContainer"
import { data } from "./utils/data"

function App() {
  return (
    <div className="App bg-warning">
      <Header />
      {data.map(({ name, img, statistics }, index) => (
          <CardContainer
            key={index}
            img={img}
            name={name}
            statistics={statistics}
          />
        ))}
    </div>
  )
}

export default App
