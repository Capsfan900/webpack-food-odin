

export const renderHomePage  = () =>{
    const content = document.querySelector(".content");
    content.innerHTML = " ";
    const  title = document.createElement("div");
    title.setAttribute("class","title");
    title.style = 'flex';
    const titleText = document.createElement("h1");
    titleText.textContent ="Welcome To The Food Place";
    title.appendChild(titleText);
    title.style.height = '100px';
    title.style.width = '500px';
    title.style.justifyContent = "center";
    content.appendChild(title);
    
    const description = document.createElement("div");
    description.setAttribute("class","description");
    description.style = 'flex';
    const desText = document.createElement("h2");
    desText.textContent ="We Make Food";
    description.appendChild(desText);
    description.style.height = '700px';
    description.style.width = '500px';
    description.style.justifyContent = "center";
    content.appendChild(description);


    const hours = document.createElement("div");
    hours.setAttribute("class","hours");
    hours.style = 'flex';
    hours.style.flexDirection = "column"
    const hoursText = document.createElement("h3");
    hoursText.textContent ="Food Since 1901";
    hours.appendChild(hoursText);
    hours.style.height = '500px';
    hours.style.width = '500px';
    hours.style.color = '#fff';
    hours.style.justifyContent = "center";
    content.appendChild(hours);

    const location = document.createElement("div");
    location.setAttribute("class","location");
    location.style = 'flex';
    location.style.flexDirection = "column"
    const locText = document.createElement("h4");
    locText.textContent ="Upstate New York";
    location.style.justifyContent = "center";
    location.appendChild(locText);
    location.style.height = '100px';
    location.style.width = '500px';
    content.appendChild(location);


    //continue making divs and creating the rest of the page with 
    //only javascript
    

    




    














}