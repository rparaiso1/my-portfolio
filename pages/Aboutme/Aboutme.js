import "./Aboutme.css";
import { cleanPage } from "../../utils/cleanPage";

export const Aboutme = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML =

  `<h2>Aboutme</h2>
  <div class= 'Aboutme'>
<p>Hola, soy un apasionado del mundo tecnológico, actualmente estudiando desarrollo de software. Mi trayectoria comenzó como tester, donde adquirió una sólida comprensión de la importancia de la calidad en el proceso de desarrollo. Este rol me ha permitido desarrollar un ojo crítico para identificar problemas y mejorar la experiencia del usuario.

A medida que me adentro en el mundo del desarrollo, mi objetivo es combinar mis habilidades de testing con el conocimiento de programación para crear aplicaciones más robustas y eficientes. Me fascina el proceso de construir soluciones que no solo funcionan bien, sino que también ofrecerán una experiencia fluida y agradable para el usuario.

Fuera del ámbito profesional, me gusta explorar nuevas tecnologías, aprender sobre las últimas tendencias de la industria y colaborar con otros entusiastas del desarrollo. Estoy emocionado por lo que el futuro tiene reservado y siempre estoy abierto a nuevas oportunidades y desafíos en este apasionante campo.
<p>
</div>`;
};