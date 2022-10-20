import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-michael-jordan">Michael Jordan's Things</Link><br />
      <Link to="/the-manliest-things">Ben's Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-silly-things">Hunter's Things</Link><br/>
      <Link to="/the-fitness-things">Greg's Things</Link><br/>
      <Link to="/the-luigis-things">Luigi's Things</Link><br />
      <Link to="/the-andrew-things">Andrew's Things</Link><br/>
      <Link to="/the-wacky-things">Wacky Things</Link><br/>
    </>
  )
}

export default Landing