import Hero from "../components/sections/home/1-hero";

const App = (JSXWrapper: any, PageWrapper: any) => {
	return {
		view: () => {
			return (
				<PageWrapper JsxWrapper={JSXWrapper}>
					<main class="h-screen flex flex-col pt-20">
						<JSXWrapper component={Hero} />
					</main>
				</PageWrapper>
			);
		},
	};
};
export default App;
