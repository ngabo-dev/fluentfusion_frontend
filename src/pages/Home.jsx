import Sandbox from "../components/Sandbox";
import styled from "styled-components"
import ContactDiv from "../components/ContactDiv";

const Home = () => {
  return (
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 0 70%' }}>
          <Sandbox />
        </div>
        <div style={{ flex: '1 0 26%', marginLeft: '12px' }}>
          <ContactDiv />
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 20vh;
`

export default Home
