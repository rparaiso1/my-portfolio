import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
import { Aboutme } from "./pages/Aboutme/Aboutme";
import { Footer } from "./components/Footer/Footer";

import { Divider } from "./components/Divider/Divider";

const header = document.querySelector("header");

header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#contactlink", Contact);
linkPage("#aboutmelink", Aboutme);
    
Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());