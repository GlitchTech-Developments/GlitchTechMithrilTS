import "./styles/tailwind.css";

import m from "mithril";
import App from "./App";

import JSXWrapper from "./utils/jsxComponent";

const mountNode = document.querySelector("#app");

if (mountNode !== null) {
	m.mount(mountNode, App(JSXWrapper));
}
