"use client";
import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 12,
    period: "/mo",
    description: "For individuals and hobby projects.",
    features: [
      "1 Project",
      "5GB Storage",
      "Basic Analytics",
      "Community Support"
    ],
    cta: "Start Free",
    highlight: false
  },
  {
    name: "Pro",
    price: 39,
    period: "/mo",
    description: "For professionals and growing teams.",
    features: [
      "10 Projects",
      "100GB Storage",
      "Advanced Analytics",
      "Priority Email Support",
      "Custom Domains"
    ],
    cta: "Go Pro",
    highlight: true
  },
  {
    name: "Enterprise",
    price: 99,
    period: "/mo",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited Projects",
      "1TB Storage",
      "Team Management",
      "24/7 Support",
      "Custom Integrations"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const ModernPricing: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#0d47a1] via-[#1976d2] to-[#8e24aa] py-24 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-white font-sans drop-shadow-xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/80 font-medium font-sans max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl shadow-2xl overflow-hidden border-0 bg-white/10 backdrop-blur-lg p-8 transition-transform duration-300 hover:scale-105 ${
                plan.highlight
                  ? "ring-4 ring-[#8e24aa]/70 scale-105 z-10 shadow-purple-500/30"
                  : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-[#0d47a1] via-[#1976d2] to-[#8e24aa] text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg tracking-widest font-sans uppercase border-2 border-white/30">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-3xl font-black text-white text-center font-sans mb-2 tracking-tight drop-shadow-lg">
                {plan.name}
              </h3>
              <div className="flex justify-center items-end mb-4">
                <span className="text-5xl font-extrabold text-white font-sans drop-shadow-xl">
                  ${plan.price}
                </span>
                <span className="text-lg text-white/70 ml-1 font-medium font-sans">
                  {plan.period}
                </span>
              </div>
              <p className="text-white/80 text-center font-sans mb-8 text-base font-normal">
                {plan.description}
              </p>
              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#0d47a1] via-[#1976d2] to-[#8e24aa] text-white shadow-md">
                      <Check size={18} />
                    </span>
                    <span className="text-white font-medium font-sans text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-xl font-extrabold transition-colors duration-200 tracking-wide font-sans text-lg shadow-xl bg-gradient-to-r from-[#0d47a1] via-[#1976d2] to-[#8e24aa] text-white hover:from-[#0d47a1] hover:to-[#6d1b7b] border-0 ${
                  plan.highlight ? "scale-105" : ""
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernPricing;
