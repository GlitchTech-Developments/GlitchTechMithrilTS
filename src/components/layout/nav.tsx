import { themeChange } from "theme-change";

const Navbar = () => {
	let currentTheme = localStorage.theme ? localStorage.theme : "night";

	if (!localStorage.theme) {
		localStorage.setItem("theme", "night");
	}

	const themes = ["corporate", "night", "cyberpunk"];
	const handleThemeChange = (e: any) => {
		switch (e.target.id) {
			case "corporate-theme": {
				if (localStorage.theme == "corporate-theme") {
					currentTheme = themes[1];
				} else {
					currentTheme = themes[0];
				}
			}
			case "night-theme": {
				if (localStorage.theme == "night-theme") {
					currentTheme = themes[2];
				} else {
					currentTheme = themes[1];
				}
			}
			case "cyberpunk-theme": {
				if (localStorage.theme == "night-theme") {
					currentTheme = themes[0];
				} else {
					currentTheme = themes[2];
				}
			}
		}
	};

	return {
		view: () => {
			themeChange();

			return (
				<nav class="flex fixed top-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] py-2 px-2 w-full z-50">
					<div class="text-4xl flex-auto text-left self-center">
						<a href="/" className="hover:underline">
							MithrilTS
						</a>
					</div>
					<div>
						{currentTheme == "cyberpunk" ? (
							<span
								data-set-theme="corporate"
								data-act-class="ACTIVECLASS"
								onclick={handleThemeChange}
								className="btn rounded-lg py-2 px-2 right-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									class="w-4"
									id="corporate-theme"
								>
									<path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z" />
								</svg>
							</span>
						) : currentTheme == "corporate" ? (
							<span
								data-set-theme="night"
								data-act-class="ACTIVECLASS"
								onclick={handleThemeChange}
								class="fill-white btn rounded-lg py-2 px-2 right-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									class="w-4"
									id="night-theme"
								>
									<path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
								</svg>
							</span>
						) : currentTheme == "night" ? (
							<span
								data-set-theme="cyberpunk"
								data-act-class="ACTIVECLASS"
								onclick={handleThemeChange}
								className="btn rounded-lg py-2 px-2 right-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									class="w-4"
									id="cyberpunk-theme"
								>
									<path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z" />
								</svg>
							</span>
						) : (
							"?"
						)}
					</div>
				</nav>
			);
		},
	};
};
export default Navbar;
