//@Author William E. Velázquez A. - info@williamvelazquez.com
import React from "react";
import { render } from "react-dom";
import "babel-polyfill";

import Home from '../containers/Home';

import '../assets/styles/app.css';

const container = document.getElementById("app");

render(<Home />, container);
