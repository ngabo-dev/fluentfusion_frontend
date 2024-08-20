
import Sandbox from "../components/Sandbox";
import styled from "styled-components"
// import ContactDiv from "../components/ContactDiv";

const Home = () => {
  return (
    // <Container>
    //   <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    //     <div style={{ flex: '1 0 70%' }}>
    //       <Sandbox />
    //     </div>
    //     <div style={{ flex: '1 0 26%', marginLeft: '12px' }}>
    //       {/* <ContactDiv /> */}
    //     </div>
    //   </div>
    // </Container>
    <div className="h-screen bg-[url('../src/images/home.jpeg')] bg-no-repeat	bg-cover">
     <div className="h-screen bg-[url('../src/images/shape1.png')] bg-no-repeat	bg-cover"></div> 
     <div className="-translate-y-96">
     <h1 className="text-xl font-bold mb-6 translate-y-10  text-blue-500 px-20">Learn From Today</h1>
        <p className="text-3xl translate-y-8 text-white font-bold mb-4 px-20">
          Empowering Communication<br></br> Across All Communities
        </p>
{/* 
        <p className="text-lg text-white mb-6 px-20 ">
        Whether you're learning sign language to connect with others<br></br> or break communication barriers, SLTS offers easy, interactive<br></br> online courses accessible via web and mobile platforms.
        </p> */}
      </div>
    <div>
        
        {/* <Sandbox /> */}
      </div>
   
    </div>
  )
}



export default Home
