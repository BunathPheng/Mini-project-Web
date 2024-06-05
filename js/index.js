import { footter } from "../components/footter.js";
import { navbars } from "../components/navbar.js";
let footer = document.querySelector("#footer");
let navbar = document.querySelector("#reander");
footer.innerHTML = footter();
navbar.innerHTML = navbars("../src/index.html" ,"../page/cinemas.html" , "../page/promotion.html" ,"../page/about.html");