import { color } from "three/examples/jsm/nodes/Nodes.js";

export const renderContact = () =>{

    const content = document.querySelector(".content");
    content.innerHTML = " ";
    const  title = document.createElement("div");
    title.setAttribute("class","title");
    title.style = 'flex';
    title.style.flexDirection = "column"
    title.textContent ="Call us at: 192-675-0341";
    title.style.height = '200px';
    title.style.width = '700px';
    title.style.textAlign = "center";
    title.style.alignItems = "center";
    title.style.justifyContent = "center";

    
    content.appendChild(title);
    const description = document.createElement("div");
    description.setAttribute("class","description");
    description.style = 'flex';
    description.style.flexDirection = "column"
    description.textContent ="We Make Pizza";
    description.style.height = '100px';
    description.style.width = '500px';
    description.style.justifyContent = "center";


    content.appendChild(description);
    const hours = document.createElement("div");
    hours.setAttribute("class","hours");
    hours.style = 'flex';
    hours.style.flexDirection = "column"
    hours.textContent ="pizza since 1901";
    hours.style.height = '100px';
    hours.style.width = '500px';
    hours.style.justifyContent = "center";


    content.appendChild(hours);
    const location = document.createElement("div");
    location.setAttribute("class","location");
    location.style = 'flex';
    location.style.flexDirection = "column"
    location.textContent ="Rochester New York";
    location.style.height = '100px';
    location.style.width = '500px';
    location.style.justifyContent = "center";
   
    content.appendChild(location);
}