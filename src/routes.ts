import JSXWrapper from "./utils/jsxWrapper";
import PageWrapper from "./components/layout/pageWrapper";
// Pages -> /...
import Home from "./pages/Index";
import NotFound from "./pages/404";

const rootRouter: any = {
	"/": Home(JSXWrapper, PageWrapper),
};

export const errorRouter: any = {
	"/": NotFound(JSXWrapper, PageWrapper),
};

export default rootRouter;
