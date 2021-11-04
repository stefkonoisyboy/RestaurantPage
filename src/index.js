import 'bootstrap';
import './scss/app.scss';
import { generateHome } from './home';
import { generateMenu } from './menu';
import { generateContact } from './contact';
import './style.css'

function component() {
    // const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // console.log("Hello from webpack");
  
    // return element;

    const body = document.querySelector("body");

    const header = document.createElement("header");
    header.setAttribute("style", "background-color: rgba(40, 40, 43, 0.7);");

    const headingDiv = document.createElement("div");
    headingDiv.classList.add("row");
    headingDiv.classList.add("mb-5");

    const burgerBarHeading = document.createElement("h1");
    burgerBarHeading.classList.add("text-center");
    burgerBarHeading.classList.add("text-white");
    burgerBarHeading.classList.add("mb-3")
    burgerBarHeading.textContent = "Burger Bar";
    headingDiv.appendChild(burgerBarHeading);

    header.appendChild(headingDiv);

    const navDiv = document.createElement("div");
    navDiv.classList.add("row");
    navDiv.classList.add("text-center");
    header.appendChild(navDiv);

    const homeItem = document.createElement("div");
    homeItem.classList.add("col-md-4");
    homeItem.classList.add("text-white");
    const homeButton = document.createElement("button");
    homeButton.classList.add("btn");
    homeButton.classList.add("btn-success");
    homeButton.classList.add("w-75");
    homeButton.setAttribute("id", "home");
    homeButton.textContent = "HOME";
    homeItem.appendChild(homeButton);
    navDiv.appendChild(homeItem);

    const menuItem = document.createElement("div");
    menuItem.classList.add("col-md-4");
    menuItem.classList.add("text-white");
    const menuButton = document.createElement("button");
    menuButton.classList.add("btn");
    menuButton.classList.add("btn-success");
    menuButton.classList.add("w-75");
    menuButton.setAttribute("id", "menu");
    menuButton.textContent = "MENU";
    menuItem.appendChild(menuButton);
    navDiv.appendChild(menuItem);

    const contactItem = document.createElement("div");
    contactItem.classList.add("col-md-4");
    contactItem.classList.add("text-white");
    const contactButton = document.createElement("button");
    contactButton.classList.add("btn");
    contactButton.classList.add("btn-success");
    contactButton.classList.add("w-75");
    contactButton.setAttribute("id", "contact");
    contactButton.textContent = "CONTACT";
    contactItem.appendChild(contactButton);
    navDiv.appendChild(contactItem);

    body.appendChild(header);

    generateHome();

    homeButton.addEventListener("click", function(e){
        const main = document.querySelector("main");

        if (main != null) {
          body.removeChild(main);
        }
       
        generateHome();
    });

    menuButton.addEventListener("click", function(e) {
      const main = document.querySelector("main");

      if (main != null) {
        body.removeChild(main);
      }

      generateMenu();
    });

    contactButton.addEventListener("click", function(e) {
      const main = document.querySelector("main");

      if (main != null) {
        body.removeChild(main);
      }

      generateContact();
    });

    return body;
  }
  
  document.body.appendChild(component());