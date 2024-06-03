import { movie } from "../components/CardComponent.js";
import { movies } from "../data/Movies.js";
let render = document.querySelector("#reander");
movies.slice(0,12).map((m) => (render.innerHTML += movie(m)));

