import "./ProjectCard.css";
import { Button } from "../Button/Button";

export const ProjectCard = (project) => `
<div class="project-card">
    <img src=${project.image} alt=${project.title}/>
    <div class="header">
    <h2>${project.title}</h2>
${Button("/icons/git.jpg", "GitHub")}
     </div>

    <div class="detail">
        <p>${project.description}</p>   
        <p class="tech">${project.tech.join(" - ")}</p>
    </div>
</div>
`;