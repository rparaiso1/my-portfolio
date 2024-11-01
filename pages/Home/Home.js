import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Ruben</h1>
    <p>Soy un estudiante del programa prometeo de la escuela ThePower.
    Estoy estudiando un Grado Superior de Desarrollo de aplicaciones Multiplataforma y un Master en desarrolllo web</p>

    </section>`;
};