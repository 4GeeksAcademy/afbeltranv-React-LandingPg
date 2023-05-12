//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../../src/img/500x325placeholder.png"

//import your own components
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Cards from "./component/cards.jsx"
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(<Navbar />, document.querySelector("#navbar"));
ReactDOM.render(<Jumbotron />, document.querySelector("#jumbotron"));
ReactDOM.render(<Cards />, document.querySelector("#cards"));
ReactDOM.render(<Footer />, document.querySelector("#footer"));