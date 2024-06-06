import { footter } from "../components/footter.js";
import { navbars } from "../components/navbar.js";
import { detail } from "../components/detail.js";
let footer = document.querySelector("#footer");
let navbar = document.querySelector("#reander");
let detail1 = document.querySelector("#rederdetail1");
footer.innerHTML = footter();
navbar.innerHTML = navbars("../src/index.html" ,"../page/cinemas.html" , "../page/promotion.html" ,"../page/about.html");
detail1.innerHTML = detail("../src/img/detail1.jpg","Atlas"," Brad Peyton" , "   Leo SardarianAron Eli Coleite" , " 1h 58m" , "22 May 2024",
"A brilliant data analyst with a deep distrust of AI finds it may be her only hope when a mission to capture a renegade robot goes awry.");
