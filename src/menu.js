export const renderMenu = () =>{
    const content = document.querySelector(".content");
    content.innerHTML = " ";
    const  title = document.createElement("div");
    title.setAttribute("class","menuItem1");
    title.style = 'flex';
    title.style.flexDirection = "column"
    title.textContent ="Spaget";
    title.style.height = '200px';
    title.style.width = '500px';
    title.style.textAlign = "center";
    title.style.alignItems = "center";
   
    
    content.appendChild(title);
    const description = document.createElement("div");
    description.setAttribute("class","menuItem2");
    description.style = 'flex';
    description.style.flexDirection = "column"
    description.textContent ="Bean Juice";
    description.style.height = '200px';
    description.style.width = '500px';


    content.appendChild(description);
    const hours = document.createElement("div");
    hours.setAttribute("class","menuItem3");
    hours.style = 'flex';
    hours.style.flexDirection = "column"
    hours.textContent ="Pasta Peanut Pie";
    hours.style.height = '200px';
    hours.style.width = '500px';

    content.appendChild(hours);
    const location = document.createElement("div");
    location.setAttribute("class","menuItem4");
    location.style = 'flex';
    location.style.flexDirection = "column"
    location.textContent ="Boston Candy Corn";
    location.style.height = '200px';
    location.style.width = '500px';
   
    content.appendChild(location);

}

