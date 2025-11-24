import React from "react";

const pricingTiers = [
	{
		title: "Basic",
		price: "$19/mo",
		features: ["1 Project", "Basic Support", "Community Access"],
		popular: false,
	},
	{
		title: "Pro",
		price: "$49/mo",
		features: ["10 Projects", "Priority Support", "Advanced Analytics"],
		popular: true,
	},
	{
		title: "Enterprise",
		price: "$99/mo",
		features: ["Unlimited Projects", "24/7 Support", "Custom Integrations"],
		popular: false,
	},
];

export default function PricingPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-black py-16 px-4">
			<div className="max-w-5xl w-full mx-auto text-center">
				<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
					Simple Pricing
				</h1>
				<p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
					Choose the plan that fits your needs.
				</p>
				<div className="flex flex-col md:flex-row gap-8 justify-center items-center">
					{pricingTiers.map((tier) => (
						<div
							key={tier.title}
							className={`bg-[#161b22] border border-[#23272f] rounded-2xl shadow-lg p-8 w-full max-w-xs flex flex-col items-center transition-transform hover:scale-105 ${
								tier.popular
									? "border-blue-900 shadow-blue-900/30"
									: ""
							}`}
						>
							{tier.popular && (
								<span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22304a] text-blue-200 text-xs px-4 py-1 rounded-full shadow font-semibold uppercase tracking-widest">
									Most Popular
								</span>
							)}
							<h2 className="text-2xl font-bold text-white mb-2 tracking-wide">
								{tier.title}
							</h2>
							<div className="text-4xl font-extrabold text-blue-200 mb-6">
								{tier.price}
							</div>
							<div className="grid grid-cols-1 gap-3 w-full mb-8">
								{tier.features.map((feature) => (
									<div
										key={feature}
										className="flex items-center gap-3 bg-[#1d2230] border border-[#23272f] rounded-lg px-4 py-2 text-gray-200 shadow-sm"
									>
										<svg
											className="w-5 h-5 text-blue-700 flex-shrink-0"
											fill="none"
											stroke="currentColor"
											strokeWidth="2.5"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-base font-medium">
											{feature}
										</span>
									</div>
								))}
							</div>
							<button className="mt-auto px-8 py-3 rounded-lg bg-[#22304a] text-blue-100 font-semibold text-base shadow hover:bg-[#1a2536] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 focus:ring-offset-black">
								Get Started
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
