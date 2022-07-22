// For navbar 
import {navbar, changeBg} from "./Navbar/navbar.js";
// document.querySelector("#navbar").innerHTML=navbar();

window.addEventListener("scroll", changeBg);

// For footer 
import {footer} from "./Footer/Footer.js";
// document.querySelector("#footer").innerHTML=footer();

// For Header_nav
import { header_nav, MyFun } from "./Header/Header.js";
// document.querySelector("#header").innerHTML=header_nav();

// document.querySelector(".drop_btn").addEventListener("click",MyFun);
import { FooterLast } from "./FooterLast.js";
document.querySelector("#footer").innerHTML=FooterLast();