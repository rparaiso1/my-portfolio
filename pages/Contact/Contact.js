import "./Contact.css";
import { Button } from "../../components/Button/Button";
import { cleanPage } from "../../utils/cleanPage";

export const Contact = () => {
  const main = document.querySelector("main");

  cleanPage(main);
  main.innerHTML =
`<section class="contact">
<h2>Contact</h2>
<div class="buttons">
  <button>Linkedin</button>
  <button>Gmail</button>
</div>
</section>
`;;
  
};

