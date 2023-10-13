import Sandbox from "../components/Sandbox";
import styled from "styled-components"

const Home = () => {
  return (
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 0 72%' }}>
          <Sandbox />
        </div>
        <div style={{ flex: '1 0 26%', marginLeft: '10px' }}>
          CONTACT INFO
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 20vh;
`

export default Home
