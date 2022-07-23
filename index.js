// For navbar 
import {navbar, changeBg} from "./navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

window.addEventListener("scroll", changeBg);

// For footer 
import {footer} from "./Footer.js";
document.querySelector("#footer").innerHTML=footer();


