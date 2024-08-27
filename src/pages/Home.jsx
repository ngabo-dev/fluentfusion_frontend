import Cards from "../components/Cards";
import Sandbox from "../components/Sandbox";
import 'animate.css';
import Testimonial from "../components/Testimonial";
import OurMission from "../components/OurMission";
import VocabularyList from "../components/VocabularyList";

const Home = () => {
  return (
    <>
      <div
        className="h-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('../src/images/homeimage.jpg')"
        }}
      >
       
        <div className="translate-y-60">
          {/* <h1 className="text-xl font-bold mb-6 translate-y-10 text-blue-500 px-20 animate__animated animate__slideInLeft">Learn From Today</h1> */}
          <p className="text-4xl translate-y-8 text-center text-white font-light mb-4 px-20 animate__animated animate__slideInLeft">
            Empowering Communication<br /> Across All Communities
          </p>
      
        </div>


      </div>
      <div>
          <Sandbox />
        </div>

      <div>
        <Cards />
      </div>
      <div>
        <VocabularyList />
      </div>
      

      <Testimonial />
      <OurMission />
    </>
  );
};

export default Home;
