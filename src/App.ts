import "./styles/tailwind.css";

import m from "mithril";
import rootRouter, { errorRouter } from "./routes";

const mountPoint = document.body;

if (mountPoint !== null) {
	const currentURLPathname = window.location.pathname;

	const rootRouterMap = new Array(Object.entries(rootRouter));

	const NotFound = rootRouterMap.map((current, index) => {
		if (current[index][0] == currentURLPathname.toLocaleLowerCase()) {
			return current[index][0];
		} else {
			return 404;
		}
	});

	if (NotFound[0] == 404) {
		// console.log(NotFound[0], errorRouterMap[0][0][1].view());
		m.route(mountPoint, "/", errorRouter);
	} else {
		m.route(mountPoint, "/", rootRouter);
	}
}
