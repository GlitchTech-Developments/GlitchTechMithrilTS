import Navbar from "./components/layout/nav";
import Hero from "./components/sections/1-hero";

const App = (JSXWrapper: any) => {
	return {
		view: () => {
			return (
				<>
					<JSXWrapper component={Navbar} />
					<main class="bg-gradient-to-b from-gray-800 via-gray-900 to-blue-900 h-screen flex flex-col pt-20">
						<JSXWrapper component={Hero} />
					</main>
				</>
			);
		},
	};
};
export default App;
