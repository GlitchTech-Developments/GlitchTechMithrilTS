const Hero = () => {
	return {
		view: () => {
			return (
				<div className="hero block min-h-screen bg-base-200 w-full pt-20">
					<div className="hero-content flex-col lg:flex-row gap-8 w-full">
						<div class="w-full lg:w-1/2 max-w-md">
							<h1 className="text-5xl font-bold">MithrilTS</h1>
							<p className="py-6 text-left">
								This is a Mithril app using TypeScript and
								Tailwind!
							</p>
							<a
								href="https://glitchtech.dev/mithrilTS"
								className="btn btn-primary"
							>
								Check the source-code
							</a>
						</div>
						<div className="w-full max-w-xl rounded-lg shadow-2xl">
							<div className="mockup-code">
								<pre data-prefix="$">
									<div
										className="tooltip tooltip-right cursor-pointer"
										data-tip="[repo] = https://glitchtech.dev/mithrilTS"
									>
										<code>git clone [repo]</code>
									</div>
								</pre>
								<pre data-prefix=">" className="text-warning">
									<code>Cloning...</code>
								</pre>
								<pre data-prefix="✓" className="text-success">
									<code>Check!</code>
								</pre>
								<pre data-prefix="$">
									<code>pnpm install</code>
								</pre>
								<pre data-prefix=">" className="text-warning">
									<code>Installing...</code>
								</pre>
								<pre data-prefix="✓" className="text-success">
									<code>Check!</code>
								</pre>
								<pre data-prefix="$">
									<code>pnpm run dev</code>
								</pre>
								<pre data-prefix=">" className="text-warning">
									<code>Running dev server...</code>
								</pre>
								<pre data-prefix="✓" className="text-success">
									<code>Great job!</code>
								</pre>
							</div>
						</div>
					</div>
				</div>
			);
		},
	};
};
export default Hero;
