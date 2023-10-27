import { useState } from "react";
import logoBlue from "../assets/logos/logo-blue.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <Nav>
      <div className="brand">
        <img src={logoBlue} alt="logo" style={{maxHeight:'56px'}}/>
      </div>
      <div className="menus">
        <Link
          to="/"
          className="link"
          style={
            active === "home" ? { color: "#4890fc" } : { color: "#212427" }
          }
          onClick={() => setActive("home")}
        >
          Ahabanza
        </Link>
        <Link
          to="/lessons"
          className="link"
          style={
            active === "lessons"
              ? { color: "#4890fc" }
              : { color: "#212427" }
          }
          onClick={() => setActive("lessons")}
        >
          Amasomo
        </Link>
        <Link
          to="/games"
          className="link"
          style={
            active === "games" ? { color: "#4890fc" } : { color: "#212427" }
          }
          onClick={() => setActive("games")}
        >
          Imyitozo
        </Link>
        <Link
          to="/contact"
          className="link"
          style={
            active === "contact" ? { color: "#4890fc" } : { color: "#212427" }
          }
          onClick={() => setActive("contact")}
        >
          Dusange
        </Link>
      </div>
      <div id="contact">
        <a href="https://wa.me/250788737639">
          <Button label="Duhamagare" severity="info" icon="pi pi-phone" />
        </a>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  overflow: hidden;
  background: white;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;

  .brand {
    width: calc(100vw / 4);

    img {
      max-width: 20%;
      cursor: pointer;
    }
  }

  .menus {
    display: block;
    justify-content: space between;
    width: 100%;

    .link {
      text-decoration: none;
      color: #212427;
      font-weight: 600;
      font-size: 1.2rem;

      &:hover {
        color: #4890fc;
      }
    }
  }

  @media (max-width: 768px) {
    /* Add responsive styles for smaller screens here */
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    .brand {
      width: 100%;
      text-align: center;
      img {
        max-width: 50%;
      }
    }
    .menus {
      width: 100%;
      margin-top: 1rem;
      .link {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
}`;

export default Navbar;
