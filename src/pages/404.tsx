const NotFound = (JSXWrapper: any, PageWrapper: any) => {
	return {
		view: () => {
			return (
				<PageWrapper JsxWrapper={JSXWrapper}>
					<main class="min-h-screen flex flex-col pt-20">
						<h1 class="m-auto text-2xl">404 - Not Found</h1>
					</main>
				</PageWrapper>
			);
		},
	};
};
export default NotFound;
