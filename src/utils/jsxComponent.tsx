const JSXWrapper = (props: {
	attrs: {
		component: () => {
			view: () => JSX.Element;
		};
	};
}) => {
	return {
		view: () => {
			return <>{props.attrs.component().view()}</>;
		},
	};
};
export default JSXWrapper;
