// For Header_nav
import { header_nav, MyFun } from "./Header.js";
document.querySelector("#header").innerHTML=header_nav();

document.querySelector(".drop_btn").addEventListener("click",MyFun);
import { FooterLast } from "./FooterLast.js";
document.querySelector("#footer").innerHTML=FooterLast();
