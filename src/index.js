import './style.css'
import { renderHomePage } from './home'
import { renderContact } from './contact'
import { renderMenu } from './menu'


//event listeners for functions that create each page
const menu = document.querySelector("#btn1");
const home = document.querySelector('#btn2');
const contact = document.querySelector('#btn3');

contact.addEventListener("click",function(){
     home.disabled = false;
     renderContact();
});

home.addEventListener("click",function(){
     renderHomePage();
});


menu.addEventListener("click",function(){  
    home.disabled = false;
    renderMenu();
});





//other UI handler functions





//make it fancy