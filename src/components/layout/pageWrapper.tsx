import Navbar from "./nav";

const PageWrapper = (props: {
	children: any[];
	attrs: {
		component: () => {
			view: () => JSX.Element;
		};
		JsxWrapper: any;
	};
}) => {
	return {
		view: () => {
			const JsxWrapElem = props.attrs.JsxWrapper;
			return (
				<>
					{JsxWrapElem ? <JsxWrapElem component={Navbar} /> : <></>}
					{props.children ? (
						props.children.map((current) => {
							return current;
						})
					) : (
						<></>
					)}
				</>
			);
		},
	};
};
export default PageWrapper;
