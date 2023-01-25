import "./styles/tailwind.css";

import m from "mithril";
import { App } from "./App";

const mountNode = document.querySelector("#app");

if (mountNode !== null) {
	m.mount(mountNode, App);
}
