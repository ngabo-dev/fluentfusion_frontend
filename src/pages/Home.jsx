import Sandbox from "../components/Sandbox";
import styled from "styled-components"

const Home = () => {
  return (
    <Container>
      <div >
        <Sandbox />
        </div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 20vh;
`

export default Home
